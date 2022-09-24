import { Box, Grid, Typography, InputLabel, FormControl, Input, FormHelperText, Button, TextareaAutosize, InputAdornment, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import {
  useParams
} from "react-router-dom";
import "../../App.css"
import { ThemeProvider } from '@mui/system';
import { theme } from '../../constants/StyleConstants';


export default function EditActor() {


  const params = useParams();

  const [dataFile, setDataFile] = useState(null);

  return (
    <>
      <NavigationBar />
      <ThemeProvider theme={theme}>
        <Typography sx={{ paddingTop: "50px", paddingBottom: "30px", paddingLeft: "40px", fontWeight: "bold", color: "white" }} fontSize="30px">Edit User
          <Button variant="contained" color="error" sx={{ position: "relative", left: "70px" }}>Confirm</Button>
        </Typography>
        <Box sx={{ backgroundColor: "white", border: "20px solid #222a31", borderRadius: "30px", marginBottom: "50px" }}>
          <Grid container rowSpacing={4} columnSpacing={{ xs: 6, md: 4 }}>
            <Grid item xs={12} sm={5} md={4}>
              <Box sx={{ margin: "20px 50px" }} >
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                  name = "actorname"
                    sx={{
                      input: { color: "black", borderColor: "#222a31" },
                      label: { color: "gray" }
                    }}
                    label="actor's name"
                    variant="filled"
                    color="neutral" />
                </FormControl>
              </Box>
            </Grid>
            {/* ----------------------Start OF image uploader-------------------- */}
            <Grid item xs={11} sm={5} md={6}>
              <Box sx={{ marginLeft: "50px", marginTop: "30px", marginBottom: "20px" }}>
                <InputLabel sx={{
                  backgroundColor: "#f0f0f0",
                  height: "225px", width: "350px", border: "10px solid black",
                  color: "lightgrey", border: " 1px solid #ccc",
                  display: "inline-block",
                  padding: "6px 12px",
                  cursor: "pointer",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px"
                }}>
                  <Typography color="#ff4350">Upload an image</Typography>
                  <Input inputProps={{ accept: 'image/*' }} onChange={(e) => {
                    setDataFile(e.target.files[0])
                  }} type="file" name="Image" />
                  {dataFile && (
                    <img alt="not found" style={{ height: "105%", width: "485px", position: "relative", right: "60px" }} src={URL.createObjectURL(dataFile)} />)}
                </InputLabel>
                <Button color="neutral" onClick={() => {
                  setDataFile(null)
                }} sx={{}}>Remove</Button>
              </Box>

            </Grid>

            {/* --------------------------END OF image uploader-------------------- */}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}
