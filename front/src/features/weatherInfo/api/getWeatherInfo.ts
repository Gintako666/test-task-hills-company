import { getApi } from '../../../api/apiInstance';

export const getWeatherInfo = (city: string) => {
  return getApi(`/weather/${city}` as '/weather/:city');
};
