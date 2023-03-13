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
        "BJB Renos offers carpentry services such as custom home building, renovations, additions, and home improvements. We specialize in both residential and commercial construction and use high-quality materials and the latest techniques to ensure exceptional workmanship. We value communication and building long-term relationships with clients.",
      image: "/images/img2.jpg",
    },
    {
      title: "Finish Work",
      description:
        "Finish work refers to the final touches on a construction project, making sure everything looks polished and complete. BJB Renos offers finish work services such as interior/exterior painting, custom trim and molding, and cabinetry installation. These services ensure that the project is not only functional but also aesthetically pleasing.",
      image: "/images/img3.jpg",
    },
    {
      title: "Siding",
      description:
        "Siding is an essential component of any house as it serves both functional and aesthetic purposes. Siding protects the exterior of the house from harsh weather conditions, and it also plays a significant role in the house's overall appearance. BJB Renos understands the importance of siding for a house, and we offer siding services that cater to both of these functions. Our experienced professionals work diligently to ensure that your house's siding is not only durable but also visually appealing.",
      image: "/images/img1.jpg",
    },
  ];

  return (
    <Container fixed id="services">
      <Container sx={{ p: 12 }}>
        <Box
          sx={{
            bgcolor: "secondary.light",
            p: 3,
            mb: 3,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ color: "primary.main" }}
          >
            Explore Our Services
          </Typography>
        </Box>
        <Grid
          container
          justifyContent="center"
          spacing="50"
          alignItems="center"
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
