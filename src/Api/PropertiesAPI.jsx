import axios from "axios";

import { API_URL_BASE } from "../utils/apiURL";

export const listProperties = async () => {
  try {
    let result = await axios(`${API_URL_BASE}/list-properties`, {
      method: "GET",
    });
    return result;
  } catch (error) {
    return error;
  }
};
