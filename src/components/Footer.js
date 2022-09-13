import { Typography, Box, ThemeProvider } from '@mui/material'
import React from 'react'
import "../App.css"
import { theme } from "../constants/StyleConstants"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    // <ThemeProvider theme = {theme} >
    <Box sx={{


      backgroundColor: "#1a1c20",


      position: "relative",
      bottom: "0",
      // marginBottom : "0",
      // clear: "both",

      height: "82px",
      // width: "100%",
      display: "flex",
      //  flexDirection : "column",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",

    }} >
      <Typography color="lightgrey">
        &copy; by Sadeem tech {year}
      </Typography>
    </Box>
    // </ThemeProvider>
  )
}
export default Footer;