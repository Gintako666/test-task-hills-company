import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { makeApi } from './makeApi';

export const apiEndpoint =
  process.env.REACT_APP_BACK_URL || 'http://localhost:5000';

export const httpClient = axios.create({
  baseURL: apiEndpoint,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

function onRequest(request: InternalAxiosRequestConfig) {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    request.headers.set('Authorization', `Bearer ${accessToken}`);
  }

  return request;
}

function onResponseSuccess(res: any) {
  return res;
}

async function onResponseError(error: AxiosError) {
  const originalRequest = error.config!;
  if (error.response?.status) {
    throw error.response.data;
  }
  return httpClient.request(originalRequest);
}
httpClient.interceptors.request.use(onRequest);
httpClient.interceptors.response.use(onResponseSuccess, onResponseError);

const { getApi } = makeApi(httpClient);

export { getApi };
