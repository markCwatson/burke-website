import { Box, Grid, Typography } from '@mui/material';

export default function Label({ label }) {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item sx={{ width: { xs: '100vw', md: '40vw' } }}>
        <Box
          sx={{
            bgcolor: 'secondary.light',
            p: 3,
            mb: 0,
            borderRadius: '50%',
          }}
        >
          <Typography
            align="center"
            sx={{ color: 'primary.main', variant: { xs: 'h7', md: 'h5' } }}
          >
            {label}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
