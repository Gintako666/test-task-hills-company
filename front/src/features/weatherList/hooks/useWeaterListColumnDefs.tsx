import { useMemo } from 'react';
import { DateTime } from 'luxon';

import { IWeatherData } from '../../../interfaces/IWeatherData';
import { convertKelvinToCelsius } from '../../../utils/convertKelvinToCelsius';

import { AccessorKeyColumnDef } from '@tanstack/react-table';

export const COLUMN_KEYS: Array<keyof IWeatherData> = ['id'];

export function useWeatherColumnDefs(weathers: IWeatherData[]) {
  const columns = useMemo<AccessorKeyColumnDef<IWeatherData, any>[]>(() => {
    return [
      {
        header: 'Locality',
        accessorKey: 'locality',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Temperature',
        accessorKey: 'temperature',
        cell: (info) => `${convertKelvinToCelsius(info.getValue())} °C`,
      },
      {
        header: 'Visibility',
        accessorKey: 'visibility',
        cell: (info) => `${info.getValue()} m`,
      },
      {
        header: 'Cloudy',
        accessorKey: 'clouds',
        cell: (info) => `${info.getValue()}%`,
      },
      {
        header: 'Wind speed',
        accessorKey: 'wind_speed',
        cell: (info) => `${info.getValue()} m/s`,
      },
      {
        header: 'Request Time',
        accessorKey: 'createdAt',
        cell: (info) =>
          DateTime.fromISO(info.getValue()).toFormat('HH:mm dd.MM.yyyy'),
      },
    ];
  }, [weathers]);

  const allColumnKeys = useMemo(() => {
    return COLUMN_KEYS;
  }, []);

  return { columns, allColumnKeys };
}
