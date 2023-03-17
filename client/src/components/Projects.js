import React, { useRef, useState } from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Box, Container } from '@mui/material';
import Label from './Label';

import useIntersection from '../utils/useIntersection';

export default function Projects() {
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
    <Container fixed disableGutters id="projects" sx={{ paddingTop: '80px' }}>
      <Container
        disableGutters
        sx={{
          xs: { p: 0, width: '100vw' },
          md: { p: 1 },
        }}
      >
        <Label label={'Explore Our Project Gallery'} />
        <Box
          ref={boxRef}
          sx={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            paddingTop: '30px',
            zIndex: '1',
          }}
        >
          <MDBCarousel showIndicators showControls fade>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              src="/images/proj1.jpg"
              alt="..."
              style={{ maxHeight: '60vh', objectFit: 'cover' }}
            >
              <h5>Interior</h5>
              <p>Custom trim and moulding, stairs, and windows.</p>
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src="/images/proj4.jpg"
              alt="..."
              style={{ maxHeight: '60vh', objectFit: 'cover' }}
            >
              <h5>Decks</h5>
              <p>Custom decks of all sizes and materials.</p>
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
                Staging setup to install siding on this commercial building.
              </p>
            </MDBCarouselItem>
          </MDBCarousel>
        </Box>
      </Container>
    </Container>
  );
}
