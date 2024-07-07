import cors from 'cors';
import express from 'express';

import { errorMiddleware } from './middlewares/errorMiddleware';

import weatherRouter from './routes/weatherRoutes';

import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(weatherRouter);
app.use(errorMiddleware);

app.listen(PORT);
