import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

import QuoteModal from './QuoteModal';
import ThanksModal from './ThanksModal';
import MenuDrawer from './MenuDrawer';

function Navbar({ home }) {
  const [open, setOpen] = React.useState(false);
  const [thanks, setThanks] = React.useState(false);

  const getHref = (section) => (home ? `#${section}` : `/`);

  const handleOpen = () => setOpen(true);
  const handleQuoteClose = () => {
    setOpen(false);
  };

  const sayThanks = () => {
    setThanks(true);
    setTimeout(() => {
      setThanks(false);
    }, 4000);
  };

  const handleThanksClose = () => {
    setThanks(false);
  };

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
            href={getHref('projects')}
            sx={{ marginRight: '15px' }}
          >
            Projects
          </Button>
          <Button variant="text" size="small" href={getHref('contact')}>
            Contact
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Button
            variant="contained"
            size="small"
            endIcon={<SendIcon />}
            onClick={handleOpen}
          >
            Get A Quote
          </Button>
          <QuoteModal
            open={open}
            handleClose={handleQuoteClose}
            sayThanks={sayThanks}
          />
          <ThanksModal thanks={thanks} handleClose={handleThanksClose} />
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <Button variant="contained" onClick={handleOpen}>
            Get A Quote
          </Button>
        </Box>
        <MenuDrawer />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
