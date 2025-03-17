import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../assets/utils/fetchData';

import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExcercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchedExercisesData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }
fetchedExercisesData();
  }, [])

  const handleSearch = async () => { 
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
      
     const searchedEcercises = exercisesData.filter(
       (exercise) => 
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
     )
      setSearch('');
      setExercises(searchedEcercises);
    }
  }

  return (
    <Stack alignItems={"center"} mt={"37px"}
    justifyContent={"center"} p={"20px"}>
      <Typography fontWeight={700}
      textTransform={"capitalize"}
      sx={{fontSize: {lg: '44px', xs: '30px'}}}
      mb={"50px"}
      textAlign={"center"}>
        Awesome exercises <br/> you should know
      </Typography>
      <Box position={"relative"} mb={"72px"}>
        <TextField 
        sx={{
          input: {fontWeight: '700',
          border: 'none',
          borderRadius: '4px'
          },
          width: {lg: '800px', xs: '100%'},
          backgroundColor: '#fff',
          borderRadius: '40px'
        }}
        heihht = "76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'
        />

        <Button className='search-btn'
        sx={{
          bgcolor: '#ff2625',
          color: '#fff',
          textTransform: "none",
          width: {lg: '175px', xs: '80px'},
          fontSize: {lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0'
        }}
        onClick={handleSearch}
        >search</Button>

      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar 
             data={bodyParts}
             bodyPart={bodyPart} 
             setBodyPart={setBodyPart}
        />

      </Box>

    </Stack>
  )
}

export default SearchExcercises