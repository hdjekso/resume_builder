import { AppBar, IconButton, Toolbar, } from "@mui/material";
import { React } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
// import { createMuiTheme } from "@material-ui/core/styles";  
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#ffffff',
      contrastText: '#fff',
    },
  },
});

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

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
        <ThemeProvider theme={theme}>
          <Button 
          variant="text" color="neutral" onClick={handleClick}
          style={{
            fontSize: "16px"
          }}>
            Home
          </Button>
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
