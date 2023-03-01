import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "./NavBar";
import {
  Stepper,
  Step,
  StepButton,
  Button,
  Typography,
  Stack,
  Box,
  Container,
} from "@mui/material";
import { useState } from "react";
import ProfileSection from "./ProfileSection";
import WorkExperienceSection from "./WorkExperienceSection";
import SkillSection from "./SkillSection";
import ResumePDF from "../ResumePDF";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useSelector } from "react-redux";
import { useSelect } from "@mui/base";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Form = () => {
  const [completed, setCompleted] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  // FROM THE PROFILE SECTION:

  const firstname = useSelector((state) => {
    return state.firstname;
  });
  const lastname = useSelector((state) => {
    return state.lastname;
  });
  const gpa = useSelector((state) => {
    return state.gpa;
  });
  const address = useSelector((state) => {
    return state.address;
  });
  const degree = useSelector((state) => {
    return state.degree;
  });
  const major = useSelector((state) => {
    return state.major;
  });
  const college = useSelector((state) => {
    return state.college;
  });
  const email = useSelector((state) => {
    return state.email;
  });

  // FROM THE WORK EXPERIENCE SECTION:
  const skills = useSelector((state) => {
    return state.skills;
  });
  const courseworks = useSelector((state) => {
    return state.courseworks;
  });
  const workexperiences = useSelector((state) => {
    return state.workexperiences;
  });

  //  FROM THE AWARD AND PROJECT SECTION:
  const projects = useSelector((state) => {
    return state.projects;
  });
  const awards = useSelector((state) => {
    return state.awards;
  });

  const steps = [
    "Profile",
    "Skills, Coursework, and Work Experience",
    "Projects and Awards",
  ];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const setStepSection = (step) => {
    switch (step) {
      case 0:
        return <ProfileSection />;
      case 1:
        return <SkillSection />;
      case 2:
        return <WorkExperienceSection />;
      default:
        return "error/unknown step";
    }
  };

  const handleComplete = () => {
    let flag = true;
    console.log(activeStep);
    const action = steps[activeStep];

    if (action === "Profile") {
      flag = ValidateProfileDetails();
    } else if (action === "Skills, Coursework, and Work Experience") {
      // console.log('work experience page')
      flag = ValidateWorkExperience();
    } else if (action === "Projects and Awards") {
      flag = validateProjectDetails();
    }

    if (flag) {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      console.log("yes");
      handleNext();
    }
  };

  const ValidateProfileDetails = () => {
    // REDO CODE:
    if (
      !firstname ||
      !lastname ||
      !address ||
      !email ||
      !gpa ||
      !degree ||
      !major ||
      !college
    ) {
      alert("at least one input is empty for the profile section");
      return false;
    }
    if (!email.includes("@")) {
      alert("please enter a valid email");
      return false;
    }
    return true;
  };

  const ValidateWorkExperience = () => {
    // REDO CODE:
    if (skills.length === 0 || courseworks.length === 0) {
      alert("at least one input is empty for the work experience section");
      return false;
    }
    console.log(firstname);
    return true;
  };

  const validateProjectDetails = () => {
    if (awards.length === 0 && projects.length === 0) {
      alert("please have at least one award and at least one project");
      return false;
    } else if (awards.length === 0) {
      alert("please fill in the input for award name and award description");
      return false;
    } else if (projects.length === 0) {
      alert(
        "please fill in the project name, startdate, enddate, and project description for the project section"
      );
      return false;
    }
    return true;
  };

  // const validateProjectDetails

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Box sx={{ my: 3 }}>
          <Stepper nonLinear activeStep={activeStep} sx={{ my: 3 }}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>

          <Stack direction="row" justifyContent="center"></Stack>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  You've filled up every section of the form
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset Form</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* <ProfileSection /> */}
                {setStepSection(activeStep)}
                {/* think of a way to change the JSX form around by stepper  */}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {/*  */}
                  {completedSteps() === totalSteps() - 1 &&
                  projects.length > 0 &&
                  awards.length > 0 ? (
                    <ResumePDF />
                  ) : (
                    <Button onClick={handleComplete} sx={{ mr: 1 }}>
                      Save and Next
                    </Button>
                  )}

                  {/* {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                      ))} */}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </Container>

      {/* this is the download button */}
    </React.Fragment>
  );
};

export default Form;
