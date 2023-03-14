import React from "react";
import Grid from "@mui/material/Grid";
import ImgMediaCard from "./ImgMediaCard";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Services() {
  const services = [
    {
      title: "Carpentry",
      description:
        "BJB Renos+ Inc. offers carpentry services such as custom home building, renovations, additions, and home improvements. We specialize in both residential and commercial construction and use high-quality materials and the latest techniques to ensure exceptional workmanship. We value communication and building long-term relationships with clients.",
      image: "/images/img2.jpg",
    },
    {
      title: "Finish Work",
      description:
        "Finish work refers to the final touches on a construction project, making sure everything looks polished and complete. BJB Renos+ Inc. offers finish work services such as interior/exterior painting, custom trim and molding, and cabinetry installation. These services ensure that the project is not only functional but also aesthetically pleasing.",
      image: "/images/img3.jpg",
    },
    {
      title: "Siding",
      description:
        "Siding is an essential component of any house as it serves both functional and aesthetic purposes. Siding protects the exterior of the house from harsh weather conditions, and it also plays a significant role in the house's overall appearance. BJB Renos+ Inc. understands the importance of siding for a house, and we offer siding services that cater to both of these functions.",
      image: "/images/siding.jpg",
    },
    {
      title: "Decks",
      description:
        "At BJB Renos+ Inc., we recognize the importance of a well-built and visually attractive deck, which is why we offer high-quality deck-building services that meet our clients' specific needs. Our experienced professionals work tirelessly to ensure that your deck is not only sturdy and safe but also visually stunning, adding value and functionality to your property.",
      image: "/images/proj4.jpg",
    },
  ];

  return (
    <Container fixed id="services" sx={{ paddingTop: "80px" }}>
      <Container sx={{ xs: { p: 0 }, md: { p: 6 } }}>
        <Box
          sx={{
            bgcolor: "secondary.light",
            p: 3,
            mb: 0,
          }}
        >
          <Typography
            align="center"
            sx={{ color: "primary.main", variant: { xs: "h7", md: "h5" } }}
          >
            Explore Our Services
          </Typography>
        </Box>
        <Grid
          container
          justifyContent="center"
          spacing="50"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          {services.map((service, index) => (
            <Grid key={index} item>
              <ImgMediaCard imgObj={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default Services;
