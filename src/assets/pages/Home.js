import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../../components/HeroBanner';
import SearchExercises from '../../components/SearchExcercises';
import Exercises from '../../components/Excercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home