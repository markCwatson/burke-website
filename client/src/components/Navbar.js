import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function Navbar() {
  return (
    <Container id="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Box
              component="img"
              sx={{
                height: 75,
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              alt="BJB Renos Plus Inc logo"
              src="/logo.png"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, p: 2 }}
              color="primary"
            >
              BJB Renos Plus Inc.
            </Typography>
            <Button variant="text" href="#services">
              Services
            </Button>
            <Button variant="text" href="#projects">
              Projects
            </Button>
            <Button variant="text" href="#contact">
              Contact
            </Button>
            <Button variant="contained" size="medium" endIcon={<SendIcon />}>
              Get Quote
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}

export default Navbar;
