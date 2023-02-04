import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { React } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar >
        {/* variant="dense */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Resume Generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
