import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

import MenuDrawer from './MenuDrawer';
import QuoteButton from './QuoteButton';

function Navbar({ home }) {
  const getHref = (section) => (home ? `#${section}` : `/`);

  return (
    <AppBar color="secondary" position="sticky" sx={{ zIndex: '2' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', md: 'space-evenly' },
          alignItems: 'center',
        }}
      >
        <Box component="a" href={getHref('home')}>
          <Box
            component="img"
            sx={{
              height: {
                xs: 35,
                sm: 50,
              },
            }}
            alt="BJB Renos Plus Inc logo"
            src="/logo.png"
          />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button
            variant="text"
            size="small"
            href={getHref('about')}
            sx={{ marginRight: '15px' }}
          >
            About
          </Button>
          <Button
            variant="text"
            size="small"
            href={getHref('services')}
            sx={{ marginRight: '15px' }}
          >
            Services
          </Button>
          <Button
            variant="text"
            size="small"
            href="/projects"
            sx={{ marginRight: '15px' }}
          >
            Projects
          </Button>
          <Button variant="text" size="small" href={getHref('contact')}>
            Contact
          </Button>
        </Box>
        <QuoteButton variant="contained" />
        <MenuDrawer />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
