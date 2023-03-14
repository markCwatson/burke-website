import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Container fixed id="home" sx={{ paddingTop: "80px", width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <div className="bg-image">
          <img
            src="/images/halifax.jpg"
            className="img-fluid"
            alt="Sample"
            style={{ height: "60vh", width: "100%", objectFit: "cover" }}
          />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <Stack sx={{ alignItems: "center" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "secondary.light" }}
                >
                  BJB Renos+
                </Typography>
                <Typography
                  variant="h7"
                  gutterBottom
                  sx={{ color: "secondary.light" }}
                >
                  Atlantic Canada's contractor
                </Typography>
              </Stack>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Home;
