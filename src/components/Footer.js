import { Typography , Box, ThemeProvider } from '@mui/material'
import React from 'react'
import "../App.css"
import {theme} from "../constants/StyleConstants"

 const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <ThemeProvider theme = {theme} >
    <Box   sx = {{
     
    position: "relative",
    backgroundColor : "#1a1c20",
    bottom: "0",
    height: "150px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"}} >
    <Typography color = "lightgrey" sx = {{marginBottom : "10px"}}>
    &copy; by Sadeem tech {year} 
    </Typography>
    </Box>
    </ThemeProvider>
  )
}
export default Footer;