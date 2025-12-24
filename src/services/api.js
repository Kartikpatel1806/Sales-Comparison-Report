import axios from "axios";

export const fetchSalesData = async () => {
  try {
    const response = await axios.get(
      "/api/salecomparison/lmtd/gsm"
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
