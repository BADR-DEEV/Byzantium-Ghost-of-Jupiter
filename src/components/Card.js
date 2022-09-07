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
                <Typography color="black" sx={{
                    display: "inline-block",
                    position: "relative",
                    top: "5px",
                }}>
                    8.5

                </Typography>

            </div>
            <Card  sx={{border: "black solid", backgroundColor: "lightgray", boxShadow: "0 3px 10px black", height: "100%", display: "flex", flexDirection: "column" }}>




                <CardMedia sx={{ padding: "150px" }}
                    image="https://source.unsplash.com/random"
                    title="Image"

                />
                <CardContent sx={{ flexGrow: "1", backgroundColor: "#1a1c20" }}>

                    <Typography gutterBottom variant="h5" color="white">
                        Fight Club
                    </Typography>

                    <Typography gutterBottom color="gray">
                    Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.
                    </Typography>

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




        </>
    )
}

export default card