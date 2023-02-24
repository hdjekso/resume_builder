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
  changeMajor,
  changeDegree,
  addLink,
  removeLink,
  changedate,
} from "../../action";
import { useDispatch, useSelector } from "react-redux";

const ProfileSection = () => {
  // const current = new Date();
  // const date = `${
  //   current.getMonth() + 1
  // }/${current.getDate()}/${current.getFullYear()}`;

  // console.log(date);
  // const [links, setlinks] = useState([{ link: "0" }]);


  const [addlink, setAddlink] = React.useState("");

  const dispatch = useDispatch();

  const date = useSelector((state) => {
    return state.date;
  });
  const [value, setValue] = React.useState(dayjs(date));

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
  const links = useSelector((state) => {
    return state.links;
  });

  const handleAddLink = (link) => {
    console.log(link);
    // setlinks([...links, { link: index + 1 }]);
    dispatch(addLink(link));
  };

  const handleRemoveLink = (link) => {
    dispatch(removeLink(link));

    // list.splice(index, 1);
    // setlinks(list);
  };

  const handleClick = () => {
    dispatch(addLink(addlink));
    setAddlink("");
  };

  const firstNameHandle = (newValue) => {
    dispatch(changeFirstName(newValue.target.value));
  };
  const middleNameHandle = (newValue) => {
    dispatch(changeMiddleName(newValue.target.value));
    console.log(newValue.target.value);
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
  const dateHandle = (newValue) => {
    dispatch(changedate(newValue));
    console.log(date)
  }
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
                value={dayjs(date)}
                onChange={(newValue) => {
                  dateHandle(newValue.$d)
                }}
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
        {links.map((link) => (
          <Grid
            container
            spacing={4}
            mt={1}
            paddingRight={3}
            paddingLeft={3}
            key={link}
          >
            <Grid item md={8} xs={12}>
              {/* <TextField
                sx={{ width: "66%", backgroundColor: "#ffffff" }}
                label="Additional link (optional)"
                variant="outlined"
                value={link}
              /> */}
              <p>{link}</p>
              <Button onClick={(link) => handleRemoveLink(link)}>remove</Button>
            </Grid>
          </Grid>
        ))}

        <Grid item mt={5} paddingRight={3} paddingLeft={3}>
          <TextField
            sx={{ width: "66%", backgroundColor: "#ffffff" }}
            label="Additional link (optional)"
            variant="outlined"
            onChange={(input) => setAddlink(input.target.value)}
            value={addlink}
            // InputProps={{
            //   endAdornment: <Button onClick={console.log('hello')}> add </Button>,
            // }}
          />
          {links.length < 3 ? <Button onClick={handleClick}>add</Button> : ""}

          {/* {links.length < 3 && <Button onClick={(input)=>console.log(input.target.value)}>add</Button>} */}
        </Grid>

        {/* {links.map((link, index) => (
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
                value={link[0]}
              />
              {links.length > 1 && links.length - 1 === index && (
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveLink(link)}
                >
                  remove
                </button>
              )}
            </Grid>
            {links.length - 1 === index && links.length < 3 && (
              <Grid item md={12} xs={12} mt={0}>
                <button
                  className="add-btn"
                  onClick={() => handleAddLink(link)}
                >
                  + Add
                </button>
              </Grid>
            )}
          </Grid>
        ))} */}
        {/* <Grid container mb={10}></Grid> */}
      </Card>
    </form>
  );
};

export default ProfileSection;
