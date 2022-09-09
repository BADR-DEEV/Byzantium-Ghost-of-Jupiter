
import { Grid, Button, FormControl, InputLabel, Input, FormHelperText, Box, ThemeProvider, Typography } from '@mui/material'
import "../App.css"
import { theme } from "../constants/StyleConstants"
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import axios from 'axios';




const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmit = () => {
        // console.log(email)
        // console.log(password)
    }

    const onChangeEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <div>
            <Grid container style={{ minHeight: "100vh" }}>
                <Grid item xs={12} md={4} sx={{ backgroundColor: "#1a1c20", borderRightRadius: "30px" }}>
                </Grid>

                <Grid container item xs={12} md={6} sx={{ padding: 10 }} direction="column" justtiify="space-between" alignItems="center"  >
                    <div />
                    <Box sx={{ paddingBottom: "50px", position: "relative", top: "12vh" }}>
                        <Grid container justifyContent="center">
                            <Typography variant='h3' color="white" gutterBottom >
                                Sign up to Movies app
                            </Typography>
                        </Grid>
                        <br />

                        <form onSubmit={onSubmit} className="form">
                            <ThemeProvider theme={theme}>
                                <FormControl required = {true}>
                                    <InputLabel sx={{ color: "lightgrey" }} color="neutral" htmlFor="my-input">Email</InputLabel>
                                    <Input  onChange={onChangeEmail} value = {email} sx={{input: { color: "white", }}} type="text" id="email"  />
                                </FormControl>


                                <FormControl required = {true}>
                                    <InputLabel sx={{ color: "lightgrey" }} color = "neutral" htmlFor="my-input">Password</InputLabel>
                                    <Input onChange={onChangePassword} value = {password} sx={{input: {color: "white",}}}  type='password' id="password" />
                                </FormControl>


                                <FormControl required = {true}>
                                    <InputLabel sx={{ color: "lightgrey" }} color="neutral" htmlFor="my-input">Confirm password</InputLabel>
                                    <Input sx={{input: {color: "white",}}}  type='password' id="passwprd"/>
                                    <FormHelperText sx={{ color: "gray" }} id="my-helper-text">We'll never share your email.</FormHelperText>
                                </FormControl>

                                <Button onClick = {() => {
                                   var res = axios.get("https://smdb.sadeem-lab.com/api/v1/movies")
                                   console.log(res);
                                }} variant="contained" type="submit" color="neutral" >
                                    Sign up
                                </Button>

                                <Button
                                    component={Link} to="/"
                                    type="button" color="neutral" >  
                                    Cancel
                                </Button>

                            </ThemeProvider>
                            <Typography color="lightgrey">Already have an account ? <Link style={{ color: "#ff4350" }}  to="/login"> sign in </Link></Typography>

                        </form>
                    </Box>

                </Grid>
            </Grid>
        </div>

    )
}



export default RegisterScreen