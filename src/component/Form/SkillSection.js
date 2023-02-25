import React, { useState, useEffect, useDebugValue } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, CardHeader, Grid, TextField } from "@mui/material";
import { MuiChipsInput } from "mui-chips-input";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import "./SkillSection.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addskill,
  removeskill,
  addcoursework,
  removecoursework,
  addWorkexperience,
} from "../../action";

// skill section:

const SkillSection = () => {
  const current = new Date();
  const dispatch = useDispatch();

  // usestate varibales:
  const [companyName, setComanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [startDate, setStartDate] = useState(
    `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`
  );

  const [endDate, setEndDate] = useState(
    `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`
  );
  const [jobDescription, setJobDescription] = useState("");
  const [btnStatus, setBtnStatus] = useState(false);

  // skill section:

  const skills = useSelector((state) => {
    return state.skills;
  });

  // coursework section:
  const courseworks = useSelector((state) => {
    return state.courseworks;
  });

  // work experience section:

  const workexperiences = useSelector((state) => {
    return state.workexperiences;
  });

  // !!!!!!!!!!!
  if (workexperiences) {
    console.log(workexperiences[0]);
  }
  // !!!!!!!!!!!
  // event handlers:

  const addskillhandle = (skill) => {
    dispatch(addskill(skill));
  };

  const addcourseworkhandle = (coursework) => {
    dispatch(addcoursework(coursework));
  };

  const handleCompanyName = (input) => {
    setComanyName(input.target.value);
  };

  const handleJobTitle = (input) => {
    setJobTitle(input.target.value);
  };

  const handleStartDateChange = (newDate) => {
    setStartDate(`${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`);
  };

  const handleEndDateChange = (newDate) => {
    setEndDate(`${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`);
  };

  const handleJobDescription = (input) => {
    setJobDescription(input.target.value);
  };

  const handleAddWorkExperience = (e) => {
    e.preventDefault();
    if (companyName && jobTitle && jobDescription && startDate && endDate) {
      dispatch(
        addWorkexperience({
          companyName,
          jobTitle,
          jobDescription,
          startDate,
          endDate,
        })
      );
      setComanyName("");
      setJobDescription("");
      setStartDate(
        `${
          current.getMonth() + 1
        }/${current.getDate()}/${current.getFullYear()}`
      );
      setEndDate(
        `${
          current.getMonth() + 1
        }/${current.getDate()}/${current.getFullYear()}`
      );
      setJobTitle("");
      setBtnStatus(false);
    } else {
      alert(
        "at least one of the following input for the workexperience section is empty"
      );
    }
  };

  //status of the end date picker

  const handleCheckChange = () => {
    if (btnStatus === false) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
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
              sx={{ mb: 0.5, fontWeight: "bold", color: "#00adb5" }}
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
              sx={{ mb: 0.5, fontWeight: "bold", color: "#00adb5" }}
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

        {/* here is the work experience section: */}

        <Typography
          variant="h5"
          component="div"
          mt={8}
          paddingRight={3}
          paddingLeft={3}
          sx={{
            fontWeight: "bold",
            color: "#00adb5",
          }}
        >
          Work Experience
        </Typography>
        {/* {workFields.map((singleWork, index) => ( */}
        <Grid container spacing={4} mt={0} paddingRight={3} paddingLeft={3}>
          <Grid item md={7} xs={7}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mb: 0.5,
                color: "#4da8bf",
                textDecoration: "underline",
                display: "inline",
              }}
            >
              Work Expeience workcounter
            </Typography>
          </Grid>
          <Grid item md={4} xs={4}>
            {/* {workFields.length > 1 && workFields.length - 1 === index && ( */}
            <button
              className="remove-btn"
              sx={{ display: "inline" }}
              // onClick={() => handleRemoveWork(index)}
            >
              remove
            </button>
            {/* )} */}
          </Grid>
          <Grid item md={12} xs={12} mt={0}>
            <TextField
              sx={{ width: "66%", backgroundColor: "#ffffff" }}
              mt={0}
              required
              label="Company name"
              variant="outlined"
              onChange={handleCompanyName}
              value={companyName}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              sx={{ backgroundColor: "#ffffff", width: "33%" }}
              required
              label="Job title"
              variant="outlined"
              onChange={handleJobTitle}
              value={jobTitle}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Start date"
                inputFormat="MM/DD/YYYY"
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
                inputFormat="MM/DD/YYYY"
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
              multiline
              rows={4}
              onChange={handleJobDescription}
              value={jobDescription}
            />
          </Grid>
          {/* {workFields.length - 1 === index && workFields.length < 3 && ( */}
          <Grid item md={12} xs={12} mt={0}>
            <button className="add-btn" onClick={handleAddWorkExperience}>
              + Add
            </button>
          </Grid>
          {/* )} */}
          <Grid item md={8} xs={12} mb={4}></Grid>
        </Grid>
        {/* ))} */}
        <Grid container mb={10}></Grid>
      </Card>
    </form>
  );
};

export default SkillSection;
