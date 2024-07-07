import { DataTypes } from 'sequelize';

import sequelize from '../config/database';

export const WeatherRequest = sequelize.define('weather_request', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  temperature: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  visibility: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wind_speed: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  clouds: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cod: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  locality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
