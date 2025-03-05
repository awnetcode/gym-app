import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../../components/HeroBanner';
import SearchExercises from '../../components/SearchExcersises';
import Exercises from '../../components/Excersises';

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