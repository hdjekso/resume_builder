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
        <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 4 }} paddingRight={3} paddingLeft={3}>
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
      </Card>
    </form>
  );
};

export default ProfileSection;
