import { TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";

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

export default function QuoteModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    description: "",
  });

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
    }).then();

    e.target.reset();
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box component="form" onSubmit={sendEmail} sx={{ width: "100%" }}>
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
  );
}
