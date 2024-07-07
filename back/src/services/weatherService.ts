import axios from 'axios';

import { WeatherRequest } from '../models/WeatherRequest';

import { IWeatherResponse } from '../interfaces/IWeatherResponse';

const getWeatherDataByCity = async (
  city: string,
): Promise<IWeatherResponse> => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_KEY}`,
  );
  const { main, visibility, wind, clouds, cod, name } = response.data;
  const croppedWeatherData = {
    temperature: main.temp,
    visibility,
    wind_speed: wind.speed,
    clouds: clouds.all,
    cod,
    locality: name,
  };
  const weatherData = await WeatherRequest.create(croppedWeatherData);
  return weatherData.dataValues;
};

const getAllWeatherData = () => {
  return WeatherRequest.findAll({
    limit: 100,
    order: [['id', 'DESC']],
  });
};

export const weatherService = {
  getWeatherDataByCity,
  getAllWeatherData,
};
