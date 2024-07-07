import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Header } from './features/header/components/Header';
import { HomePage } from './pages/HomePage';
import { WeatherListPage } from './pages/WeatherListPage';

import './index.scss';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='/weather-list' element={<WeatherListPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
