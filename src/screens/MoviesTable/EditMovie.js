import { Box, Grid, Typography , InputLabel , FormControl, Input, FormHelperText, Button } from '@mui/material'
import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import {
  useParams
} from "react-router-dom";

export default function EditMovie() {

  return (
    <>
      <NavigationBar />
      <Box sx={{borderRadius : "20px" , backgroundColor: "white", height: "80vh", margin: "40px 50px" }}>
      <Typography sx ={{padding : "20px 25px" , fontWeight : "bold"}} fontSize="30px">Edit Movie</Typography>

      
      <Box>

      <Grid container spacing={4} justifyContent="start" sx={{ paddingLeft: "30px", paddingRight: "30px" }} >
      <Grid sx={{ marginTop : "10px" }} item  xs={12} sm={6} md={6} >
        <FormControl sx = {{width : "300px"}} required={true} >
          <InputLabel sx={{ color: "lightgrey" }}  htmlFor="my-input">password</InputLabel>
          <Input  fullWidth  sx={{ input: { color: "white" } }} name="password" type='password' id="passwprd" aria-describedby="my-helper-text" />
          <FormHelperText sx={{ color: "gray" }} id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        
        <Grid sx={{ marginTop : "30px" }} item  xs={12} sm={6} md={6} >
        <FormControl required={true} >
          <InputLabel sx={{ color: "lightgrey" }} htmlFor="my-input">password</InputLabel>
          <Input   sx={{ input: { color: "white", } }} name="password" type='password' id="passwprd" aria-describedby="my-helper-text" />
          <FormHelperText sx={{ color: "gray" }} id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        </Grid>

        <Grid sx={{ marginTop : "30px" }} item  xs={12} sm={6} md={6} >
        <FormControl required={true} >
          <InputLabel sx={{ color: "lightgrey" }} htmlFor="my-input">password</InputLabel>
          <Input   sx={{ input: { color: "white", } }} name="password" type='password' id="passwprd" aria-describedby="my-helper-text" />
          <FormHelperText sx={{ color: "gray" }} id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        </Grid>


        <Grid sx={{ marginTop : "30px" }} item  xs={12} sm={6} md={6} >
        <FormControl required={true} >
          <InputLabel sx={{ color: "lightgrey" }} htmlFor="my-input">password</InputLabel>
          <Input   sx={{ input: { color: "white", } }} name="password" type='password' id="passwprd" aria-describedby="my-helper-text" />
          <FormHelperText sx={{ color: "gray" }} id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        </Grid>

        </Grid>

        
        </Grid>
        </Box>
<Button variant = "contained" color = "error" sx = {{position : "relative" , top : "320px" , left : "1350px" , }}>Add</Button>


      </Box>
    </>
  )
}
