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
import ResumePDF from "../ResumePDF";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Form = () => {
  const [completed, setCompleted] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const steps = [
    "Profile",
    "Skills and Coursework",
    "Projects and Work Experience",
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

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const docDefinition = {
    content: [
      // if you don't need styles, you can use a simple string to define a paragraph
      "This is a standard paragraph, using default style",

      // using a { text: '...' } object lets you set styling properties
      { text: "This paragraph will have a bigger font", fontSize: 15 },

      // if you set the value of text to an array instead of a string, you'll be able
      // to style any part individually
      {
        text: [
          "This paragraph is defined as an array of elements to make it possible to ",
          { text: "restyle part of it and make it bigger ", fontSize: 15 },
          "than the rest.",
        ],
      },
    ],
  };
  const handleDownloadResume = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.download();
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
                <ProfileSection />
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
      <div>
        <Button onClick={handleDownloadResume}>Hello</Button>
      </div>
    </React.Fragment>
  );
};

export default Form;
