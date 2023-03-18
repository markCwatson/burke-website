import React, { useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Grid } from '@mui/material';

import projects from '../data/projects';

import './common.css';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Navbar home={false} />
      <Container
        fixed
        disableGutters
        sx={{
          minWidth: '100%',
          m: 0,
          p: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {projects.map((project) => (
            <Grid item xs={12} md={10} key={`grid-${project.id}`}>
              <MDBCard className="mb-3" key={`card-${project.id}`}>
                <MDBCardBody key={`body-${project.id}`}>
                  <MDBCardTitle key={`title-${project.id}`}>
                    {project.title}
                  </MDBCardTitle>
                  <MDBCardText key={`text-${project.id}`}>
                    {project.description}
                  </MDBCardText>
                </MDBCardBody>
                <MDBCarousel
                  showIndicators
                  showControls
                  fade
                  key={`carousel-${project.id}`}
                >
                  {project.images.map((image, index) => (
                    <MDBCarouselItem
                      className="w-100 d-block"
                      itemId={index + 1}
                      key={`item-${index}`}
                      src={image}
                      alt="..."
                      style={{
                        height: '60vh',
                        objectFit: 'cover',
                      }}
                    />
                  ))}
                </MDBCarousel>
              </MDBCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer home={false} />
    </React.Fragment>
  );
}
