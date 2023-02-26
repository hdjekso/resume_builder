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

  const [projectDescrption, setProjectDescription] = useState("");

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

  if (projects) {
    console.log(projects[0]);
  }
  if (awards) {
    console.log(awards[0]);
  }

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

  const projectDescrptionHandler = (input) => {
    setProjectDescription(input.target.value);
  };

  // award part :

  const awardTitleHandler = (input) => {
    setAwardTitle(input.target.value);
  };

  const dateHandler = (newDate) => {
    setDate(`${newDate.$M + 1}/${newDate.$D}/${newDate.$y}`);
  };

  const awardSummaryHandler = (input) => {
    setAwardSummary(input.target.value);
  };

  // setup add button to use dispatch in order to add to the storage:

  const projectAddHandler = (e) => {
    e.preventDefault();
    if (projectDescrption && projectName && link && startDate && endDate) {
      dispatch(
        addProject({ projectDescrption, projectName, link, startDate, endDate })
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
    if (awardTitle && awardSummary && date) {
      dispatch(addAward({ awardTitle, awardSummary, date }));
      setAwardSummary("");
      setAwardTitle("");
      setDate(
        `${
          current.getMonth() + 1
        }/${current.getDate()}/${current.getFullYear()}`
      );
    } else {
      alert(
        "at least one of the input value is empty, please fill in thg input value before adding new award"
      );
    }
  };

  const awardRemoveHandler = (award) => {
    dispatch(removeAward(award));
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
      <CardHeader subheader="Project & Awards" />

      {/* THE FOLLWING GRID IS TO LIST ALL USER'S AWARD AND EDIT, IT IS NOT FOR CREATING
       THREFORE NO 'ADD' BUTTON NEEDED, ONLY 'REMVOE' BUTTON REQUIRE */}
      {projects
        ? projects.map((project, index) => (
            <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3}>
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
                      // onChange={ProjectNameHandler}
                      value={project.projectName}
                    />
                  </Grid>
                  <Grid item md={2} xs={12}>
                    <TextField
                      sx={{ backgroundColor: "#ffffff" }}
                      fullWidth
                      label="Link"
                      variant="outlined"
                      value={project.link}
                      // onChange={linkHanlder}
                    />
                  </Grid>
                  <Grid item md={2} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="Start date"
                        inputFormat="MM/DD/YYYY"
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
                  <Grid item md={2} xs={6}>
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
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      sx={{ backgroundColor: "#ffffff" }}
                      required
                      fullWidth
                      label="Project Description"
                      helperText="TIPS: ~3-4 bullet point, start w/ Action verbs, numbers if possible, highlight/emphasize skills"
                      variant="outlined"
                      multiline
                      rows={5}
                      value={project.projectDescrption}
                      // onChange={projectDescrptionHandler}
                    />
                  </Grid>
                  <button
                    className="remove-btn"
                    onClick={(project) => projectRemoveHandler(project)}
                  >
                    remove
                  </button>
                </Grid>
              </Grid>

              <Grid item md={12} xs={12} mt={0}></Grid>
              {/* )} */}
            </Grid>
          ))
        : null}

      <CardHeader subheader="Awards/Certifications" />

      {/* THE CURRENT INPUT IS FOR USER'S INPUT, NOT FOR THE SHOW AND EDITING LIST */}
      {/* PROJECT PART */}

      <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3}>
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
                onChange={ProjectNameHandler}
                value={projectName}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                sx={{ backgroundColor: "#ffffff" }}
                fullWidth
                label="Link"
                variant="outlined"
                value={link}
                onChange={linkHanlder}
              />
            </Grid>
            <Grid item md={2} xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Start date"
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
            <Grid item md={2} xs={6}>
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
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                sx={{ backgroundColor: "#ffffff" }}
                required
                fullWidth
                label="Project Description"
                helperText="TIPS: ~3-4 bullet point, start w/ Action verbs, numbers if possible, highlight/emphasize skills"
                variant="outlined"
                multiline
                rows={5}
                value={projectDescrption}
                onChange={projectDescrptionHandler}
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

      {/* ))} */}

      <CardHeader subheader="Awards/Certifications" />

      {/* THE CURRENT INPUT IS FOR USE TO INPUT THEIR AWARD AND STORE IT INTO REDUX, NOT FOR SHOWING AND LISTING  */}
      {/* AWARD PART: */}

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
              fullWidth
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
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              required
              fullWidth
              label="Award Summary"
              variant="outlined"
              helperText="Emphasis on skill, what qualities/effort/skill did you use to achieve the Award "
              multiline
              value={awardSummary}
              onChange={awardSummaryHandler}
              rows={2}
            />
          </Grid>

          <button className="remove-btn">remove</button>
          {/* } */}
        </Grid>
        <Grid item md={12} xs={12} mt={0}>
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
