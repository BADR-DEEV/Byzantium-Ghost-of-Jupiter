import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../constants/StyleConstants"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <Box sx={{
            textAlign: "center",
            margin: "auto",
            width: "100%",
            padding: "10px"
        }}>

            <ThemeProvider theme={theme}>

                <TextField color="neutral"
                    variant="standard" focused
                    sx={{
                        input: {
                            color: "#ff4350",
                        }
                    }}
                    label="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">

                                <SearchIcon sx={{ color: "white", cursor: "pointer" }} onClick={() => {

                                }} />

                            </InputAdornment>
                        ),
                    }}
                />

            </ThemeProvider>
        </Box>
    );
}


export default SearchBar;
