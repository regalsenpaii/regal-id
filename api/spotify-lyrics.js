export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { title } = req.query;
  if (!title) return res.status(400).json({ status: false, error: 'Title parameter is required' });

  const apikey = process.env.REGAL_API_KEY;
  if (!apikey) {
    console.error('[Proxy] REGAL_API_KEY missing');
    return res.status(500).json({ status: false, error: 'REGAL_API_KEY not configured' });
  }

  try {
    const apiUrl = `https://api.clutch.web.id/search/spotify-lirik?apikey=${apikey}&title=${encodeURIComponent(title)}`;
    console.log('[Proxy] Lyrics request:', title);

    const response = await fetch(apiUrl, { 
      headers: { 'User-Agent': 'YukiStore/1.0' },
      signal: AbortSignal.timeout(15000)
    });

    const data = await response.json();
    console.log('[Proxy] Lyrics result keys:', data.result ? Object.keys(data.result) : 'no result');

    // Pass through clutch response AS-IS (same as bot)
    res.status(200).json(data);
  } catch (error) {
    console.error('[Proxy] Lyrics exception:', error.message);
    res.status(500).json({ status: false, error: error.message });
  }
}
