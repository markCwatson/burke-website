import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

const Home = () => {
  return (
    <Container
      fixed
      disableGutters
      id="home"
      sx={{
        minWidth: '100%',
        margin: '0 0',
        marginTop: '-64px',
      }}
    >
      <Box sx={{ width: '100%', paddingTop: '64px' }}>
        <div className="bg-image">
          <img
            src="/images/halifax.jpg"
            className="img-fluid"
            alt="Sample"
            style={{ height: '70vh', width: '100%', objectFit: 'cover' }}
          />
          <div
            className="mask"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <Stack sx={{ alignItems: 'center' }}>
                <Box
                  component="a"
                  bgcolor="secondary.dark"
                  sx={{ borderRadius: '15%', p: '10px' }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 45,
                        sm: 75,
                      },
                    }}
                    alt="BJB Renos Plus Inc logo"
                    src="/logo.png"
                  />
                </Box>
                <Typography
                  variant="h7"
                  gutterBottom
                  sx={{ color: 'secondary.light' }}
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
