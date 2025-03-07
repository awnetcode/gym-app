import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExcercises = () => {
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
        value={""}
        onChange={(e) =>{}}
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
        
        >search</Button>

      </Box>

    </Stack>
  )
}

export default SearchExcercises