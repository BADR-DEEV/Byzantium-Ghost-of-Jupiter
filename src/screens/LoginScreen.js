
import { Grid, Button, FormControl, InputLabel, Input, FormHelperText, Box, ThemeProvider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../App.css"
import { theme } from "../constants/StyleConstants"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from '../features/movies/MovieSlice';





const LoginScreen = () => {


    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getMovies())
        
    })


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
                                Sign in to Movies app
                            </Typography>
                        </Grid>
                        <br />


                        <form onSubmit={onSubmit} className="form">
                            <ThemeProvider theme={theme}>
                                <FormControl required={true}>
                                    <InputLabel sx={{ color: "lightgrey" }} color="neutral" htmlFor="my-input">Email</InputLabel>
                                    <Input onChange={onChangeEmail} value={email} name="email" sx={{ input: { color: "white", } }} type="text" id="email" aria-describedby="my-helper-text" />
                                </FormControl>


                                <FormControl required={true} >
                                    <InputLabel sx={{ color: "lightgrey" }} color="neutral" htmlFor="my-input">password</InputLabel>
                                    <Input onChange={onChangePassword} value={password} sx={{ input: { color: "white", } }} name="password" type='password' id="passwprd" aria-describedby="my-helper-text" />
                                    <FormHelperText sx={{ color: "gray" }} id="my-helper-text">We'll never share your email.</FormHelperText>
                                </FormControl>

                                <Button type="submit" variant="contained" color="neutral" >
                                    Log in
                                </Button>

                                <Button
                                    component={Link} to="/"
                                    type="button" color="neutral" >
                                    Cancel
                                </Button>

                            </ThemeProvider>
                            <Typography color="lightgrey">You don't have an account yet ? <Link style={{ color: "#ff4350" }} to="/register"> sign up </Link></Typography>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>

    )
}



export default LoginScreen