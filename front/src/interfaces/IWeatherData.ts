export interface IWeatherData {
  id: number;
  temperature: number;
  visibility: number;
  wind_speed: number;
  clouds: number;
  cod: number;
  locality: string;
  createdAt: string;
}
