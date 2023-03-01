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
import "./SkillSection.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addskill,
  addcoursework,
  addWorkexperience,
  removeWorkExperience,
  editCompanyName,
  editJobTitle,
  editbutton,
  editJobDescription,
  editStartDate,
  editEndDate,
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

  //error checking (input validation)
  const [containsBP, setContainsBP] = useState(true);
  const [skillsFilled, setSkillsFilled] = useState(true);
  const [cwkFilled, setCwkFilled] = useState(true);
  const [error_, setError] = useState(false);

  const errorCheck = () => {
    const inputValid = containsBP && skillsFilled && cwkFilled;
    setError(!inputValid);
  }

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

  const addskillhandle = (skill) => {
    //
    if (skill.length > 5) {
      alert("only maximum 5 skill inputs allow");
    } else {
      dispatch(addskill(skill));
    }
  };

  const addcourseworkhandle = (coursework) => {
    if (coursework.length > 5) {
      alert("only maximum 5 coursework inputs allow");
    } else {
      dispatch(addcoursework(coursework));
    }
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
    const desc = input.target.value
    let firstCharIsBP = false;
    //let correctBPFormat = true;
    //let index = desc.indexOf('-');

    /*if (desc.length >= 1){
      firstCharIsBP = desc.charAt(0) === '-';
      setContainsBP(firstCharIsBP);
      console.log(containsBP);
    }
    errorCheck();*/
    setJobDescription(input.target.value);
    /*if (!error_){
      setJobDescription(input.target.value);
    }*/
  };

  const handleAddWorkExperience = (e) => {
    e.preventDefault();
    if (companyName && jobTitle && jobDescription && startDate && endDate && containsBP) {
      dispatch(
        addWorkexperience({
          companyName,
          jobTitle,
          jobDescription,
          startDate,
          endDate,
          btnStatus,
        })
      );
      console.log(jobDescription);
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
      //setBtnStatus(true);
    } else if (containsBP){
      alert(
        "At least one of the requried input values in your work experience is empty.Please fill in the required inputs before adding another work experience."
      );
    }
  };

  const removeWorkExperienceHandler = (work) => {
    dispatch(removeWorkExperience(work));
  };

  // EDIT WORK EXPERIENCE SECTION:

  const companyNameEdit = (index) => (event) => {
    const { value } = event.target;
    console.log(value);
    dispatch(editCompanyName([index, value]));
  };

  const jobTitleEdit = (index) => (event) => {
    const { value } = event.target;
    console.log(value);
    dispatch(editJobTitle([index, value]));
  };

  const jobDescriptionEdit = (index) => (event) => {
    const { value } = event.target;
    console.log(value);
    dispatch(editJobDescription([index, value]));
  };

  const startDateEdit = (index) => (newDate) => {
    console.log(index,newDate);
    dispatch(
      editStartDate([index, `${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`])
    );
  };

  const endDateEdit = (index) => (newDate) => {
    dispatch(
      editEndDate([index, `${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`])
    );
  };
  //status of the end date picker

  const [haveExperience, setHaveExperience] = useState(true);

  const handleCheckChange = (value) => {
    if (btnStatus === false) {
      setBtnStatus(true);
      // console.log(endDate);
    } else {
      setBtnStatus(false);
      setEndDate(
        `${
          current.getMonth() + 1
        }/${current.getDate()}/${current.getFullYear()}`
      );
    }
  };

  const handleWorkExperienceChange = () => {
    setHaveExperience((haveExperience + 1) % 2);
  }  
  
  const handleCheckChangeEdit = (index) => (event) => {
    // const { value } = event.target;
    dispatch(editbutton(index));
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
          minWidth: "40vw",
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
            <MuiChipsInput error
              value={skills}
              onChange={addskillhandle}
              sx={{ width: "66%", backgroundColor: "#ffffff" }}
              required
              error={!skillsFilled}
              helperText={!skillsFilled ? "Input Required" : ''}
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
            <MuiChipsInput error
              value={courseworks}
              onChange={addcourseworkhandle}
              sx={{ width: "66%", backgroundColor: "#ffffff" }}
              required
              error={!cwkFilled}
              helperText={!cwkFilled ? "Input Required" : ''}
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
            color: "#5484D7",
          }}
        >
          Work Experience
          {/* this is the work experience listing part  */}
          <FormGroup>
            <FormControlLabel control={<Checkbox style={{padding: 5, marginLeft: 10}} defaultChecked />} label={<Typography variant="h7" color="textSecondary" sx={{ mb: 0.5, fontSize: 14, fontFamily: 'sans-serif'}}>I have work experience</Typography>} 
              onChange={handleWorkExperienceChange}/>
          </FormGroup>
        </Typography>

        {(haveExperience && workexperiences)
          ? workexperiences.map((work, index) => (
              <Grid
                container
                spacing={4}
                mt={0}
                paddingRight={3}
                paddingLeft={3}
                key={index}
              >
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
                    Work Experience {index + 1}
                  </Typography>
                </Grid>
                <Grid item md={4} xs={4}>
                  {/* {workFields.length > 1 && workFields.length - 1 === index && ( */}
                  <button
                    className="remove-btn"
                    sx={{ display: "inline" }}
                    onClick={(work) => removeWorkExperienceHandler(work)}
                  >
                    {/* NEED TO BE ABLE TO CHANGE REMOVE IT FROM THE WORK EXPERIENCE SECTION */}
                    REMOVE
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
                    onChange={companyNameEdit(index)}
                    value={work.companyName}
                    key={work}
                  />
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    sx={{ backgroundColor: "#ffffff", width: "33%" }}
                    required
                    label="Job title"
                    variant="outlined"
                    onChange={jobTitleEdit(index)}
                    value={work.jobTitle}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="Start date"
                      inputFormat="MM/DD/YYYY"
                      value={work.startDate}
                      onChange={startDateEdit(index)}
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
                      control={
                        <Checkbox checked={work.btnStatus} onChange={handleCheckChangeEdit(index)} />
                      }
                      label="This is an ongoing job"
                    />
                  </FormGroup>
                </Grid>
                <Grid item md={3} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      disabled={work.btnStatus}
                      label="End date"
                      inputFormat="MM/DD/YYYY"
                      value={work.endDate}
                      onChange={endDateEdit(index)}
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
                    onChange={jobDescriptionEdit(index)}
                    value={work.jobDescription}
                  />
                </Grid>
                <Grid item md={8} xs={12} mb={4}></Grid>
              </Grid>
            ))
        : ''}

        {/* DO NEW INPUT OF WORK EXPERIENCE AND STORE IT OVER HERE */}

        {(haveExperience && workexperiences.length < 4)? 
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
                Work Experience (optional)
              </Typography>
            </Grid>
            <Grid item md={4} xs={4}>
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
              <TextField error
                sx={{ backgroundColor: "#ffffff" }}
                required
                fullWidth
                label="Job Description"
                variant="outlined"
                multiline
                rows={4}
                onChange={handleJobDescription}
                value={jobDescription}
                error={!containsBP}
                helperText={!containsBP ? "Invalid input format: Please use bullet points (-) to describe your job, and start each bullet point on a new line": "Please describe your job in 3-4 bullet points, and start each bullet point on a new line"}

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
        : ''}
        <Grid container mb={10}></Grid>
      </Card>
    </form>
  );
};

export default SkillSection;
