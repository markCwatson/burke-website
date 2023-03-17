import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

import './ServicesPage.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import services from '../data/services';
import { Container } from '@mui/material';

export async function loader({ params }) {
  const index = params.id;
  return { index };
}

export default function Service() {
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
          height: { md: 'calc(100vh - 128px)' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MDBCard className="mdb-card-custom">
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage
                src={services[index].image}
                alt={services[index].title}
                fluid
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>{services[index].title}</MDBCardTitle>
                <MDBCardText style={{ fontSize: '0.9rem' }}>
                  {services[index].description1}
                </MDBCardText>
                <MDBCardText style={{ fontSize: '0.9rem' }}>
                  {services[index].description2}
                </MDBCardText>
                <MDBCardText style={{ fontSize: '0.9rem' }}>
                  {services[index].description3}
                </MDBCardText>
                <MDBCardText style={{ fontSize: '0.9rem' }}>
                  {services[index].description4}
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Container>
      <Footer home={false} />
    </React.Fragment>
  );
}
