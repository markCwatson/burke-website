import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Box, Container } from '@mui/material';
import Label from './Label';

export default function Projects() {
  return (
    <Container fixed disableGutters id="projects" sx={{ paddingTop: '80px' }}>
      <Container
        disableGutters
        sx={{
          xs: { p: 0, width: '100vw' },
          md: { p: 1 },
        }}
      >
        <Label label={'Explore Our Project Gallery'} />
        <Box sx={{ paddingTop: '30px' }}>
          <MDBCarousel showIndicators showControls fade>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              src="/images/proj1.jpg"
              alt="..."
              style={{ maxHeight: '60vh', objectFit: 'cover' }}
            >
              <h5>Interior</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src="/images/proj4.jpg"
              alt="..."
              style={{ maxHeight: '60vh', objectFit: 'cover' }}
            >
              <h5>Decks</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src="/images/proj3.jpg"
              alt="..."
              style={{ maxHeight: '60vh', objectFit: 'cover' }}
            >
              <h5>Exterior</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselItem>
          </MDBCarousel>
        </Box>
      </Container>
    </Container>
  );
}
