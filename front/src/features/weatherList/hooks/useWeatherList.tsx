import { useQuery } from 'react-query';

import { IWeatherData } from '../../../interfaces/IWeatherData';
import { getWeatherList } from '../api/getWeatherList';

import { useWeatherColumnDefs } from './useWeaterListColumnDefs';

import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

export const useWeatherList = () => {
  const { data: weatherList = [], isLoading } = useQuery({
    queryKey: ['weatherList'],
    queryFn: async () => {
      try {
        const weatherListFromApi = await getWeatherList();
        return weatherListFromApi;
      } catch (error) {
        return [];
      }
    },
  });

  const { columns } = useWeatherColumnDefs(weatherList);

  const table = useReactTable<IWeatherData>({
    data: weatherList,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return {
    table,
    isLoading,
  };
};
