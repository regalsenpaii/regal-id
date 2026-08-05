export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Query parameter (q) is required' });

  const apikey = process.env.REGAL_API_KEY;
  if (!apikey) {
    console.error('[Proxy] REGAL_API_KEY missing');
    return res.status(500).json({ error: 'REGAL_API_KEY not configured' });
  }

  try {
    const apiUrl = `https://api.clutch.web.id/search/pinterest?apikey=${apikey}&q=${encodeURIComponent(q)}`;
    console.log('[Proxy] Pinterest request:', q);

    const response = await fetch(apiUrl, { 
      headers: { 'User-Agent': 'YukiStore/1.0' },
      signal: AbortSignal.timeout(15000)
    });

    const data = await response.json();
    console.log('[Proxy] Pinterest response type:', Array.isArray(data) ? 'array' : typeof data, 'length:', Array.isArray(data) ? data.length : (data?.result?.length || 0));
    res.status(200).json(data);
  } catch (error) {
    console.error('[Proxy] Pinterest exception:', error.message);
    res.status(500).json({ error: error.message });
  }
}
