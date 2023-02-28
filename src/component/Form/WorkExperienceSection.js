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
} from "@mui/material";
import dayjs from "dayjs";
import { addProject, removeProject, addAward, removeAward } from "../../action";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";

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
  const [date, setDate] = useState(
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

  // if (projects) {
  //   console.log(projects[0]);
  // }
  // if (awards) {
  //   console.log(awards[0]);
  // }

  // start creating handlers for each hook:

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

  const projectDescriptionHandler = (input) => {
    const desc = input.target.value;
    if (desc.length >= 1){
      setProjectContainsBP(desc.charAt(0) === '-');
    }
    setProjectDescription(input.target.value);
    /*if (!error_){
      setProjectDescription(input.target.value);
    }*/
  };

  // award part :

  const awardTitleHandler = (input) => {
    setAwardTitle(input.target.value);
  };

  const dateHandler = (newDate) => {
    setDate(`${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`);
  };

  const awardSummaryHandler = (input) => {
    const desc = input.target.value;
    if (desc.length >= 1){
      setAwardContainsBP(desc.charAt(0) === '-');
    }
    setAwardSummary(input.target.value);
    /*if (!error_){
      setAwardSummary(input.target.value);
    }*/
  };

  // setup add button to use dispatch in order to add to the storage:

  const projectAddHandler = (e) => {
    e.preventDefault();
    if (projectDescription && projectName && link && startDate && endDate && projectContainsBP) {
      dispatch(
        addProject({ projectDescription, projectName, link, startDate, endDate })
      );
      setProjectName("");
      setProjectDescription("");
      setLink("");
    } else if (projectContainsBP){
      alert(
        "At least one of the requried input values in your project is empty. Please fill in the required inputs before adding another project."
      );
    }
  };

  const projectRemoveHandler = (project) => {
    dispatch(removeProject(project));
  };

  const awardAddHandler = (e) => {
    e.preventDefault();
    if (awardTitle && awardSummary && date  && awardContainsBP) {
      dispatch(addAward({ awardTitle, awardSummary, date }));
      setAwardSummary("");
      setAwardTitle("");
      setDate(
        `${
          current.getMonth() + 1
        }/${current.getDate()}/${current.getFullYear()}`
      );
    } else if (awardContainsBP){
      alert(
        "At least one of the requried input values in your award/ certification is empty. Please fill in the required inputs before adding another award/certification."
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
  }

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
        sx={{ mb: 0.5, fontWeight: "bold", color: "#5484D7", ml:3, mb:-3}}
      >
        Projects
      </Typography>
      {projects
        ? projects.map((project, index) => (
            <Grid container spacing={4} mt={1} mb={-6}>
              <Grid item md={12} xs={12}>
                <Grid
                  container
                  rowSpacing={7}
                  columnSpacing={{ xs: 1, sm: 2, md: 4 }}
                  paddingRight={3}
                  paddingLeft={3}
                >
                  <Grid item md={8} xs={12}>
                    <TextField
                      sx={{ backgroundColor: "#ffffff" }}
                      required
                      fullWidth
                      label="Project Name"
                      variant="outlined"
                      value={project.projectName}
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
                        inputFormat="MM/YYYY"
                        value={project.startDate}
                        // onChange={startDateHandler}
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
                        // onChange={endDateHandler}
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
                      // onChange={projectDescrptionHandler}
                    />
                    <button
                      className="remove-btn"
                      onClick={(project) => projectRemoveHandler(project)}
                    >
                      REMOVE
                    </button>
                  </Grid>
                  <Grid item>
                    
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={12} xs={12} mt={0}></Grid>
              {/* )} */}
            </Grid>
          ))
        : null}

      {/* THE CURRENT INPUT IS FOR USER'S INPUT, NOT FOR THE SHOW AND EDITING LIST */}
      {/* PROJECT PART */}

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
                  inputFormat="MM/YYYY"
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
              <TextField error
                sx={{ backgroundColor: "#ffffff" }}
                required
                fullWidth
                label="Project Description"
                helperText={!projectContainsBP ? "Invalid input format: Please use bullet points (-) to describe your project, and start each bullet point on a new line": "Please describe your project in 3-4 bullet points, and start each bullet point on a new line. TIPS: start w/ Action verbs, use quantitative statements if possible, and highlight/emphasize skills"}
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

      <br></br> 
      {/* ))} */}
      

      <Typography
        variant="h5"
        component="div"
        sx={{ mb: 0.5, fontWeight: "bold", color: "#5484D7", ml:3, mt: 8, mb:-3}}
      >
        Awards & Certifications
      </Typography>

      {/* THE CURRENT GRID IS THE SHOW THE VALUE THAT WAS STORED INIDE THE AWARD LIST */}
      {awards
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
                    // onChange={awardTitleHandler}
                  />
                </Grid>
                <Grid item md={3.5} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="End date"
                      inputFormat="MM/YYYY"
                      value={award.date}
                      // onChange={dateHandler}
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
                    // onChange={awardSummaryHandler}
                    rows={3}
                  />
                </Grid>

                <button className="remove-btn" sx={{ml: 10}}
                onClick={(award)=>awardRemoveHandler(award)}>remove</button>
                {/* } */}
              </Grid>
              <Grid item md={12} xs={12} mt={0}>
              </Grid>
            </Grid>
          ))
        : null}

      {/* THE CURRENT INPUT IS FOR USE TO INPUT THEIR AWARD AND STORE IT INTO REDUX, NOT FOR SHOWING AND LISTING  */}
      {/* AWARD PART: */}

      <Grid container spacing={4} mt={1} mb={5} paddingRight={3} paddingLeft={3}>
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
                inputFormat="MM/YYYY"
                value={date}
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
            <TextField error
              error = {!awardContainsBP}
              sx={{ backgroundColor: "#ffffff" }}
              required
              fullWidth
              label="Award Summary"
              variant="outlined"
              helperText={!awardContainsBP ? "Invalid input format: Please use bullet points (-) to describe your project, and start each bullet point on a new line": "Using 2-3 bullet points, please describe your the nature of your award, and the skills/ effort involved in attaining. Start each bullet point on a new line."}
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

      <br></br>
    </Card>
  );
};

export default WorkExperienceSection;
