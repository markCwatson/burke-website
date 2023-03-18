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
              marginLeft: {
                xs: '10px',
                md: '45px',
              },
            }}
            alt="BJB Renos Plus Inc logo"
            src="/logo.png"
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Button
            variant="text"
            size="small"
            href={getHref('about')}
            sx={{ marginRight: '35px' }}
          >
            About
          </Button>
          <Button
            variant="text"
            size="small"
            href={getHref('services')}
            sx={{ marginRight: '35px' }}
          >
            Services
          </Button>
          <Button
            variant="text"
            size="small"
            href="/projects"
            sx={{ marginRight: '35px' }}
          >
            Projects
          </Button>
          <Button variant="text" size="small" href={getHref('contact')}>
            Contact
          </Button>
        </Box>
        <Box
          sx={{
            marginRight: '25px',
          }}
        >
          <QuoteButton variant="contained" />
        </Box>
        <MenuDrawer />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
