import { from } from "form-data";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import "./ProfileSection.css";
import {
  changeFirstName,
  changeMiddleName,
  changeLastName,
  changeAddress,
  changeCollege,
  changeEmail,
  changeGpa,
  changeLink,
  changeMajor,
  changeDegree,
} from "../../action";
import { useDispatch, useSelector } from "react-redux";

const ProfileSection = () => {
  const [linkFields, setLinkFields] = useState([{ link: "0" }]);
  const [value, setValue] = React.useState(dayjs("2023-06-13T21:11:54"));

  const dispatch = useDispatch();

  const firstname = useSelector((state) => {
    return state.firstname;
  });
  const middlename = useSelector((state) => {
    return state.middlename;
  });

  const lastname = useSelector((state) => {
    return state.lastname;
  });
  const address = useSelector((state) => {
    return state.address;
  });
  const college = useSelector((state) => {
    return state.college;
  });
  const email = useSelector((state) => {
    return state.email;
  });
  const major = useSelector((state) => {
    return state.major;
  });
  const degree = useSelector((state) => {
    return state.degree;
  });
  const gpa = useSelector((state) => {
    return state.gpa;
  });
  const link = useSelector((state) => {
    return state.link;
  });

  const handleAddLink = (index) => {
    setLinkFields([...linkFields, { link: index + 1 }]);
  };

  const handleRemoveLink = (index) => {
    const list = [...linkFields];
    list.splice(index, 1);
    setLinkFields(list);
  };

  const firstNameHandle = (newValue) => {
    dispatch(changeFirstName(newValue.target.value));
  };
  const middleNameHandle = (newValue) => {
    dispatch(changeMiddleName(newValue.target.value));
    console.log(newValue.target.value)
  };
  const lastNameHandle = (newValue) => {
    dispatch(changeLastName(newValue.target.value));
  };
  const addressHandle = (newValue) => {
    dispatch(changeAddress(newValue.target.value));
  };
  const collegeHandle = (newValue) => {
    dispatch(changeCollege(newValue.target.value));
  };
  const emailHandle = (newValue) => {
    dispatch(changeEmail(newValue.target.value));
  };
  const degreeHandle = (newValue) => {
    dispatch(changeDegree(newValue.target.value));
  };
  const majorHandle = (newValue) => {
    dispatch(changeMajor(newValue.target.value));
  };
  const gpaHandle = (newValue) => {
    dispatch(changeGpa(newValue.target.value));
  };
  const linkHandle = (newValue) => {
    dispatch(changeLink(newValue.target.value));
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
          <Grid item md={4} xs={12}>
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              required
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstname}
              onChange={firstNameHandle}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              fullWidth
              label="Middle Name (optional)"
              variant="outlined"
              onChange={middleNameHandle}
              // value={middlename}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              required
              fullWidth
              label="Last Name"
              variant="outlined"
              onChange={lastNameHandle}
              value={lastname}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              required
              fullWidth
              label="Address"
              variant="outlined"
              multiline
              onChange={addressHandle}
              value={address}
              rows={3}
            />
          </Grid>

          <Grid item md={8} xs={12}>
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              required
              fullWidth
              label="College/ University"
              variant="outlined"
              onChange={collegeHandle}
              value={college}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Expected Graduation date"
                inputFormat="MM/DD/YYYY"
                value={value}
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
          <Grid item md={4} xs={12}>
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              required
              fullWidth
              label="Major"
              variant="outlined"
              onChange={majorHandle}
              value={major}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              required
              fullWidth
              label="Degree"
              variant="outlined"
              onChange={degreeHandle}
              value={degree}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              label="GPA (optional)"
              fullWidth
              variant="outlined"
              onChange={gpaHandle}
              value={gpa}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3}>
          <Grid item md={12} xs={12}>
            <TextField
              sx={{ width: "66%", backgroundColor: "#ffffff" }}
              required
              label="Email"
              variant="outlined"
              onChange={emailHandle}
              value={email}
            />
          </Grid>
        </Grid>
        {linkFields.map((singleLink, index) => (
          <Grid
            container
            spacing={4}
            mt={1}
            paddingRight={3}
            paddingLeft={3}
            key={index}
          >
            <Grid item md={12} xs={12}>
              <TextField
                sx={{ width: "66%", backgroundColor: "#ffffff" }}
                label="Additional link (optional)"
                variant="outlined"
              />
              {linkFields.length > 1 && linkFields.length - 1 === index && (
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveLink(index)}
                >
                  remove
                </button>
              )}
            </Grid>
            {linkFields.length - 1 === index && linkFields.length < 3 && (
              <Grid item md={12} xs={12} mt={0}>
                <button
                  className="add-btn"
                  onClick={() => handleAddLink(index)}
                >
                  + Add
                </button>
              </Grid>
            )}
          </Grid>
        ))}
        <Grid container mb={10}></Grid>
      </Card>
    </form>
  );
};

{
  /*const theme = createTheme({
    typography:{
        fontFamily:[
            "Swansea"
        ]
    },
    background:{
        primary:{
            light: '#c3fdff',
            main: '#90caf9',
            dark: '#5d99c6',
            contrastText: '#fff',
            // default: "#90caf9"
        },

    },
    spacing:8
});

const ProfileSection_old = () => {
  const navigate= useNavigate();
  const page_back=()=>{
    navigate(-1);
  }
  
  return (
      <Box
          sx={{
              backgroundColor:"#CCF2F2",
              height:100,
			  width: '100%'
          }}
          style={{ 
              minHeight: "97vh", 
              overflow: "auto",
              minWidth:"90vw" }}
      >
          <Box
              sx={{
                  backgroundColor:"#ffffff",
              }}
              style={{ 
                  minHeight: "85vh", 
                  overflow: "auto",
                  maxWidth:"80vw",
                  margin:"auto",
                  marginTop:"10px"
              }}
          >
              <ThemeProvider theme={theme}>

				<Grid container mt={2} rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 4}} paddingRight={3} paddingLeft={3}>
					<Grid item md={4} xs={12}>
						<TextField required fullWidth label="First Name" variant="outlined" />
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField fullWidth label="Middle Name (optional)" variant="outlined" />
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField required fullWidth label="Last Name" variant="outlined"/>
					</Grid>

					<Grid item md={12} xs={12}>
						<TextField required fullWidth label="Address" variant="outlined" multiline rows={3}/>
					</Grid>

					<Grid item md={8} xs={12}>
						<TextField required fullWidth label="College/ University" variant="outlined" />
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField fullWidth label="GPA (optional)" variant="outlined" />
					</Grid>
				</Grid>
				<Grid container spacing={4} mt={1} mb={10} paddingRight={3} paddingLeft={3}>
				<Grid item md={12} xs={12}>
					<TextField sx={{width: '66%' }} required label="Email" variant="outlined" />
				</Grid>
				<Grid item md={12} xs={12}>
					<TextField sx={{width: '66%' }} label="Link 1 (optional)" variant="outlined" />
				</Grid>  
				</Grid>
			</ThemeProvider>
          </Box>
      </Box>
  );
}*/
}

export default ProfileSection;
