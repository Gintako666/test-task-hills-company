import { Request, Response } from 'express';

import { ApiError } from '../exceptions/ApiError';

import { weatherService } from '../services/weatherService';

const getAllWeatherData = async (req: Request, res: Response) => {
  const items = await weatherService.getAllWeatherData();

  res.send(items);
};

const getWeatherDataByCity = async (req: Request, res: Response) => {
  const { city } = req.params;
  if (!city) {
    throw ApiError.BadRequest('Data error', {});
  }

  try {
    const item = await weatherService.getWeatherDataByCity(city);
    res.send(item);
  } catch (error) {
    throw ApiError.BadRequest('City not found', error);
  }
};

export const weatherController = {
  getWeatherDataByCity,
  getAllWeatherData: getAllWeatherData,
};
