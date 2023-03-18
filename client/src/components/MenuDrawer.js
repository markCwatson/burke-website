import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import RoofingIcon from '@mui/icons-material/Roofing';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import QuoteButton from './QuoteButton';
import SendIcon from '@mui/icons-material/Send';

export default function MenuDrawer() {
  const theme = useTheme();
  const [state, setState] = React.useState(false);
  const [quoteActive, setQuoteActive] = React.useState(false);

  const itemIcons = {
    About: <InfoIcon />,
    Services: <RoofingIcon />,
    Projects: <ArtTrackIcon />,
    Contact: <InboxIcon />,
  };

  const itemLinks = {
    About: '/#about',
    Services: '/#services',
    Projects: '/projects',
    Contact: '/#contact',
  };

  const handleQuoteButtonClick = (event) => {
    event.stopPropagation();
  };

  const toggleDrawer = (logic) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    if (quoteActive) {
      return;
    }

    setState(logic);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['About', 'Services', 'Projects', 'Contact'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            component="a"
            href={itemLinks[text]}
          >
            <ListItemButton>
              <ListItemIcon>{itemIcons[text]}</ListItemIcon>
              <ListItemText
                primary={text}
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={99} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <QuoteButton
              variant="outlined"
              myBgColor={theme.palette.quoteButton.light}
              onClick={handleQuoteButtonClick}
              isActive={setQuoteActive}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment key={'right'}>
      <IconButton
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          right: '0%',
          bgcolor: 'secondary.main',
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
}
