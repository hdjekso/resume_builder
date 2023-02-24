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
import SkillSection from "./SkillSection"
import ResumePDF from "../ResumePDF";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useSelector } from "react-redux";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


const Form = () => {
  const [completed, setCompleted] = useState({});
  const [activeStep, setActiveStep] = useState(0);

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
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

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
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>
                  {/*{activeStep !== steps.length &&
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
                      ))}*/}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </Container>
      <ResumePDF />
    </React.Fragment>
  );
};

export default Form;
