import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../../components/HeroBanner';
import SearchExercises from '../../components/SearchExcercises';
import Exercises from '../../components/Excercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
      setExercises={setExercises} 
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises 
      setExercises={setExercises} 
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home