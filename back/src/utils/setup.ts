import '../models/WeatherRequest';

import sequelize from '../config/database';

sequelize.sync({ force: true });
