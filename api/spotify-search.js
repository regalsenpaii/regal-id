export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { q } = req.query;
  if (!q) return res.status(400).json({ status: false, error: 'Query parameter (q) is required' });

  try {
    const apiUrl = `https://api.nexray.web.id/search/spotify?q=${encodeURIComponent(q)}`;
    console.log('[Proxy] Searching Spotify:', apiUrl);

    const response = await fetch(apiUrl, { 
      headers: { 'User-Agent': 'YukiStore/1.0' },
      signal: AbortSignal.timeout(15000)
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('[Proxy] Nexray error:', response.status, text.slice(0, 200));
      return res.status(502).json({ status: false, error: 'Upstream API error', statusCode: response.status });
    }

    const data = await response.json();
    console.log('[Proxy] Nexray success, items:', (data?.data || data?.result || []).length);

    // Pass through response AS-IS
    res.status(200).json(data);
  } catch (error) {
    console.error('[Proxy] Exception:', error.message);
    res.status(500).json({ status: false, error: error.message });
  }
}
