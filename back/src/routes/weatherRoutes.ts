import { Router } from 'express';

import { weatherController } from '../controllers/weatherController';

import { catchError } from '../utils/catchError';

const weatherRouter = Router();

weatherRouter.get(
  '/weather/:city',
  catchError(weatherController.getWeatherDataByCity),
);

weatherRouter.get(
  '/weather-list',
  catchError(weatherController.getAllWeatherData),
);

export default weatherRouter;
