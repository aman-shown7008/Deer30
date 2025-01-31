import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { green } from '@mui/material/colors';
import User from "../../Images/user.png";
import Dealer from "../../Images/dealer.png";
import "./navigationUser.css";
import { Link } from 'react-router-dom';

function NavigationUser() {

  const UserType = (user) => {
    console.log("Hello "+user);
    sessionStorage.setItem("User", user);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={2}>
      <Box position="absolute" top={16} left={16}>
        <IconButton sx={{ color: green[500] }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Box>
      <Button variant="contained" sx={{ bgcolor: '#5FEF45', color: 'black', px: 6, py: 0.5, mb: 4, textTransform: 'none', borderRadius: '10px', fontSize: '2rem'}}>Logo</Button>
        
      <Box display="flex" alignItems="center" justifyContent="center" gap={40} className="mainBox">
        <Box textAlign="center" display="flex" flexDirection="column">
          <img src={User} alt="User Icon" width="100" style={{margin: '0 auto'}}/>
          <Link to="/login">
            <Button variant="contained" onClick={() => UserType("customer")} sx={{ mt: 2, bgcolor: 'white', color: 'black', fontWeight: 'bolder', textTransform: 'none', borderRadius: '16px', px: 3, py: 1, width: '300px', fontSize: '2rem'}}>As User</Button>
          </Link>
        </Box>

        <Box textAlign="center" display="flex" flexDirection="column">
          <img src={Dealer} alt="Dealer Icon" width="100" style={{margin: '0 auto'}}/>
          <Link to="/login">
            <Button variant="contained" onClick={() => UserType("vendor")} sx={{ mt: 2, bgcolor: 'white', color: 'black', fontWeight: 'bolder', textTransform: 'none', borderRadius: '16px', px: 3, py: 1, width: '300px',fontSize:'2rem',}}>As Dealer</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default NavigationUser;
