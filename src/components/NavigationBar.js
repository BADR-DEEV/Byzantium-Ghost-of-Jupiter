import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import '../App.css';
import { AppBar, Typography, Toolbar, Divider , Box , ButtonGroup } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../constants/StyleConstants";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GroupIcon from '@mui/icons-material/Group';
import SaveIcon from '@mui/icons-material/Save';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
const NavigationBar = ({ variant, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" color="neutral" elevation={20} >
        <Toolbar>
       

          <Grid container justifyContent="flex-start" alignItems="center">
            <Grid item>
              <Drawer
                variant={variant}
                {...props}
                onClose={() => setOpen(false)}
                open={open}
                PaperProps={{
                  sx: {
                    backgroundColor: "#1a1c20",
                    width: 250,
                  },
                }}
              >
                <List>
                  <ListItem>
                    <Button onClick={() => setOpen(!open)}>
                      {/* {open ? "Hide" : "Show"} Drawer */}
                      <CloseIcon sx={{ color: "white", }} />
                    </Button>
                  </ListItem>
                  <br />
                  <ListItem button onClick={() => setOpen(false)}>
                    <ListItemIcon>
                      <ListItem
                        component={Link}
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          fontWeight: "bolder",
                        }}
                        to="/"
                      >
                        <LocalMoviesIcon sx={{ color: "white" }} /> &nbsp;Movies
                      </ListItem>
                    </ListItemIcon>
                  </ListItem>
                  <ListItem button onClick={() => setOpen(false)}>
                    <ListItemIcon>
                      <ListItem
                        component={Link}
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          fontWeight: "bolder",
                        }}
                        to="/Movies"
                      >
                        <GroupIcon sx={{ color: "white" }} />
                        &nbsp;Actors
                      </ListItem>
                    </ListItemIcon>
                  </ListItem>
                  
                  <ListItem button onClick={() => setOpen(false)}>
                    <ListItemIcon>
                      <ListItem
                        component={Link}
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          fontWeight: "bolder",
                        }}
                        to="/Actors"
                      >

                        <SaveIcon sx={{ color: "white" }} /> &nbsp;Saved Movies
                      </ListItem>
                    </ListItemIcon>
                  </ListItem>
               

                </List>
              </Drawer>
              
            </Grid>
            

            <Grid item>

              <Button onClick={() => setOpen(!open)}>
                <MenuIcon sx={{ color: "white" }} />
              </Button>

            </Grid>
            <Typography variant="h6" color="#FBFBFD">
              Movies App
            </Typography>
          </Grid>
         
          {/* <ButtonGroup variant='outlined' orientation = "horizontal" 
  >

</ButtonGroup> */}
               <Button  sx = {{margin : "15px" , color : "white"}}>Sign&nbsp;in</Button>




        </Toolbar>
        
      </AppBar>
      
    </ThemeProvider>
  );
};

export default NavigationBar;

