import { IWeatherData } from '../interfaces/IWeatherData';

export interface GET {
  '/weather-list': {
    params: never;
    result: IWeatherData[];
  };
  '/weather/:city': {
    params: never;
    result: IWeatherData;
  };
}
