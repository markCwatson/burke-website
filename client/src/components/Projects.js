import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function Projects() {
  return (
    <Container fixed id="projects" sx={{ paddingTop: "80px" }}>
      <Container sx={{ xs: { p: 0 }, md: { p: 6 } }}>
        <Box
          sx={{
            bgcolor: "secondary.light",
            p: 3,
            mb: 5,
          }}
        >
          <Typography
            align="center"
            sx={{ color: "primary.main", variant: { xs: "h7", md: "h5" } }}
          >
            See our Project Gallery
          </Typography>
        </Box>
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="/images/proj1.jpg"
            alt="..."
            style={{ maxHeight: "60vh", objectFit: "cover" }}
          >
            <h5>Interior</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="/images/proj4.jpg"
            alt="..."
            style={{ maxHeight: "60vh", objectFit: "cover" }}
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
            style={{ maxHeight: "60vh", objectFit: "cover" }}
          >
            <h5>Exterior</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel>
      </Container>
    </Container>
  );
}
