import axios from 'axios';

/* Base API URL (from env) */
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

/* Fetch sales comparison data from backend */
export const fetchSalesData = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/salescomparison/lmtd/gsm`
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
