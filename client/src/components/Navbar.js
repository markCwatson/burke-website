import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
import { TextField, Container, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Navbar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    description: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      number: "",
      email: "",
      description: "",
    });
    handleClose();
    console.log(formData);

    fetch("/api/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${formData.name}`,
        number: `${formData.number}`,
        email: `${formData.email}`,
        description: `${formData.description}`,
      }),
    }).then((response) => console.log(response));

    e.target.reset();
  };

  return (
    <Container id="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="secondary">
          <Grid container columns={{ xs: 2, md: 12 }}>
            <Grid item xs={2} md={1} key={1}></Grid>
            <Grid item xs={2} md={10} key={2}>
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <img
                    src="/logo.png"
                    alt="BJB Renos Plus Inc logo"
                    height={theme.breakpoints.up("md") ? 75 : 50}
                    style={{ cursor: "pointer" }}
                    onClick={() => (window.location.href = "#home")}
                  />
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Button variant="text" href="#services">
                    Services
                  </Button>
                  <Button variant="text" href="#projects">
                    Projects
                  </Button>
                  <Button variant="text" href="#contact">
                    Contact
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleOpen}
                  >
                    Get Quote
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Box
                        component="form"
                        onSubmit={sendEmail}
                        sx={{ width: "100%" }}
                      >
                        <TextField
                          required
                          name="name"
                          label="Name"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <TextField
                          required
                          name="number"
                          label="Number"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={formData.number}
                          onChange={handleInputChange}
                        />
                        <TextField
                          required
                          name="email"
                          label="Email"
                          type="email"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <TextField
                          required
                          name="description"
                          label="Description"
                          multiline
                          rows={4}
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={formData.description}
                          onChange={handleInputChange}
                        />
                        <Button type="submit" variant="contained">
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </Modal>
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
                  <MenuItem
                    component="a"
                    href="#services"
                    onClick={handleMenuClose}
                  >
                    Services
                  </MenuItem>
                  <MenuItem
                    component="a"
                    href="#projects"
                    onClick={handleMenuClose}
                  >
                    Projects
                  </MenuItem>
                  <MenuItem
                    component="a"
                    href="#contact"
                    onClick={handleMenuClose}
                  >
                    Contact
                  </MenuItem>
                </Menu>
              </Toolbar>
            </Grid>
            <Grid item xs={2} md={1} key={3}></Grid>
          </Grid>
        </AppBar>
      </Box>
    </Container>
  );
}

export default Navbar;
