export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, error: 'URL parameter is required' });

  const apikey = process.env.REGAL_API_KEY;
  if (!apikey) {
    console.error('[Proxy] REGAL_API_KEY missing');
    return res.status(500).json({ status: false, error: 'REGAL_API_KEY not configured' });
  }

  try {
    // Step 1: Fetch download info from Clutch
    const apiUrl = `https://api.clutch.web.id/download/spotify?apikey=${apikey}&url=${encodeURIComponent(url)}`;
    console.log('[Proxy] Download request:', url);

    const response = await fetch(apiUrl, { 
      headers: { 'User-Agent': 'YukiStore/1.0' },
      signal: AbortSignal.timeout(30000)
    });

    const data = await response.json();
    console.log('[Proxy] Clutch response keys:', Object.keys(data));
    console.log('[Proxy] Result keys:', data.result ? Object.keys(data.result) : 'no result');

    // Step 2: Extract title & artist from clutch result
    let title = '', artist = '';
    if (data.result && typeof data.result === 'object') {
      title = data.result.title || data.result.name || '';
      artist = data.result.artist || data.result.artists || '';
    }

    // Step 3: Search Nexray for metadata enrichment (image, album, duration)
    if (title && artist) {
      try {
        const searchUrl = `https://api.nexray.web.id/search/spotify?q=${encodeURIComponent(title + ' ' + artist)}`;
        console.log('[Proxy] Enriching from search:', searchUrl);

        const searchRes = await fetch(searchUrl, {
          headers: { 'User-Agent': 'YukiStore/1.0' },
          signal: AbortSignal.timeout(15000)
        });

        if (searchRes.ok) {
          const searchData = await searchRes.json();
          let tracks = searchData?.result || searchData?.data || [];
          if (!Array.isArray(tracks) && searchData?.data?.tracks) tracks = searchData.data.tracks;
          if (!Array.isArray(tracks) && searchData?.result?.tracks) tracks = searchData.result.tracks;

          if (tracks.length > 0) {
            const first = tracks[0];
            console.log('[Proxy] Enrich found:', { 
              image: first.thumbnail || first.image || 'NONE',
              album: first.album || 'NONE', 
              duration: first.duration || 'NONE'
            });

            // Merge into clutch result
            if (!data.result.image && !data.result.thumbnail) {
              data.result.image = first.thumbnail || first.image || first.cover || '';
            }
            if (!data.result.album) {
              data.result.album = first.album || first.collectionName || '-';
            }
            if (!data.result.duration) {
              data.result.duration = first.duration || first.duration_ms || first.length || '0:00';
            }
          }
        }
      } catch (searchErr) {
        console.log('[Proxy] Search enrich failed (non-critical):', searchErr.message);
      }
    }

    // Pass through enriched response
    res.status(200).json(data);
  } catch (error) {
    console.error('[Proxy] Download exception:', error.message);
    res.status(500).json({ status: false, error: error.message });
  }
}