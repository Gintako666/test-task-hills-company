import React from 'react';
import { Form, Formik } from 'formik';

import { convertKelvinToCelsius } from '../../../utils/convertKelvinToCelsius';
import { useWeatherInfo } from '../hooks/useWeatherInfo';

import { Button, Input } from '@mui/material';

export const WeatherInfo = () => {
  const { currentWeather, error, handleSubmit } = useWeatherInfo();

  return (
    <div>
      <h3 className='text-3xl font-bold mb-2'>
        Enter the name of the locality
      </h3>
      <Formik
        initialValues={{
          locality: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => {
          return (
            <Form>
              <Input
                id='locality'
                name='locality'
                value={values.locality}
                onChange={handleChange}
              />
              <Button type='submit'>Search</Button>
            </Form>
          );
        }}
      </Formik>

      {currentWeather && (
        <div>
          <h4>
            Temperature: {convertKelvinToCelsius(currentWeather.temperature)} °C
          </h4>
          <h4>Visibility: {currentWeather.visibility} m</h4>
          <h4>Wind speed: {currentWeather.wind_speed} m/s</h4>
          <h4>Cloudy: {currentWeather.clouds}%</h4>
        </div>
      )}
      {error && error}
    </div>
  );
};
