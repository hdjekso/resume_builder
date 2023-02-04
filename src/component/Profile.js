import React, { Component } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Input from '@mui/material/Input';
import { autocompleteClasses, TextField } from '@mui/material';
import {Stack} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import  AppBar  from '@mui/material/AppBar';


const theme = createTheme({
    typography:{
        fontFamily:[
            "Swansea"
        ]
    },
    background:{
        primary:{
            light: '#c3fdff',
            main: '#90caf9',
            dark: '#5d99c6',
            contrastText: '#fff',
            // default: "#90caf9"
        },

    },
    spacing:8
});

export default function Profile(){
    const navigate= useNavigate();
    const page_back=()=>{
      navigate('/');
    }
    
    return (
        <Box
            sx={{
                backgroundColor:"#CCF2F2",
                height:100
            }}
            style={{ 
                minHeight: "97vh", 
                overflow: "auto",
                minWidth:"90vw" }}
        >
            <AppBar position="relative">
                <Toolbar>
                {/* <CameraIcon sx={{ mr: 2 }} /> */}
                    <Typography variant="h6" color="inherit" noWrap>
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                sx={{
                    backgroundColor:"#e6ebe7",
                }}
                style={{ 
                    minHeight: "85vh", 
                    overflow: "auto",
                    maxWidth:"80vw",
                    margin:"auto",
                    marginTop:"10px"
                }}
            >
                <ThemeProvider theme={theme}>

                    <Typography>

                        <Stack
                            spacing={5}
                            alignContent="center"
                            style={{maxWidth:"75vw", margin:"auto"}}
                        >
                            <Typography variant="h5" noWrap spacing={5} >
                                Profile
                            </Typography>
                            <Stack 
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <TextField id="first_name" label="First Name" variant="outlined" />
                                <TextField id="middle_name" label="Middle Name (optional)" variant="outlined" />
                                <TextField id="last_name" label="Last Name" variant="outlined" />
                            </Stack>
                            
                            <Stack 
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <TextField id="email" fullWidth label="Email" variant="outlined" />
                            </Stack>

                            <Stack 
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <TextField 
                                    id="address" 
                                    fullWidth 
                                    label="Address" 
                                    variant="outlined" 
                                />
                            </Stack>

                            <Stack 
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <TextField id="college" style={{width:"33vw"}} label="College/University" variant="outlined" />
                                <TextField id="gpa" style={{width:"33vw"}} label="GPA (optional)" variant="outlined"  />
                            </Stack>
                            <Stack 
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <TextField id="links" label="links" variant="outlined" />
                            </Stack>
                        </Stack>
                    </Typography>    
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                        style={{maxWidth:"75vw", margin:"auto"}}
                    >
                        <Button variant="contained" onClick={page_back}>Back</Button>
                        <Button variant="contained" >Next</Button>
                    </Stack>      
                </ThemeProvider>
            </Box>
        </Box>
    );
}  
