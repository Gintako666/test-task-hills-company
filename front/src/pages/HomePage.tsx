import React from 'react';

import { WeatherInfo } from '../features/weatherInfo/component/WeatherInfo';

import { Container } from '@mui/material';

export const HomePage = () => {
  return (
    <Container>
      <WeatherInfo />
    </Container>
  );
};
