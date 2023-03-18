import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { useRef, useState } from 'react';

import useIntersection from '../utils/useIntersection';

const Home = () => {
  const boxRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const inViewport = useIntersection(boxRef, '-50px'); // Trigger if 100px is visible from the element

  if (inViewport) {
    if (!visible) {
      setVisible(true);
    }
  } else {
    if (visible) {
      setVisible(false);
    }
  }

  return (
    <Container
      fixed
      disableGutters
      id="home"
      sx={{
        minWidth: '100%',
        margin: '0 0',
        marginTop: '-64px',
      }}
    >
      <Box
        ref={boxRef}
        sx={{
          width: '100%',
          paddingTop: '64px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 2s ease-in-out',
        }}
      >
        <div className="bg-image">
          <img
            src="/images/halifax.jpg"
            className="img-fluid"
            alt="Sample"
            style={{ height: '80vh', width: '100%', objectFit: 'cover' }}
          />
          <div
            className="mask"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          >
            <div className="d-flex justify-content-center align-items-end h-100">
              <Stack
                sx={{
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h7"
                  gutterBottom
                  sx={{ color: 'secondary.light', p: 0, fontSize: '1.1rem' }}
                >
                  BJB Renos Plus Inc.
                </Typography>
                <Typography
                  variant="h7"
                  gutterBottom
                  sx={{
                    color: 'secondary.light',
                    paddingBottom: 4,
                    fontSize: '1rem',
                  }}
                >
                  Atlantic Canada's contractor
                </Typography>
              </Stack>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Home;
