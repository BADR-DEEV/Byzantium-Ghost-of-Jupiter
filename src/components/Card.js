import React from 'react'
import { Typography, Card, CardContent, Grid } from '@mui/material';
import "../App.css"
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';

const CardInfo = (props) => {
    const navigate = useNavigate()

    const RedirectToMovies = () => {
        navigate("/movies")
    }

    const RedirectToActors = () => {
        navigate("/actors")
    }

    const RedirectToUsers = () => {
        navigate("/users")
    }
    return (
        <>
            {/* Movies */}
            <Grid container spacing={4} justifyContent="center" sx={{ paddingLeft: "30px", paddingRight: "30px", marginBottom: "30px" }} >
                <Grid sx={{ marginTop: "10px" }} item xs={12} sm={6} md={3} >
                    <div className='animation'>
                        {/* MOVIE-CARD */}
                        <Card onClick={RedirectToMovies} sx={{ backgroundColor: "#1a1c20", boxShadow: "0 3px 10px black", height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ cursor: "pointer", flexGrow: "1", backgroundColor: "#1a1c20", height: "250px", display: "flex", justifyContent: "center", paddingTop: "85px" }}>
                                <Box sx={{ flexDirection: "column" }}>
                                    <Typography variant="h4" color="white" >
                                        <span>{props.titles[0]}</span>
                                    </Typography>
                                    <Typography sx={{ textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center" }} variant="h4" color="#ff4350" >
                                        <span><LocalMoviesIcon sx={{ marginTop: "3px" }} fontSize="15px" /></span>
                                        <span>  &nbsp;{props.movies.length}  </span>
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>

                <Grid sx={{ marginTop: "10px" }} item xs={12} sm={6} md={3} >
                    <div className='animation'>{/* ACTOR-CARD */}
                        <Card onClick={RedirectToActors} sx={{ backgroundColor: "#1a1c20", boxShadow: "0 3px 10px black", height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ cursor: "pointer", flexGrow: "1", backgroundColor: "#1a1c20", height: "250px", display: "flex", justifyContent: "center", paddingTop: "85px" }}>
                                <Box sx={{ flexDirection: "column" }}>
                                    <Typography variant="h4" color="white" >
                                        <span>{props.titles[1]}</span>
                                    </Typography>
                                    <Typography sx={{ textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center" }} variant="h4" color="#ff4350" >
                                        <span><PeopleIcon sx={{ marginTop: "4px" }} fontSize="25px" /></span>
                                        <span>  &nbsp;{props.actors.meta ? props.actors.meta.total : 0}</span>
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>

                <Grid sx={{ marginTop: "10px" }} item xs={12} sm={6} md={3} >
                    <div className='animation'>
                        <Card onClick= {RedirectToUsers} sx={{ backgroundColor: "#1a1c20", boxShadow: "0 3px 10px black", height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ cursor: "pointer", flexGrow: "1", backgroundColor: "#1a1c20", height: "250px", display: "flex", justifyContent: "center", paddingTop: "85px" }}>
                                <Box sx={{ flexDirection: "column" }}>
                                    <Typography variant="h4" color="white" >
                                        <span>{props.titles[2]}</span>
                                    </Typography>
                                    <Typography sx={{ textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center" }} variant="h4" color="#ff4350" >
                                        <span><PersonIcon sx={{ marginTop: "4px" }} fontSize="25px" /></span>
                                        <span>  &nbsp;{props.users.length}</span>
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>

                <Grid sx={{ marginTop: "10px" }} item xs={12} sm={6} md={3} >
                    <div className='animation'>
                        <Card onClick={() => { console.log("clicked") }} sx={{ backgroundColor: "#1a1c20", boxShadow: "0 3px 10px black", height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ cursor: "pointer", flexGrow: "1", backgroundColor: "#1a1c20", height: "250px", display: "flex", justifyContent: "center", paddingTop: "85px" }}>
                                <Box sx={{ flexDirection: "column" }}>
                                    <Typography variant="h4" color="white" >
                                        <span>{props.titles[3]}</span>
                                    </Typography>
                                    <Typography sx={{ textAlign: "center" }} variant="h4" color="#ff4350" >
                                        <span>0</span>
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default CardInfo