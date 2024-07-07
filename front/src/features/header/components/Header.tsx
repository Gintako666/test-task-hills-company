import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button, Container, Toolbar } from '@mui/material';

const PAGES = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Weather List',
    url: '/weather-list',
  },
];

export const Header = React.memo(() => {
  return (
    <AppBar position='static' className='mb-4'>
      <Container>
        <Toolbar disableGutters>
          <div className='flex'>
            {PAGES.map((page) => (
              <Link to={page.url} key={page.url}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page.text}
                </Button>
              </Link>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
});
