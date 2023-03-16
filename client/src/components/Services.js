import React, { useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import ImgMediaCard from './ImgMediaCard';
import { Container } from '@mui/material';
import Label from './Label';

import services from '../data/services';
import useIntersection from '../utils/useIntersection';

function Services() {
  const boxRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const inViewport = useIntersection(boxRef, '-100px');

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
    <Container fixed id="services" sx={{ paddingTop: '80px' }}>
      <Label label={'Explore Our Services'} />
      <Grid
        container
        justifyContent="center"
        spacing="50"
        alignItems="center"
        ref={boxRef}
        sx={{
          mt: 1,
          opacity: visible ? 1 : 0,
          transition: 'opacity 2s ease-in-out',
        }}
      >
        {services.map((service, index) => (
          <Grid key={index} item>
            <ImgMediaCard imgObj={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
