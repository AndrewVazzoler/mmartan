import axios from 'axios';

export const API_ENDPOINT = process.env.API_ENDPOINT || 'http://127.0.0.1:8000';

export async function callApi(
  method: string,
  url: string,
  path: string,
  data?: any
) {
  try {
    const res = await axios.get(url + '/api' + path);
    return await res.data;
  } catch (e) {
    return await e.response.data;
  }
}
