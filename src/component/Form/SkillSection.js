import { from } from "form-data";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
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
import { MuiChipsInput } from 'mui-chips-input';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./SkillSection.css";

const SkillSection = () => {

  const [skillChips, setSkillChips] = React.useState([])
  const [cwkChips, setCwkChips] = React.useState([])

  const handleSkillChange = (newChips) => {
    setSkillChips(newChips);
    console.log(skillChips);
  }

  const handleCwkChange = (newChips) => {
    setCwkChips(newChips);
    console.log(cwkChips);
  }

  let workCounter = 1;

  //everything below is from page 1
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

  const [startDate, setStartDate] = React.useState(dayjs('2023-06-13T21:11:54'));

  const handleStartDateChange = (newDate) => {
    setStartDate(newDate);
  };

  const [endDate, setEndDate] = React.useState(dayjs('2023-06-13T21:11:54'));

  const handleEndDateChange = (newDate) => {
    setEndDate(newDate);
  };

  const [btnStatus, setBtnStatus] = useState(false);
  //status of the end date picker

  const handleCheckChange = () => {
    if (btnStatus === false){
      setBtnStatus(true);
    }else{
      setBtnStatus(false);
    }
  }
  

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
          <Grid item md={12} xs={12}>
            <Typography variant="h5" component="div" 
            sx={{ mb: 0.5,
                  fontWeight: 'bold',
                  textDecoration: "underline",
                  color: "#00adb5",}}>
                  Skills
            </Typography> 
            <MuiChipsInput value={skillChips} onChange={handleSkillChange} sx={{width: '66%', backgroundColor: "#ffffff" }} required />
          </Grid>

          <Grid item md={12} xs={12}>
            <Typography variant="h5" component="div" 
              sx={{ mb: 0.5,
                    fontWeight: 'bold',
                    textDecoration: "underline",
                    color: "#00adb5",}}>
                    Coursework
            </Typography> 
            <MuiChipsInput value={cwkChips} onChange={handleCwkChange} sx={{width: '66%', backgroundColor: "#ffffff" }} required />
          </Grid>
        </Grid>
        <Typography variant="h5" component="div" 
          mt={8} paddingRight={3} paddingLeft={3}
          sx={{ mb: 0.5,
            fontWeight: 'bold',
            textDecoration: "underline",
            color: "#00adb5",}}>
            Work Experience
        </Typography>
        <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3}>
          <Grid item md={12} xs={12}>
              <Typography variant="h6" component="div" 
                sx={{ mb: 0.5,
                  color: "#4da8bf",}}>
                  Work Expeience {workCounter}
              </Typography>
              <TextField sx={{width: '66%', backgroundColor: "#ffffff"}} required label="Company name" variant="outlined" /> 
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff", width: '33%'}} required label="Job title" variant="outlined" />
          </Grid>
          <Grid item md={3} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
              label="Start date"
              inputFormat="MM/DD/YYYY"
              value={startDate}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
              />
            </LocalizationProvider>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={handleCheckChange}/>} label="This is an ongoing job" />
            </FormGroup>
          </Grid>
          <Grid item md={3} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker disabled={btnStatus}
              label="End date"
              inputFormat="MM/DD/YYYY"
              value={endDate}
              onChange={handleEndDateChange}
              renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item md={8} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Job Description" variant="outlined" multiline rows={4}/>
          </Grid>
        </Grid>
        <Grid container mb={10}>  
        </Grid> 
        

      </Card>
    </form>
    );
};

export default SkillSection;