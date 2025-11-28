import { processResponse } from "../helpers/processResponse";
import { BASE_API } from "../http/http";

export const getContent = async (endpoint, params = {}) => {
  try {
    const urlParam = new URLSearchParams(params).toString();
    const qParam = urlParam ? `?${urlParam}` : "";
    const res = await fetch(`${BASE_API}${endpoint}${qParam}`);
    return processResponse(res);
  } catch (error) {
    console.log(error);
  }
};
