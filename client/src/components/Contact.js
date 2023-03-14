import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const card = (
  <CardContent sx={{ color: "primary.main", bgcolor: "secondary.light" }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 85,
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        alt="BJB Renos Plus Inc logo"
        src="/logo.png"
      />
      <Typography variant="h6" component="div">
        1-902-818-8936
      </Typography>
      <Typography variant="h6">bjbrenosplusinc@gmail.com</Typography>
    </Box>
  </CardContent>
);

export default function OutlinedCard() {
  return (
    <Container
      fixed
      id="contact"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        paddingTop: "80px",
      }}
    >
      <Grid container justifyContent="center">
        <Card variant="outlined">{card}</Card>
      </Grid>
    </Container>
  );
}
