import React, { useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import ServicesCard from './ServicesCard';
import { Box, Container, Typography } from '@mui/material';

import services from '../data/services';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import { useTheme } from '@emotion/react';
import useIntersection from '../utils/useIntersection';

export default function Services() {
  const theme = useTheme();
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
      id="services"
      sx={{
        paddingTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MDBCard style={{ height: '100%' }}>
        <MDBCardBody>
          <Typography
            component="div"
            sx={{ color: theme.palette.primary.main }}
          >
            <MDBCardTitle className="text-center">
              Explore Our Services
            </MDBCardTitle>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Grid
              container
              ref={boxRef}
              justifyContent="center"
              spacing="50"
              alignItems="center"
              sx={{
                mt: 1,
                opacity: visible ? 1 : 0,
                transition: 'opacity 2s ease-in-out',
              }}
            >
              {services.map((service, index) => (
                <Grid key={index} item>
                  <ServicesCard imgObj={service} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </MDBCardBody>
      </MDBCard>
    </Container>
  );
}
