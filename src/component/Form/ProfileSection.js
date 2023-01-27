import { from } from "form-data";
import React, { useState, useEffect } from "react";
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

const ProfileSection = () => {
  return (
    <form autoComplete="off" noValidate md={6}>
      <Card>
        <CardHeader subheader="Please fill in your profile section" />
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <TextField fullWidth label="First Name" variant="outlined" />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField fullWidth label="Last Name" variant="outlined" />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField fullWidth label="Phone number" variant="outlined" />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField fullWidth label="Email Address" variant="outlined" />
          </Grid>
        </Grid>
      </Card>
    </form>
  );
};

export default ProfileSection;
