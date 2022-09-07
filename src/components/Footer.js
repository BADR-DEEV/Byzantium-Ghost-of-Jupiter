import { Typography , Box, ThemeProvider } from '@mui/material'
import React from 'react'
import "../App.css"
import {theme} from "../constants/StyleConstants"

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <ThemeProvider theme = {theme} >
    <Box   sx = {{
     
    position: "relative",
    bottom: "0",
    height: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"}} >
    <Typography color = "white">
    Sadeem&copy; {year} 
    </Typography>
    </Box>
    </ThemeProvider>
  )
}
