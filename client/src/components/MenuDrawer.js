import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import RoofingIcon from '@mui/icons-material/Roofing';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const itemIcons = {
    About: <InfoIcon />,
    Services: <RoofingIcon />,
    Projects: <ArtTrackIcon />,
    Contact: <InboxIcon />,
  };

  const itemLinks = {
    About: '/#about',
    Services: '/#services',
    Projects: '/#projects',
    Contact: '/#contact',
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
        onClick={toggleDrawer('right', true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </React.Fragment>
  );
}
