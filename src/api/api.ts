import axios, { AxiosHeaders } from 'axios';

type RequestType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export async function api(
  method: RequestType,
  url: string,
  body?: unknown,
  headers?: AxiosHeaders
) {
  const config = {
    method,
    url,
    baseURL: process.env.REACT_APP_BASE_URL,
    data: body,
    headers
  };

  try {
    return await axios(config);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error('An error occurred. Please try again later.');
  }
}
