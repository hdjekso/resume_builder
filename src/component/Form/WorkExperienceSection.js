

import React, { useState, useEffect } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import dayjs from "dayjs";
import {
  addProject,
  removeProject,
  addAward,
  removeAward,
  editProjectStartDate,
  editProjectDescription,
  editProjectName,
  editProjectEndDate,
  editAwardTitle,
  editAwardDate,
  editAwardSummary,
  changeaward,
  changeproject,
} from "../../action";
import { useSelector, useDispatch } from "react-redux";

const WorkExperienceSection = () => {
  const dispatch = useDispatch();
  const current = new Date();
  // create useState for each section:
  // for the project section:
  const [projectName, setProjectName] = useState("");
  const [link, setLink] = useState("");

  const [startDate, setStartDate] = useState(
    `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`
  );

  const [endDate, setEndDate] = useState(
    `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`
  );

  const [projectDescription, setProjectDescription] = useState("");

  // for the award section:
  const [awardTitle, setAwardTitle] = useState("");
  const [awardDate, setAwardDate] = useState(
    `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`
  );
  const [awardSummary, setAwardSummary] = useState("");

  // use useSector first:

  const projects = useSelector((state) => {
    return state.projects;
  });

  const awards = useSelector((state) => {
    return state.awards;
  });

  const [haveProjects, setHaveProjects] = useState(true);

  const handleProjectChange = () => {
    dispatch(changeproject(!haveProjects));
    setHaveProjects(!haveProjects);
  };

  const option = useSelector((state)=>{
    return state.option;
  })
 
  console.log(option);

  const [haveAwards, setHaveAwards] = useState(true);

  const handleAwardChange = () => {
    dispatch(changeaward(!haveAwards));
    setHaveAwards(!haveAwards);
  };

  const ProjectNameHandler = (input) => {
    setProjectName(input.target.value);
  };

  const linkHanlder = (input) => {
    setLink(input.target.value);
  };

  const startDateHandler = (newDate) => {
    setStartDate(`${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`);
  };

  const endDateHandler = (newDate) => {
    setEndDate(`${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`);
  };

  const projectDescrptionHandler = (input) => {
    setProjectDescription(input.target.value);
  };

  const projectNameEdit = (index) => (event) => {
    const { value } = event.target;
    // console.log(index,value)
    dispatch(editProjectName([index, value]));
  };

  const projectDescriptionEdit = (index) => (event) => {
    const { value } = event.target;
    // console.log(index, value);
    dispatch(editProjectDescription([index, value]));
  };

  const projectStartDateEdit = (index) => (newDate) => {
    // const { value } = event.target;
    // console.log(index, value);
    dispatch(
      editProjectStartDate([
        index,
        `${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`,
      ])
    );
  };

  const projectEndDateEdit = (index) => (newDate) => {
    // const { value } = event.target;
    // console.log(index, value);
    dispatch(
      editProjectEndDate([
        index,
        `${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`,
      ])
    );
  };

    const projectDescriptionHandler = (input) => {
      const desc = input.target.value;
      if (desc.length >= 1){
        setProjectContainsBP(desc.charAt(0) === '-');
      }
      setProjectDescription(input.target.value);
      if (!error_){
        setProjectDescription(input.target.value);
      }
    };

  // award part :

  const awardTitleHandler = (input) => {
    setAwardTitle(input.target.value);
  };

  const dateHandler = (newDate) => {
    setAwardDate(`${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`);
  };

  const awardSummaryHandler = (input) => {
    setAwardSummary(input.target.value);
  };

  const awardTitleEdit = (index) => (event) => {
    const { value } = event.target;
    dispatch(editAwardTitle([index, value]));
  };
  const awardSummaryEdit = (index) => (event) => {
    const { value } = event.target;
    dispatch(editAwardSummary([index, value]));
  };
  const awardDateEdit = (index) => (newDate) => {
    dispatch(
      editAwardDate([index, `${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`])
    );
  };

  // setup add button to use dispatch in order to add to the storage:

  const projectAddHandler = (e) => {
    e.preventDefault();
    if (projectDescription && projectName && startDate && endDate && projectContainsBP) {
      dispatch(
        addProject({
          projectDescription,
          projectName,
          link,
          startDate,
          endDate,
        })
      );
      setProjectName("");
      setProjectDescription("");
      setLink("");
    } else {
      alert(
        "at least one of the input value is empty, please fill in thg input value before adding new project"
      );
    }
  };

  const projectRemoveHandler = (project) => {
    dispatch(removeProject(project));
  };

  const awardAddHandler = (e) => {
    e.preventDefault();
    if (awardTitle && awardSummary && awardDate  && awardContainsBP) {
      dispatch(addAward({ awardTitle, awardSummary, awardDate }));
      setAwardSummary("");
      setAwardTitle("");
      // setAwardDate(
      //   `${
      //     current.getMonth() + 1
      //   }/${current.getDate()}/${current.getFullYear()}`
      // );
    } else {
      alert(
        "at least one of the input value is empty, please fill in thg input value before adding new award"
      );
    }
  };

  const awardRemoveHandler = (award) => {
    dispatch(removeAward(award));
  };

  //description error checking
  const [projectContainsBP, setProjectContainsBP] = useState(true);
  const [awardContainsBP, setAwardContainsBP] = useState(true);
  const [error_, setError] = useState(false);
  //const projectHelperTxt = "Please describe your project in 3-4 bullet points, and start each bullet point on a new line\nTIPS: start w/ Action verbs, use quantitative statements if possible, and highlight/emphasize skills";

  //checks if all descs have BPs
  const errorCheck = () => {
    const inputValid = projectContainsBP && awardContainsBP;
    setError(!inputValid);
  };

  return (
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

      {/* THE FOLLWING GRID IS TO LIST ALL USER'S AWARD AND EDIT, IT IS NOT FOR CREATING
       THREFORE NO 'ADD' BUTTON NEEDED, ONLY 'REMVOE' BUTTON REQUIRE */}
      <Typography
        variant="h5"
        component="div"
        sx={{ mb: 0.5, fontWeight: "bold", color: "#5484D7", ml: 3, mb: -3 }}
      >
        Projects
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox style={{ padding: 5, marginLeft: 10 }} defaultChecked />
            }
            label={
              <Typography
                variant="h7"
                color="textSecondary"
                sx={{ mb: 0.5, fontSize: 14, fontFamily: "sans-serif" }}
              >
                I have projects
              </Typography>
            }
            onChange={handleProjectChange}
          />
        </FormGroup>
      </Typography>
      {projects && haveProjects
        ? projects.map((project, index) => (
            <Grid container spacing={4} mt={1} mb={-6}>
              <Grid item md={12} xs={12}>
                <Grid
                  container
                  rowSpacing={7}
                  columnSpacing={{ xs: 1, sm: 2, md: 4 }}
                  paddingRight={3}
                  paddingLeft={3}
                  key={index}
                >
                  <Grid item md={8} xs={12}>
                    <TextField
                      sx={{ backgroundColor: "#ffffff" }}
                      required
                      fullWidth
                      label="Project Name"
                      variant="outlined"
                      value={project.projectName}
                      onChange={projectNameEdit(index)}
                    />
                  </Grid>
                  <Grid item md={2} xs={12}>
                    <TextField
                      sx={{ backgroundColor: "#ffffff" }}
                      fullWidth
                      label="Link (optional)"
                      variant="outlined"
                      value={project.link}
                      // onChange={linkHanlder}
                    />
                  </Grid>
                  <Grid item md={2} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="Date"
                        inputFormat="MM/DD/YYYY"
                        value={project.startDate}
                        onChange={projectStartDateEdit(index)}
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
                  {/* <Grid item md={2} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="End date"
                        inputFormat="MM/DD/YYYY"
                        value={project.endDate}
                        onChange={projectEndDateEdit(index)}
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
                  </Grid> */}
                  <Grid item md={12} xs={12}>
                    <TextField
                      sx={{ backgroundColor: "#ffffff" }}
                      required
                      fullWidth
                      label="Project Description"
                      variant="outlined"
                      multiline
                      rows={5}
                      value={project.projectDescription}
                      onChange={projectDescriptionEdit(index)}
                    />
                    <button
                      className="remove-btn"
                      onClick={(project) => projectRemoveHandler(project)}
                    >
                      REMOVE
                    </button>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Grid>

              <Grid item md={12} xs={12} mt={0}></Grid>
              {/* )} */}
            </Grid>
          ))
      : null}

      {/* THE CURRENT INPUT IS FOR USER'S INPUT, NOT FOR THE SHOW AND EDITING LIST */}
      {/* PROJECT PART */}

      {haveProjects && projects.length < 4 ? (
        <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3}>
          <Grid item md={12} xs={12}>
            <Grid
              container
              rowSpacing={7}
              columnSpacing={{ xs: 1, sm: 2, md: 4 }}
              // paddingRight={3}
              // paddingLeft={3}
            >
              <Grid item md={8} xs={12}>
                <TextField
                  sx={{ backgroundColor: "#ffffff" }}
                  required
                  fullWidth
                  label="Project Name"
                  variant="outlined"
                  onChange={ProjectNameHandler}
                  value={projectName}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  sx={{ backgroundColor: "#ffffff" }}
                  fullWidth
                  label="Link (optional)"
                  variant="outlined"
                  value={link}
                  onChange={linkHanlder}
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/DD/YYYY"
                    value={startDate}
                    onChange={startDateHandler}
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
              {/* <Grid item md={2} xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="End date"
                    inputFormat="MM/DD/YYYY"
                    value={endDate}
                    onChange={endDateHandler}
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
              </Grid> */}
              <Grid item md={12} xs={12}>
                <TextField
                  error
                  sx={{ backgroundColor: "#ffffff" }}
                  required
                  fullWidth
                  label="Project Description"
                  helperText={
                    !projectContainsBP
                      ? "Invalid input format: Please use bullet points (-) to describe your project, and start each bullet point on a new line"
                      : "Please describe your project in 3-4 bullet points, and start each bullet point on a new line. TIPS: start w/ Action verbs, use quantitative statements if possible, and highlight/emphasize skills"
                  }
                  variant="outlined"
                  multiline
                  rows={5}
                  error={!projectContainsBP}
                  value={projectDescription}
                  onChange={projectDescriptionHandler}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={12} xs={12} mt={0}>
            <button className="add-btn" onClick={projectAddHandler}>
              + Add
            </button>
          </Grid>
          {/* )} */}
        </Grid>
      ) : (
        ""
      )}

      <br></br>
      {/* ))} */}

      <Typography
        variant="h5"
        component="div"
        sx={{
          mb: 0.5,
          fontWeight: "bold",
          color: "#5484D7",
          ml: 3,
          mt: 8,
          mb: -3,
        }}
      >
        Awards & Certifications
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox style={{ padding: 5, marginLeft: 10 }} defaultChecked />
            }
            label={
              <Typography
                variant="h7"
                color="textSecondary"
                sx={{ mb: 0.5, fontSize: 14, fontFamily: "sans-serif" }}
              >
                I have awards
              </Typography>
            }
            onChange={handleAwardChange}
          />
        </FormGroup>
      </Typography>

      {/* THE CURRENT GRID IS THE SHOW THE VALUE THAT WAS STORED INIDE THE AWARD LIST */}
      {awards && haveAwards
        ? awards.map((award, index) => (
            <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3}>
              <Grid
                container
                item
                rowSpacing={5}
                columnSpacing={{ xs: 1, sm: 2, md: 12 }}
              >
                <Grid item md={8.5} xs={12}>
                  <TextField
                    sx={{ backgroundColor: "#ffffff" }}
                    required
                    fullWidth
                    label="Award Title"
                    variant="outlined"
                    rows={1}
                    value={award.awardTitle}
                    onChange={awardTitleEdit(index)}
                  />
                </Grid>
                <Grid item md={3.5} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="End date"
                      inputFormat="MM/DD/YYYY"
                      value={award.awardDate}
                      onChange={awardDateEdit(index)}
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
                <Grid item md={12} xs={12}>
                  <TextField
                    sx={{ backgroundColor: "#ffffff" }}
                    required
                    fullWidth
                    label="Award Summary"
                    variant="outlined"
                    multiline
                    value={award.awardSummary}
                    onChange={awardSummaryEdit(index)}
                    rows={3}
                  />
                  <button
                    className="remove-btn"
                    onClick={(award) => awardRemoveHandler(award)}
                  >
                    remove
                  </button>
                </Grid>

                <button
                  className="remove-btn"
                  sx={{ ml: 10 }}
                  onClick={(award) => awardRemoveHandler(award)}
                >
                  REMOVE
                </button>
                {/* } */}
              </Grid>
              <Grid item md={12} xs={12} mt={0}></Grid>
            </Grid>
          ))
      : null}

      {/* THE CURRENT INPUT IS FOR USE TO INPUT THEIR AWARD AND STORE IT INTO REDUX, NOT FOR SHOWING AND LISTING  */}
      {/* AWARD PART: */}
      {haveAwards && awards.length < 4 ? (
        <Grid
          container
          spacing={4}
          mt={1}
          mb={5}
          paddingRight={3}
          paddingLeft={3}
        >
          <Grid
            container
            item
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 12 }}
          >
            <Grid item md={8.5} xs={12}>
              <TextField
                sx={{ backgroundColor: "#ffffff" }}
                fullWidth
                required
                label="Award Title"
                variant="outlined"
                rows={1}
                value={awardTitle}
                onChange={awardTitleHandler}
              />
            </Grid>
            <Grid item md={3.5} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="End date"
                  inputFormat="MM/DD/YYYY"
                  value={awardDate}
                  onChange={dateHandler}
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
            <Grid item md={12} xs={12}>
              <TextField
                error
                error={!awardContainsBP}
                sx={{ backgroundColor: "#ffffff" }}
                required
                fullWidth
                label="Award Summary"
                variant="outlined"
                helperText={
                  !awardContainsBP
                    ? "Invalid input format: Please use bullet points (-) to describe your project, and start each bullet point on a new line"
                    : "Using 2-3 bullet points, please describe your the nature of your award, and the skills/ effort involved in attaining. Start each bullet point on a new line."
                }
                multiline
                value={awardSummary}
                onChange={awardSummaryHandler}
                rows={3}
              />
            </Grid>

            <button className="remove-btn">remove</button>
            {/* } */}
          </Grid>
          <Grid item md={12} xs={12} mt={-4}>
            <button className="add-btn" onClick={awardAddHandler}>
              + Add
            </button>
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      <br></br>
    </Card>
  );
};

export default WorkExperienceSection;
