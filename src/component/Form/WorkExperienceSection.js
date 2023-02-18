import { from } from "form-data";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
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

const WorkExperienceSection = () => {

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

  //awards link
  const[award_link,setAward_link]=useState([{awards: '0'}]);
  // console.log("award ",award_link);
  
  const add_award_link= (index) =>{
    setAward_link([...award_link,{awards: index+1}])
  }
  

  const remove_award_link = (index) => {
    const list = [...award_link];
    list.splice(index, 1);
    console.log(list);
    setAward_link(list);
  }

  return (
    <Card 
      sx={{
        border: 1, 
        borderColor: 'grey.500', 
        backgroundColor: "#f1ffff"
      }}
      style={{ 
        minHeight: "78vh", 
        overflow: "auto",
        minWidth:"45vw" 
      }}
    >
      <CardHeader subheader="Work Experiences" />
        {/* <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 4 }} paddingRight={3} paddingLeft={3}>
          <Grid item md={4} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Company" variant="outlined" />           
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Job Title" variant="outlined" />           
          </Grid>
          <Grid item md={2} xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                label="Start date"
                inputFormat="MM/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
                />
              </LocalizationProvider>
          </Grid>
          <Grid item md={2} xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                label="End date"
                inputFormat="MM/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
                />
              </LocalizationProvider>
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Job Responsibilities" helperText="~3-4 bullet point, start w/ Action verbs, numbers if possible" variant="outlined" multiline rows={5} />
          </Grid>
          
        </Grid> */}
        {linkFields.map((singleLink, index) => (
          <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3} key={index}>
            <Grid item md={12} xs={12}>
              
              <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 4 }} paddingRight={3} paddingLeft={3}>
                <Grid item md={8} xs={12}>
                  <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Project Name" variant="outlined" />           
                </Grid>
                <Grid item md={2} xs={12}>
                  <TextField sx={{backgroundColor: "#ffffff"}} fullWidth label="Link" variant="outlined" />           
                </Grid>
                <Grid item md={2} xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                      label="Start date"
                      inputFormat="MM/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
                      />
                    </LocalizationProvider>
                </Grid>
            {/* <Grid item md={2} xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                  label="End date"
                  inputFormat="MM/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
                  />
                </LocalizationProvider>
            </Grid> */}
                <Grid item md={12} xs={12}>
                  <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Project Description" helperText="TIPS: ~3-4 bullet point, start w/ Action verbs, numbers if possible, highlight/emphasize skills" variant="outlined" multiline rows={5} />
                </Grid>
          
          </Grid>
              {linkFields.length > 1 && linkFields.length - 1 === index && 
                <button className="remove-btn"
                onClick = {() => handleRemoveLink(index)}
                >remove</button>
              }
            </Grid>
            {linkFields.length - 1 === index && linkFields.length < 5 && 
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

      <CardHeader subheader="Awards/Certifications" />
        {award_link.map((element,index) => (
          <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3} key={index}>
            <Grid container item  rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
              <Grid item md={8.5} xs={12}>
                <TextField sx={{backgroundColor: "#ffffff"}} fullWidth label="Award Title" variant="outlined"  rows={1} />
              </Grid>
              <Grid item md={3.5} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="End date"
                      inputFormat="MM/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
                    />
                </LocalizationProvider>
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Award Summary" variant="outlined" helperText="Emphasis on skill, what qualities/effort/skill did you use to achieve the Award " multiline rows={2} />
              </Grid>
              {award_link.length > 1 && award_link.length - 1 === index && 
                <button className="remove-btn"
                onClick = {() => remove_award_link(index)}
                >remove</button>
              }
            </Grid>
            {award_link.length - 1 === index && award_link.length < 3 && 
            (
              <Grid item md={12} xs={12} mt={0}>   
                <button 
                className="add-btn"
                onClick={() => add_award_link(index)}
                >+ Add</button>
              </Grid>    
            )}
            
          </Grid>
        ))}
      <br></br>
    </Card>
  );
};

export default WorkExperienceSection;