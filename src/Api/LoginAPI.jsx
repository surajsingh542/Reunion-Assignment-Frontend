import axios from "axios";
import { API_URL_BASE } from "../utils/apiURL";

export const userLogin = async (data) => {
  console.log(data);
  try {
    let result = await axios(`${API_URL_BASE}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,

      data: data,
    });
    return result;
  } catch (error) {
    return error;
  }
};
