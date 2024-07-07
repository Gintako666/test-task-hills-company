import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';

import { useError } from '../../../hooks/useError';
import { IWeatherData } from '../../../interfaces/IWeatherData';
import { getWeatherInfo } from '../api/getWeatherInfo';

export const useWeatherInfo = () => {
  const [currentWeather, setCurrentWeather] = useState<IWeatherData | null>(
    null,
  );

  const [error, setError] = useError(null);

  const handleSubmit = useCallback(
    async ({ locality }: { locality: string }) => {
      setCurrentWeather(null);
      setError(null);
      try {
        const weatherFromApi = await getWeatherInfo(locality);
        setCurrentWeather(weatherFromApi);
      } catch (e) {
        setError(`Cannot get weather info. \n ${(e as AxiosError).message}`);
      }
    },
    [],
  );

  return {
    currentWeather,
    error,
    handleSubmit,
  };
};
