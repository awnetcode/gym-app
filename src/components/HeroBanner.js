import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg:'212px', sx:'70px'},
      ml: {sm:'50px'}
    }}>
      <Typography color="#ff2625" fontWeight={600} fontSize={26}>
        Fitness Club
      </Typography>
    </Box>
  )
}

export default HeroBanner