import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Container fixed id="home" sx={{ marginTop: "5px" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="70vh"
        sx={{ height: { xs: "95vh", md: "70vh" } }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            color: "primary.main",
            marginTop: { xs: "40px" },
          }}
        >
          <Typography variant="h5" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to BJB Renos Plus Inc., a family-owned and operated
            construction company dedicated to providing high-quality
            construction services to our clients. With over 20 years of
            experience in the construction industry, we have the expertise and
            knowledge to take on any project, big or small.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We specialize in residential and commercial construction, including
            custom homes, renovations, additions, and home improvements. From
            the initial consultation to the final walkthrough, we work closely
            with our clients to ensure that their vision is realized. We
            understand that every project is unique, and we take the time to
            understand our clients' specific needs and preferences.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: {
                xs: 125,
                sm: 130,
                md: 140,
                lg: 150,
                xl: 160,
              },
            }}
            alt="BJB Renos Plus Inc logo"
            src="/logo.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
