import React, { useState, useEffect } from "react";

import { Button, Card, CardHeader, Grid, TextField } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

const ProfileSection = () => {
 

  const [addlink, setAddlink] = React.useState("");

  const dispatch = useDispatch();

  const date = useSelector((state) => {
    return state.date;
  });


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

  // const handleAddLink = (link) => {
  //   console.log(link);
  //   // setlinks([...links, { link: index + 1 }]);
  //   dispatch(addLink(link));
  // };

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
    // console.log(newValue.target.value);
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
        <Typography
          variant="h5"
          component="div"
          paddingRight={3}
          paddingLeft={3}
          sx={{ mb: 1.5, fontWeight: "bold", color: "#5484D7" }}
          >
          Profile
        </Typography>
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
                value={date}
                onChange={(newValue) => {
                  dateHandle(newValue);
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
            <Grid item md={7.8} xs={12}>
              {/* <TextField
                sx={{ width: "66%", backgroundColor: "#ffffff" }}
                label="Additional link (optional)"
                variant="outlined"
                value={link}
              /> */}
              <Typography
                variant="h7"
                component="p"
                width="40%"
                >{link}</Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <Button onClick={(link) => handleRemoveLink(link)}>removeAAAAAAAAAA</Button>
            </Grid>
          </Grid>
        ))}

        <Grid item mt={5} paddingRight={3} paddingLeft={3}>
          {links.length < 3 && <TextField
            sx={{ width: "66%", backgroundColor: "#ffffff" }}
            label="Additional link (optional)"
            variant="outlined"
            onChange={(input) => setAddlink(input.target.value)}
            value={addlink}
            // InputProps={{
            //   endAdornment: <Button onClick={console.log('hello')}> add </Button>,
            // }}
          />}
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
