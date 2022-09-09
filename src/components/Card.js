import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../constants/StyleConstants"
import "../App.css"



const card = () => {
    return (
        <>


            <div className='animation'>
                <div className="rating">
                    <Typography color="grey" sx={{
                        display: "inline-block",
                        position: "relative",
                        top: "5px",
                    }}>
                        8.5

                    </Typography>

                </div>
                <Card sx={{ border: "black solid", backgroundColor: "lightgray", boxShadow: "0 3px 10px black", height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardMedia sx={{ padding: "150px" }}
                        image="https://source.unsplash.com/random"
                        title="Image"

                    />
                    <CardContent sx={{ flexGrow: "1", backgroundColor: "#1a1c20" }}>

                        <Typography gutterBottom variant="h5" color="white">
                            Fight Club
                        </Typography>

                        <p className = "card-content" >
                        
                        Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job.

                    </p>

                </CardContent>
                {/* 0b1a28 */}
                {/* #1a1c20 */}
                {/* FEFBF6 */}
                <CardActions sx={{ backgroundColor: "#1a1c20" }}>
                    <ThemeProvider theme={theme}>

                        <Button color="neutral" size="sm" >
                            View
                        </Button>

                        <Button size="sm" color="neutral">
                            Edit
                        </Button>
                    </ThemeProvider>

                </CardActions>

            </Card>
            
        </div>


        {/* <hr/> */}


        </>
    )
}

export default card