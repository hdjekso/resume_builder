import { from } from "form-data";
import React, { useState, useEffect, useDebugValue } from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, CardHeader, Grid, TextField } from "@mui/material";
import { MuiChipsInput } from "mui-chips-input";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SkillSection.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addskill,
  removeskill,
  addcoursework,
  removecoursework,
} from "../../action";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { Divider } from '@mui/material';

const SkillSection = () => {
  const dispatch = useDispatch();

  // const [skillChips, setSkillChips] = React.useState([])
  const skills = useSelector((state) => {
    return state.skills;
  });

  const courseworks = useSelector((state) => {
    return state.courseworks;
  });
  // const [cwkChips, setCwkChips] = React.useState([])
  
  const [companyName, setCompanyName] = React.useState("Company Name");
  const [jobTitle, setJobTitle] = React.useState("Job Title");
  const [jobDesc, setJobDesc] = React.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis magna mollis, commodo nibh vel, placerat magna. Donec auctor porta urna in molestie. Praesent feugiat sit amet ligula id ullamcorper. Aenean egestas lacinia blandit. In ex arcu, tincidunt a semper vel, blandit eu ipsum. Donec vitae orci ex. Nunc volutpat.");

  const handleCompanyName = (newName) => {
    setCompanyName(newName);
  }

  const handleJobTitle = (newTitle) => {
    setJobTitle(newTitle);
  }

  const handleJobDesc = (newDesc) => {
    setJobDesc(newDesc);
  }

  const addskillhandle = (skill) => {
    dispatch(addskill(skill));
  };

  const addcourseworkhandle = (coursework) => {
    dispatch(addcoursework(coursework));
  };
  // const handleCwkChange = (newChips) => {
  //   setCwkChips(newChips);
  //   console.log(cwkChips);
  // }

  //add/ remove buttons
  const [workFields, setWorkFields] = useState([{ work: "0" }]);
  const [workCounter_, setWorkCounter_] = useState(1);

  const handleAddWork = () => {
    setWorkCounter_(workCounter_ + 1);
    setWorkFields([...workFields, { work: workCounter_ + 1 }]);
  };

  const handleRemoveWork = (index) => {
    const list = [...workFields];
    list.splice(index, 1);
    console.log(list);
    setWorkCounter_(workCounter_ - 1);
    setWorkFields(list);
  };

  //date pickers
  const [startDate, setStartDate] = React.useState(
    dayjs("2023-06-13T21:11:54")
  );

  const handleStartDateChange = (newDate) => {
    setStartDate(newDate);
  };

  const [endDate, setEndDate] = React.useState(dayjs("2023-06-13T21:11:54"));

  const handleEndDateChange = (newDate) => {
    setEndDate(newDate);
  };

  const [btnStatus, setBtnStatus] = useState(false);
  //status of the end date picker

  const [haveExperience, setHaveExperience] = useState(true);

  const handleCheckChange = () => {
    if (btnStatus === false) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleWorkExperienceChange = () => {
    setHaveExperience((haveExperience + 1) % 2);
  };

  return (
    <form autoComplete="off" noValidate md={6}>
      <Card
        sx={{
          border: 1,
          borderColor: "grey.500",
          backgroundColor: "#f1ffff",
        }}
        style={{
          minHeight: "78vh",
          overflow: "auto",
          minWidth: "45vw",
        }}
      >
        <CardHeader subheader="Please fill in your information: " />
        <Grid
          container
          rowSpacing={7}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          paddingRight={3}
          paddingLeft={3}
        >
          <Grid item md={12} xs={12}>
            <Typography
              variant="h5"
              component="div"
              sx={{ mb: 0.5, fontWeight: "bold", color: "#5484D7" }}
            >
              Skills
            </Typography>
            <MuiChipsInput
              value={skills}
              onChange={addskillhandle}
              sx={{ width: "66%", backgroundColor: "#ffffff" }}
              required
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <Typography
              variant="h5"
              component="div"
              sx={{ mb: 0.5, fontWeight: "bold", color: "#5484D7" }}
            >
              Coursework
            </Typography>
            <MuiChipsInput
              value={courseworks}
              onChange={addcourseworkhandle}
              sx={{ width: "66%", backgroundColor: "#ffffff" }}
              required
            />
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          component="div"
          mt={8}
          paddingRight={3}
          paddingLeft={3}
          sx={{
            fontWeight: "bold",
            color: "#5484D7",
          }}
        >
          Work Experience
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox style={{ marginLeft: 35, padding: 5 }} defaultChecked />} label={<Typography variant="h7" color="textSecondary">I have work experience</Typography>} 
            onChange={handleWorkExperienceChange}/>
        </FormGroup>

        {haveExperience ? workFields.map((index) => (
          <Grid container spacing={4} mt={0} paddingRight={3} paddingLeft={3}>
            <Grid item md={12} xs={12}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mb: 0.5,
                  color: "#2d2d2d",
                  textDecoration: "underline",
                  display: "inline",  
                }}
              >
                Work Experience {workCounter_}
              </Typography>
            </Grid>
            <Grid item md={6.3} xs={12} mt={0}>
              <Typography
                sx={{ mb: 0, fontWeight: "bold", color: "#101010", fontSize: 22, fontFamily: 'Serif'}}
              >
                {companyName}</Typography>
              <Typography
                sx={{ mb: 0.5, color: "#4b4b4b", fontSize: 18, fontFamily: 'Serif', fontStyle: 'Italic'}}
              >
                {jobTitle}</Typography>
            </Grid>
            <Grid item md={2} xs={12}>
              <Typography
                sx={{ mt: 0.5, mb: 0.5, color: "#4b4b4b", fontSize: 16}}>
                  {startDate.format('MM/YYYY')} - {endDate.format('MM/YYYY')}
              </Typography>
            </Grid>
            <Grid item md={3} xs={4}>
              {workFields.length >= 1 &&(
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveWork(index)}
                >
                  REMOVE
                </button>
              )}
            </Grid>
            <Grid item md={8.3} xs={12}>
              <Typography
                variant="body"
                sx={{ mt: 0.5, mb: 0.5, color: "#4b4b4b", fontSize: 16}}>
                  {jobDesc}
              </Typography>
            </Grid>
          </Grid>
        )) : ""}

        {haveExperience ?
          <Grid container spacing={4} mt={0} paddingRight={3} paddingLeft={3}>
            <Grid item md={7} xs={7}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mb: 0.5,
                  color: "#8EB8FF",
                  textDecoration: "underline",
                  display: "inline",
                }}
              >
                Work Experience {workCounter_ + 1}
              </Typography>
            </Grid>
            <Grid item md={12} xs={12} mt={0}>
              <TextField
                sx={{ width: "66%", backgroundColor: "#ffffff" }}
                mt={0}
                required
                label="Company name"
                variant="outlined"
                onChange={handleCompanyName}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                sx={{ backgroundColor: "#ffffff", width: "33%" }}
                required
                label="Job title"
                variant="outlined"
                onChange={handleJobTitle}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Start date"
                  inputFormat="MM/YYYY"
                  value={startDate}
                  onChange={handleStartDateChange}
                  renderInput={(params) => (
                    <TextField
                      sx={{ backgroundColor: "#ffffff" }}
                      required
                      fullWidth
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={handleCheckChange} />}
                  label="This is an ongoing job"
                />
              </FormGroup>
            </Grid>
            <Grid item md={3} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  disabled={btnStatus}
                  label="End date"
                  inputFormat="MM/YYYY"
                  value={endDate}
                  onChange={handleEndDateChange}
                  renderInput={(params) => (
                    <TextField
                      sx={{ backgroundColor: "#ffffff" }}
                      required
                      fullWidth
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={8} xs={12}>
              <TextField
                sx={{ backgroundColor: "#ffffff" }}
                required
                fullWidth
                label="Job Description"
                variant="outlined"
                onChange={handleJobDesc}
                multiline
                rows={4}
              />
            </Grid>
            {workFields.length < 3 && (
              <Grid item md={12} xs={12} mt={0}>
                <button
                  className="add-btn"
                  onClick={() => handleAddWork()}
                >
                  + Add
                </button>
              </Grid>
            )}
            <Grid item md={8} xs={12} mb={4}></Grid>
          </Grid>
        : ""}
        <Grid container mb={10}></Grid>
      </Card>
    </form>
  );
};

export default SkillSection;
