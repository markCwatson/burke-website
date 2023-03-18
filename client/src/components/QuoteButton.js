import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import QuoteModal from './QuoteModal';
import ThanksModal from './ThanksModal';
import { Box, Button } from '@mui/material';

export default function QuoteButton({ variant, modal = true }) {
  const [open, setOpen] = useState(false);
  const [thanks, setThanks] = useState(false);

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
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Button
          variant={variant}
          size="small"
          endIcon={<SendIcon />}
          onClick={modal ? handleOpen : undefined}
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
        <Button variant={variant} onClick={modal ? handleOpen : undefined}>
          Get A Quote
        </Button>
      </Box>
    </>
  );
}
