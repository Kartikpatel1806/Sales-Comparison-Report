// This is a Vercel serverless function that acts as a proxy
// It allows us to make HTTPS requests from the frontend to Vercel,
// and Vercel makes the HTTP request to the API server
// This solves the "Mixed Content" error (HTTPS page trying to access HTTP API)

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // The actual API endpoint we want to call
    const API_URL = 'http://74.225.26.105:8000/salecomparison/lmtd/gsm';

    // Make the request to the API server
    // We use fetch instead of axios here because it's built into Node.js
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if the response is OK
    if (!response.ok) {
      // If API returns an error, forward the status code and error message
      const errorText = await response.text();
      return res.status(response.status).json({
        message: `API Error: ${response.status} ${response.statusText}`,
        error: errorText,
      });
    }

    // Parse the JSON response
    const data = await response.json();

    // Set CORS headers to allow the frontend to access this
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Return the data to the frontend
    return res.status(200).json(data);
  } catch (error) {
    // If there's a network error or other issue
    console.error('Proxy error:', error);
    return res.status(500).json({
      message: 'Failed to fetch data from API',
      error: error.message,
    });
  }
}

