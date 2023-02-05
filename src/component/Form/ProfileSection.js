import { from } from "form-data";
import React, { useState, useEffect } from "react";
import  AppBar  from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

const ProfileSection = () => {
  return (
    <form autoComplete="off" noValidate md={6}>
      <Card 
	  	sx={{
			border: 1, 
			borderColor: 'grey.500',
			backgroundColor: "#f1ffff"}}
		style={{ 
			minHeight: "80vh", 
			overflow: "auto",
			minWidth:"90vw" }}
		>
        <CardHeader subheader="Please fill in your information: " />
        <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 4 }} paddingRight={3} paddingLeft={3}>
          <Grid item md={4} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}}
			required fullWidth label="First Name" variant="outlined" />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} fullWidth label="Middle Name (optional)" variant="outlined" />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Last Name" variant="outlined"/>
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Address" variant="outlined" multiline rows={3}/>
          </Grid>

          <Grid item md={8} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="College/ University" variant="outlined" />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} fullWidth label="GPA (optional)" variant="outlined" />
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={1} mb={10} paddingRight={3} paddingLeft={3}>
          <Grid item md={12} xs={12}>
            <TextField sx={{width: '66%', backgroundColor: "#ffffff" }} required label="Email" variant="outlined" />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField sx={{width: '66%', backgroundColor: "#ffffff"}} label="Link 1 (optional)" variant="outlined" />
          </Grid>  
        </Grid>
      </Card>
    </form>
  );
};

{/*const theme = createTheme({
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

const ProfileSection_old = () => {
  const navigate= useNavigate();
  const page_back=()=>{
    navigate(-1);
  }
  
  return (
      <Box
          sx={{
              backgroundColor:"#CCF2F2",
              height:100,
			  width: '100%'
          }}
          style={{ 
              minHeight: "97vh", 
              overflow: "auto",
              minWidth:"90vw" }}
      >
          <Box
              sx={{
                  backgroundColor:"#ffffff",
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

				<Grid container mt={2} rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 4}} paddingRight={3} paddingLeft={3}>
					<Grid item md={4} xs={12}>
						<TextField required fullWidth label="First Name" variant="outlined" />
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField fullWidth label="Middle Name (optional)" variant="outlined" />
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField required fullWidth label="Last Name" variant="outlined"/>
					</Grid>

					<Grid item md={12} xs={12}>
						<TextField required fullWidth label="Address" variant="outlined" multiline rows={3}/>
					</Grid>

					<Grid item md={8} xs={12}>
						<TextField required fullWidth label="College/ University" variant="outlined" />
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField fullWidth label="GPA (optional)" variant="outlined" />
					</Grid>
				</Grid>
				<Grid container spacing={4} mt={1} mb={10} paddingRight={3} paddingLeft={3}>
				<Grid item md={12} xs={12}>
					<TextField sx={{width: '66%' }} required label="Email" variant="outlined" />
				</Grid>
				<Grid item md={12} xs={12}>
					<TextField sx={{width: '66%' }} label="Link 1 (optional)" variant="outlined" />
				</Grid>  
				</Grid>
			</ThemeProvider>
          </Box>
      </Box>
  );
}*/}

export default ProfileSection;
