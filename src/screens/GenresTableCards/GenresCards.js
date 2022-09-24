import React from 'react'
import { Typography, Card, CardContent, Grid, CircularProgress, Switch, FormGroup, FormControlLabel, CardActions , ThemeProvider , Button } from '@mui/material';
import "../../App.css"
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, reset } from '../../features/genres/GenresSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import { theme } from '../../constants/StyleConstants';


const GenresCards = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { genres, Loading, error, message } = useSelector(
        (state) => state.genres
    )

    useEffect(() => {
        if (error) {
            console.log(message)
        }
        dispatch(getGenres())
        console.log(genres[0])
        return () => {
            dispatch(reset())
        }
    }, [navigate, dispatch, error, message])

    return (
        <>
            <NavigationBar />

            <br />
      <ThemeProvider theme={theme}>
        <Box>
          
          <Typography color="white" fontSize="35px" sx={{ marginLeft: "45px" , marginTop : "50px" }}>Genres</Typography>
        </Box>
      </ThemeProvider>


            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px" }}>{Loading ? <CircularProgress sx={{ marginTop: "10%" }} /> : <></>}</Box>
            <Grid container spacing={4} justifyContent="center" sx={{ paddingLeft: "30px", paddingRight: "30px", marginBottom: "60px" }} >

                {genres.map((e) => {
                    return (
                        <Grid sx={{ marginTop: "10px" }} item xs={12} sm={6} md={3} >
                            <div className='animation'>
                                <Card onClick={() => { console.log("clicked") }} sx={{ backgroundColor: "#1a1c20", boxShadow: "0 3px 10px black", height: "100%", display: "flex", flexDirection: "column" }}>
                                    <CardContent sx={{ cursor: "pointer", flexGrow: "1", backgroundColor: "#1a1c20", height: "100px", display: "flex", justifyContent: "center", paddingTop: "85px" }}>
                                        <Box sx={{ flexDirection: "column" }}>
                                            <Typography variant="h4" color="white" >
                                                <span>{e.name.en.toString()}</span>
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <FormGroup>
                                            <FormControlLabel sx={{ marginLeft: "15px" }} control={<Switch color="error" defaultChecked={true} />} />
                                        </FormGroup>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>

                    );
                })}
                
            </Grid>
        </>
    )
}
export default GenresCards
