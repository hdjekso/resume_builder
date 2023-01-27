import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import { Stepper } from "@mui/material";
import { useState } from "react";
import ProfileSection from "./ProfileSection";

const getSteps = () => {
  return [
    "profile",
    "Education",
    "Skills",
    "Mini Project",
    "Social"
  ];
}

const ContentForSteps = (step) =>{

};


const Form = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <ProfileSection />
    </div>
  );
}

export default Form;
