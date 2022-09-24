import { Box, Grid, Typography, InputLabel, FormControl, Input, FormHelperText, Button, TextareaAutosize, InputAdornment, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import {
  useNavigate,
  useParams
} from "react-router-dom";
import "../../App.css"
import { borderColor, ThemeProvider } from '@mui/system';
import { theme } from '../../constants/StyleConstants';
import SimpleSlider from "../../components/Slider"
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import DropDownMenu from '../../components/drobDownMenu';

export default function EditUser() {

  const [userInfo , setUserInfo] = useState('')

//   const [auth, setAuth] = useState({
//     name :"" ,
//     email : "",
//     password: ""
//  })

//  const curId = (match.params.id)
//   useEffect(() => {
//     dispatch(getUserDetails(curId))

//     setAuth({name : user.username ,
//          email:user.email , 
//          phone : user.phone
        
//         })
       


  //this will get us the id
  const params = useParams();

  //-------------------------

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
                  name = "username"
                    sx={{
                      input: { color: "black", borderColor: "#222a31" },
                      label: { color: "gray" }
                    }}
                    label="user's name"
                    variant="filled"
                    color="neutral" />
                </FormControl>
              </Box>
              {/* <Box  > */}
                {/* <FormControl fullWidth sx={{ m: 1 }}> */}
                {/* <DropDownMenu/> */}
                {/* </FormControl> */}
              {/* </Box> */}
              <Box sx={{ margin: "20px 50px" }} >
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                  type = 'email'
                    sx={{
                      input: { color: "black", borderColor: "#222a31" },
                      label: { color: "gray" }
                    }}
                    label="email"
                    variant="filled"
                    color="neutral" />
                </FormControl>
              </Box>
              <Box sx={{ margin: "20px 50px" }} >
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                
                    sx={{
                      input: { color: "black", borderColor: "#222a31" },
                      label: { color: "gray" }
                    }}
                    label="password"
                    variant="filled"
                    color="neutral" />
                </FormControl>
                
              </Box>
              {/* <Box sx={{ margin: "20px 50px" }} >
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                    sx={{
                      input: { color: "black", borderColor: "#222a31" },
                      label: { color: "gray" }
                    }}
                    label="Reviews"
                    variant="filled"
                    color="neutral"
                  />
                </FormControl>
              </Box> */}
              {/* <Box sx={{ margin: "20px 58px" }} >
                <textarea
                  type="textarea"
                  aria-label="Discription"
                  // placeholder="Empty"
                  style={{ fontFamily: "Times New Roman, Times, serif", resize: "none", fontSize: "15px", minHeight: "200px", minWidth: "102%", marginTop: "20px" }} />
              </Box> */}
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

            {/* <Grid item xs={10} sm={12} md={12}>
              <Box sx={{ paddingLeft: "90px", paddingRight: "90px", display: "flex", justifyContent: "space-between" }}><Typography fontWeight="bold" fontSize={30} ><span>Actors&nbsp;&nbsp;</span>  </Typography>
                <Button variant="outlined" color="error" size="medium" sx={{}}><AddIcon />Add</Button></Box>
              <SimpleSlider />
            </Grid> */}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}
