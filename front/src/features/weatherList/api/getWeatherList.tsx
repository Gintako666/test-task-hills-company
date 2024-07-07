import { getApi } from '../../../api/apiInstance';

export const getWeatherList = () => {
  return getApi('/weather-list');
};
