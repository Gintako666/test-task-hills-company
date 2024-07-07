import { AxiosInstance } from 'axios';

import * as Endpoints from './endpoints';

export { Endpoints };

const makeGetApi = (axiosInstance: AxiosInstance) => {
  return async function getApi<T extends keyof Endpoints.GET>(
    url: T,
    params?: Endpoints.GET[T]['params'],
    config?: {
      headers?: any;
    },
  ): Promise<Endpoints.GET[T]['result']> {
    const response = await axiosInstance.get(url, {
      params,
      headers: config?.headers,
    });
    return response.data;
  };
};

export const makeApi = (axiosInstance: AxiosInstance) => {
  return {
    getApi: makeGetApi(axiosInstance),
  };
};
