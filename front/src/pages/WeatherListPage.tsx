import React from 'react';

import { WeatherList } from '../features/weatherList/components/WeatherList';

import { Container } from '@mui/material';

export const WeatherListPage = () => {
  return (
    <Container>
      <WeatherList />
    </Container>
  );
};
