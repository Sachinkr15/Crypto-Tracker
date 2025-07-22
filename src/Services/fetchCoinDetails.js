import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(id) {
  try {
    const response = await axiosInstance.get(
      `/coins/${id}`
    );
    // console.log("response", response.data);
    // Check if the response is an array and has data
    return response.data;
  } catch (error) {
    console.error("Error fetching coin data:", error);
    throw error;
  }
}
