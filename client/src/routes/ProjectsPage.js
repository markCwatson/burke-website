import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from '@mui/material';

import projects from '../data/projects';

import './ProjectsPage.css';

export async function loader({ params }) {
  const index = params.id;
  return { index };
}

export default function ProjectsPage() {
  const { index } = useLoaderData();

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
          margin: '0 0',
          //   height: { md: 'calc(100vh - 128px)' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MDBCard className="mb-3">
          <MDBCardBody>
            <MDBCardTitle>Card title{index}</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
          <MDBCarousel
            showIndicators
            showControls
            fade
            style={{ color: 'white' }}
          >
            {projects.map((project) => (
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={project.id}
                key={project.id}
                src={project.img}
                alt="..."
                style={{
                  maxHeight: '60vh',
                  objectFit: 'cover',
                }}
              >
                <h5 style={{ color: '#f5f5f5' }}>LEARN MORE</h5>
                <p style={{ color: '#f5f5f5' }}>
                  Click here to see our project portfolio.
                </p>
              </MDBCarouselItem>
            ))}
          </MDBCarousel>
        </MDBCard>
      </Container>
      <Footer home={false} />
    </React.Fragment>
  );
}
