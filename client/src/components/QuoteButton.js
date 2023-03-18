import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import QuoteModal from './QuoteModal';
import ThanksModal from './ThanksModal';
import { Box, Button } from '@mui/material';

export default function QuoteButton({
  variant,
  onClick = undefined,
  isActive = undefined,
}) {
  const [open, setOpen] = useState(false);
  const [thanks, setThanks] = useState(false);

  const handleOpen = (event) => {
    if (onClick) {
      onClick(event);
      if (isActive) {
        isActive(true);
      }
    }
    setOpen(true);
  };

  const handleQuoteClose = () => {
    setOpen(false);
    if (isActive) {
      isActive(false);
    }
  };

  const sayThanks = () => {
    setThanks(true);
    setTimeout(() => {
      setThanks(false);
      if (isActive) {
        isActive(false);
      }
    }, 4000);
  };

  const handleThanksClose = () => {
    setThanks(false);
    if (isActive) {
      isActive(false);
    }
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
        <Button variant={variant} onClick={handleOpen}>
          Get A Quote
        </Button>
      </Box>
    </>
  );
}
