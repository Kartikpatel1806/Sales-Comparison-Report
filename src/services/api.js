import axios from 'axios';

/* Base API URL */
const API_BASE_URL = 'http://74.225.26.105:8000';

/* Fetch sales comparison data from backend */
export const fetchSalesData = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/salecomparison/lmtd/gsm`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
