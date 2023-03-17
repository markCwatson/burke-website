import React from 'react';
import Grid from '@mui/material/Grid';
import ServicesCard from './ServicesCard';
import { Container } from '@mui/material';
import Label from './Label';

import services from '../data/services';

function Services() {
  return (
    <Container fixed id="services" sx={{ paddingTop: '80px' }}>
      <Label label={'Explore Our Services'} />
      <Grid
        container
        justifyContent="center"
        spacing="50"
        alignItems="center"
        sx={{
          mt: 1,
        }}
      >
        {services.map((service, index) => (
          <Grid key={index} item>
            <ServicesCard imgObj={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
