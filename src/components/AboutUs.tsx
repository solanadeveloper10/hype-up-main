"use client";
import { Box, Grid, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box>
      <Grid
        container
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        mt={4}
        textAlign='center'
      >
        <Typography variant='h3' mb={1} color='white'>
          About me
        </Typography>
        <Typography variant='body1' maxWidth={500} color='#898585'>
          Dive into this incredible music experience. Open-ear audio on each
          side with sound that&apos;s unrivaled for camera glasses. With them
          you&apos;ll experience the true nuances of your music-deep powerful
          bass to crisp, clear high notes. All while staying safe and aware of
          your surroundings
        </Typography>
      </Grid>
    </Box>
  );
};

export default AboutUs;
