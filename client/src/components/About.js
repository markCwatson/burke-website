import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Label from './Label';
import { useRef, useState } from 'react';

import useIntersection from '../utils/useIntersection';

const About = () => {
  const boxRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const inViewport = useIntersection(boxRef, '-50px');

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
    <Container fixed id="about" sx={{ paddingTop: '80px' }}>
      <Label label={'About Us'} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: { xs: '55vh', md: '50vh' }, mb: '60px' }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            color: 'primary.main',
            marginTop: '30px',
          }}
        >
          <Typography variant="body1" gutterBottom>
            BJB Renos Plus Inc. is a family-owned and operated construction
            company dedicated to providing high-quality construction services to
            our clients. With over 20 years of experience in the construction
            industry, we have the expertise and knowledge to take on any
            project, big or small.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We specialize in residential and commercial construction, including
            custom homes, renovations, additions, and home improvements. From
            the initial consultation to the final walkthrough, we work closely
            with our clients to ensure that their vision is realized. We
            understand that every project is unique, and we take the time to
            understand our clients' specific needs and preferences.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            ref={boxRef}
            sx={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 2s ease-in-out',
              height: {
                xs: 125,
                sm: 130,
                md: 140,
                lg: 150,
                xl: 160,
              },
            }}
            alt="BJB Renos Plus Inc logo"
            src="/logo.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
