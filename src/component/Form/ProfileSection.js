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
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import "./ProfileSection.css"

const ProfileSection = () => {

  const [linkFields, setLinkFields] = useState([{link: '0'}]);
  console.log(linkFields);

  const handleAddLink = (index) => {
    setLinkFields([...linkFields, {link: index + 1}])
  }

  const handleRemoveLink = (index) => {
    const list = [...linkFields];
    list.splice(index, 1);
    console.log(list);
    setLinkFields(list);
  }

  const [value, setValue] = React.useState(dayjs('2023-06-13T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <form autoComplete="off" noValidate md={6}>
      <Card 
	  	sx={{
			border: 1, 
			borderColor: 'grey.500', 
			backgroundColor: "#f1ffff"}}
		style={{ 
			minHeight: "78vh", 
			overflow: "auto",
			minWidth:"45vw" }}
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
          <Grid item md={3} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
              label="Expected Graduation date"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Major" variant="outlined" />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Degree" variant="outlined" />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} label="GPA (optional)" fullWidth variant="outlined" />
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3}>
          <Grid item md={12} xs={12}>
            <TextField sx={{width: '66%', backgroundColor: "#ffffff" }} required label="Email" variant="outlined" />
          </Grid>
        </Grid>
        {linkFields.map((singleLink, index) => (
          <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3} key={index}>
            <Grid item md={12} xs={12}>
              <TextField sx={{width: '66%', backgroundColor: "#ffffff"}} label="Additional link (optional)" variant="outlined" />
              {linkFields.length > 1 && linkFields.length - 1 === index && 
                <button className="remove-btn"
                onClick = {() => handleRemoveLink(index)}
                >remove</button>
              }
            </Grid>
            {linkFields.length - 1 === index && linkFields.length < 3 && 
            (
              <Grid item md={12} xs={12} mt={0}>   
                <button 
                className="add-btn"
                onClick={() => handleAddLink(index)}
                >+ Add</button>
              </Grid>    
            )}
            
          </Grid>
        ))}
        <Grid container mb={10}>  
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
