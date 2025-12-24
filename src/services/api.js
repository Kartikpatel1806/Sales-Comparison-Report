// This file handles all API calls
// We separate API logic here to keep our components clean

import axios from 'axios';

/**
 * Determines the API endpoint to use
 * - In production (Vercel): Use the serverless function proxy (HTTPS)
 * - In development: Use direct API or proxy based on environment
 */
const getApiUrl = () => {
  // Check if we're in production (Vercel deployment)
  if (import.meta.env.PROD) {
    // Use the Vercel serverless function as a proxy
    // This solves the Mixed Content error (HTTPS page accessing HTTP API)
    return '/api/sales-data';
  } else {
    // In development, we can use the direct API
    // Or use the proxy if you prefer consistency
    // For now, we'll use the proxy in dev too to avoid CORS issues
    return '/api/sales-data';
  }
};

/**
 * Fetches sales comparison data from the API
 * Uses a Vercel serverless function as a proxy to avoid Mixed Content errors
 * @returns {Promise} Promise that resolves with the API response data
 */
export const fetchSalesData = async () => {
  try {
    // Get the appropriate API URL (proxy in production, direct in dev)
    const apiUrl = getApiUrl();

    // Using axios.get to make a GET request
    // In production, this goes to /api/sales-data (Vercel function)
    // The Vercel function then proxies to the actual HTTP API
    const response = await axios.get(apiUrl);

    // Return the data from the response
    // Axios automatically parses JSON, so we get the data directly
    return response.data;
  } catch (error) {
    // If there's an error (network issue, server error, etc.)
    // we throw it so the component can handle it
    console.error('API Error:', error);
    throw error;
  }
};
