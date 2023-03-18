import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useRef, useState } from 'react';
import QuoteButton from './QuoteButton';

import useIntersection from '../utils/useIntersection';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

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
    <Container
      fixed
      id="about"
      sx={{
        paddingTop: '80px',
        height: { xs: 'auto', md: '80vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MDBCard style={{ height: '100%' }}>
        <MDBCardBody>
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
              sx={{
                mb: '0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  color: 'primary.main',
                }}
              >
                <Typography variant="body1" gutterBottom>
                  BJB Renos Plus Inc., based out of Halifax, Nova Scotia, is a
                  family-owned and operated construction company dedicated to
                  providing high-quality construction services to our clients.
                  With over 20 years of experience in the construction industry,
                  we have the expertise and knowledge to take on any project,
                  big or small.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  We specialize in residential and commercial construction,
                  including custom homes, renovations, additions, and home
                  improvements. From the initial consultation to the final
                  walkthrough, we work closely with our clients to ensure that
                  their vision is realized. We understand that every project is
                  unique, and we take the time to understand our clients'
                  specific needs and preferences.
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
                    p: '20px',
                  }}
                  alt="BJB Renos Plus Inc logo"
                  src="/logo.png"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: '30px',
                }}
              >
                <QuoteButton variant="outlined" />
              </Grid>
            </Grid>
          </Box>
        </MDBCardBody>
      </MDBCard>
    </Container>
  );
};

export default About;
