import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function Projects() {
  return (
    <Container fixed id="projects" sx={{ p: 12 }}>
      <Box
        sx={{
          bgcolor: "secondary.light",
          p: 3,
          mb: 3,
        }}
      >
        <Typography variant="h5" align="center" sx={{ color: "primary.main" }}>
          See our Project Gallery
        </Typography>
      </Box>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="/images/proj1.jpg"
          alt="..."
        >
          <h5>Interior</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="/images/proj4.jpg"
          alt="..."
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
        >
          <h5>Exterior</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselItem>
      </MDBCarousel>
    </Container>
  );
}
