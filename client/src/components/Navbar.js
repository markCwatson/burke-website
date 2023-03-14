import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography } from "@mui/material";

import QuoteModal from "./QuoteModal";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "space-evenly" },
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "primary.main" }}
          component="a"
          href="#home"
        >
          BJB Renos+
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button variant="text" size="small" href="#about">
            About
          </Button>
          <Button variant="text" size="small" href="#services">
            Services
          </Button>
          <Button variant="text" size="small" href="#projects">
            Projects
          </Button>
          <Button variant="text" size="small" href="#contact">
            Contact
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
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
          <QuoteModal open={open} handleClose={handleClose} />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <Button variant="contained" onClick={handleOpen}>
            Get Quote
          </Button>
        </Box>
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            right: "0%",
            bgcolor: "secondary.main",
          }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={handleMenuClose}
        >
          <MenuItem component="a" href="#about" onClick={handleMenuClose}>
            About
          </MenuItem>
          <MenuItem component="a" href="#services" onClick={handleMenuClose}>
            Services
          </MenuItem>
          <MenuItem component="a" href="#projects" onClick={handleMenuClose}>
            Projects
          </MenuItem>
          <MenuItem component="a" href="#contact" onClick={handleMenuClose}>
            Contact
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
