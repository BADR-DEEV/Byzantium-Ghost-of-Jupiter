
import '../App.css';
import React from 'react';
import { Typography, Grid, CssBaseline, Container, Button } from '@mui/material';

// import { css, ThemeContext } from '@emotion/react';
import { Box, spacing } from '@mui/system';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardInfo from "../components/Card"
import { theme } from "../constants/StyleConstants"




const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function HomeScreen() {

    return (
        <main className='gloable'>


            <CssBaseline />


            <main>
                <Box sx={{ padding: spacing(8, 0, 6), marginTop: "150px" }}>
                    <Container maxWidth="md" sx={{ marginBottom: "100px" }}>
                        <Typography variant="h2" align="center" color="white" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="white" paragraph>
                            Photo Album Photo Album Photo Album Photo Album Photo Album Photo Album
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
                                            See Saved Movies
                                        </Button>
                                    </ThemeProvider>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>


                                {/* Our cards grif system  */}

                <Box sx={{ marginBottom: "150px" , marginLeft : "40px" , marginRight : "40px" , }} maxWidth="xl">
                    <Grid container spacing={5} >
                        {cards.map((card) => (
                            <Grid sx={{ marginBottom: "50px" }} item key={card} xs={12} sm={6} md={3} >
                                <CardInfo>

                                </CardInfo>

                            </Grid>
                        ))}

                    </Grid>

                </Box>
            </main>
            <br />


        </main>

    );
}
export default HomeScreen;
