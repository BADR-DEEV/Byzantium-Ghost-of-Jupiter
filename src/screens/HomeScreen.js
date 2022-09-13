
import '../App.css';
// import React from 'react';
import { Typography, Grid, CssBaseline, Container, Button, CircularProgress } from '@mui/material';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { css, ThemeContext } from '@emotion/react';
import { Box, spacing } from '@mui/system';

import {ThemeProvider } from '@mui/material/styles';
import CardInfo from "../components/Card"
import { theme } from "../constants/StyleConstants"
// import { reset } from '../features/auth/AuthSlice';
import { getMovies , reset } from '../features/movies/MoviesSlice';

import { getActors } from '../features/actors/ActorsSlice';






const titles = ["Total Films" , "Total Actors" , "Total Users" , "Total Reviews"]

const HomeScreen = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.auth)
    const {isLoading , isError , user , isSuccess} = userLogin

    
    const { movies, Loading, Error, message } = useSelector(
      (state) => state.movies
    )

    const { actors, Loader, anError, MessageRecived } = useSelector(
      (state) => state.actors
    )
 
 

    useEffect(() => {

      if (isError || Error || anError) {
        console.log(message)
      }
   
        if (!userLogin.user) {
          navigate('/login')
        }
    
        
        dispatch(getMovies())
        dispatch(getActors())
        console.log(movies)
       

        return () => {
          dispatch(reset())
        }
      }, [user, navigate , dispatch , isError, message])

      
      let RetrivedMovies = {
        movies : movies,
      titles : titles,
      actors : actors


      }

    return (

<>
<Box sx={{ padding: spacing(8, 0, 6), marginTop: "80px" }}>
                    <Container maxWidth="md" sx={{ marginBottom: "20px" }}>
                        <Typography variant="h2" align="center" color="white" gutterBottom>
                            Movie Admin
                        </Typography>
                        <Typography variant="h5" align="center" color="white" paragraph>
                        Add edit delete and view all of your data, orginize all of your buissness data in one place.
                        </Typography>
                        <Box sx={{ marginTop: 5 }}>

                            <Grid container spacing={2} justifyContent="center" >
                                <Grid item >
                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained" color="neutral">
                                            See My Movies
                                        </Button>
                                    </ThemeProvider>
                                </Grid>

                                <Grid item >
                                    <ThemeProvider theme={theme}>

                                        <Button variant="outlined" color="neutral">
                                            See My Actors
                                        </Button>
                                    </ThemeProvider>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
      <br/>
      <br/>
      <main className='globale'>
      <CssBaseline />
      <Box sx= {{display : "flex" , alignItems : "center" , justifyContent : "center"}}>{Loading || Loader ? <CircularProgress/> : <></>}</Box>
                             <CardInfo  {...RetrivedMovies}  />
             </main>
            </>
    );
}
export default HomeScreen;















        //the return was
        // <main className='gloable'>
        //     <CssBaseline />
        //     <main>
                // <Box sx={{ padding: spacing(8, 0, 6), marginTop: "150px" }}>
                //     <Container maxWidth="md" sx={{ marginBottom: "100px" }}>
                //         <Typography variant="h2" align="center" color="white" gutterBottom>
                //             Movie Album
                //         </Typography>
                //         <Typography variant="h5" align="center" color="white" paragraph>
                //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                //         </Typography>
                //         <Box sx={{ marginTop: 5 }}>

                //             <Grid container spacing={2} justifyContent="center" >
                //                 <Grid item >
                //                     <ThemeProvider theme={theme}>
                //                         <Button variant="contained" color="neutral">
                //                             See My Movies
                //                         </Button>
                //                     </ThemeProvider>
                //                 </Grid>

                //                 <Grid item >
                //                     <ThemeProvider theme={theme}>

                //                         <Button variant="outlined" color="neutral">
                //                             See Saved Movies
                //                         </Button>
                //                     </ThemeProvider>
                //                 </Grid>
                //             </Grid>
                //         </Box>
                //     </Container>
                // </Box>
        //         <Grid container spacing={5} justifyContent="center" sx={{ paddingLeft: "30px", paddingRight: "30px" }} >
        //             {cards.map((card) => (
        //                 <>
        //                 <Grid sx={{ marginBottom: "50px" }} item key={card} xs={12} sm={6} md={3} >
        //                     <CardInfo>

        //                     </CardInfo>

        //                 </Grid>
                        
        //                 </>
        //             ))}
        //         </Grid>

        //     </main>
        //     <br />
        // </main>