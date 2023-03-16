import { Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ThanksModal({ thanks, handleClose }) {
  return (
    <Modal
      open={thanks}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box p="5px" textAlign="center" color="#006300">
          <Typography variant="h6" gutterBottom>
            Thank you!
          </Typography>
          <Typography variant="h7" gutterBottom>
            We will contact you shortly!
          </Typography>
        </Box>
        <Box p="5px" textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: '#006300' }}
            onClick={() => handleClose()}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
