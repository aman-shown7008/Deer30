import React,{lazy, useState} from 'react';
import { Box, Container, Typography, Button, TextField, Grid, List, ListItem, ListItemIcon, ListItemText, Divider,InputAdornment,IconButton } from '@mui/material';
import {CreditCard, ExitToApp} from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { green } from "@mui/material/colors";
import img1 from "../../Images/home-4.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PersonalInfo() {
  
  const handleLogout = () => {
    // console.log("It is cliecked");
    sessionStorage.removeItem("Token");
  }
  
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  const handleTogglePasswordVisibility = () => setConfirmPassword((prev) => !prev);
  const handleToggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  const handleResetPassword = async () => {
    const email = sessionStorage.getItem('Email');
  
    const payload = {
      email,
      password,
      newPassword,
    };
  
    try {
      const response = await axios.patch('http://44.196.64.110:9876/user/profile/updatePassword', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.data.success) {
        toast.success("Password Updated Successfully!");
        setPassword("");
        setNewPassword("");
      } else {
        toast.error("Failed to update password. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error.response || error.message);
      toast.error("Something went wrong. Please try again.");
    }
  };  

  const updateDetails = async () => {
    const payload = {
      firstName: fName,
      lastName: lName,
      email: email,
      mobileNumber: mobile,
      gender: gender,
      dob: dob,
    }
    console.log(payload);

    try {
      const response = await axios.patch('http://44.196.64.110:9876/user/profile/updateProfile', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(response.data.success){
        toast.success("Profile Updated Successfully!");
        setFName("");
        setLName("");
        setEmail("");
        setMobile("");
        setGender("");
        setDob("");
      }else{
        toast.error("Failed to update profile. Please try again.");
      }

    }catch(error){
      toast.error("Something went wrong. Please try again.");
    }

  }

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', py: 5 }}>
      <ToastContainer/>
      <Container maxWidth="lg">
        {/* Profile Title */}
        <Typography variant="h3" sx={{ color: '#fff', mb: 3 }}>My Profile</Typography>

        <Grid container spacing={4}>
          
          {/* Sidebar Navigation */}
          <Grid item xs={12} sm={4} md={3}>
            <Box sx={{ backgroundColor: '#fff', borderRadius: 2 }}>
              <Box sx={{ mb: 2, display: 'flex', padding: '15px 15px 10px 15px'}}>
                <img src={img1} alt="Profile" style={{ borderRadius: '50%' }} />
                <Box sx={{marginLeft: '20px'}}>
                    <Typography variant="body6" color="textSecondary">Hello!</Typography>
                    <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold', fontSize: '1.3rem' }}>Robert Fox</Typography>
                </Box>
              </Box>
              <Divider sx={{ borderColor: '#2e2e2e', mb: 2 }} />
              <List component="nav">
                <Link to="/personalinfo" className='link-c'>
                  <ListItem button selected sx={{'&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><PermIdentityOutlinedIcon sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Personal Information" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem', whiteSpace: 'nowrap' } }}/>
                  </ListItem>
                </Link>
                
                <Link to="/myorders" className='link-c'>
                  <ListItem button sx={{my: 1,'&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><BorderAllOutlinedIcon sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="My Orders" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>

                <Link to="/manageaddress" className='link-c'>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><RoomOutlinedIcon sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Manage Addresses" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem', whiteSpace: 'nowrap' } }}/>
                  </ListItem>
                </Link>

                <Link to="/savedcards" className='link-c'>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><CreditCard sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Saved Cards" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>

                <Link to="/notifications" className='link-c'>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><NotificationsNoneOutlinedIcon  sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Notifications" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>

                <Link to="/navigationuser" className='link-c' onClick={handleLogout}>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><ExitToApp sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Log Out" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>
              </List>
            </Box>
          </Grid>
          
          {/* Personal Information Form */}
          <Grid item xs={12} sm={8} md={9}>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="First Name" name="firstName" value={fName} onChange={(e) => setFName(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="Last Name" name="lastName" value={lName} onChange={(e) => setLName(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="Mobile No." name="mobileNo" value={mobile} onChange={(e) => setMobile(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="Gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="DOB" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
              </Grid>

              {/* Update Button */}
              <Box sx={{  display: 'inline-block', justifyContent: 'center', mt: 3, p: '2px', borderRadius: 2}}>
                <Button variant="contained" onClick={updateDetails} sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'none', borderRadius: 2, px: 8 }}>Update</Button>
              </Box>

              {/* Change Password Section */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h4" sx={{ color: '#fff', mb: 1 }}>Change Password</Typography>
                <Typography variant="body3" color="textSecondary" sx={{ color: '#fff', mb: 2 }}>
                  Type your new strong password. Your password must include:<br />
                  One capital letter & one small letter at least, one special character, and a minimum of 8 digits long.
                </Typography>

                <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth variant="outlined" type={confirmPassword ? "text" : "password"} label="Current Password" value={password} onChange={(e) => setPassword(e.target.value)} InputProps={{ style: { color: "white" }, endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility} edge="end" sx={{ color: "white" }}>
                          {confirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),}}
                    sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] } }, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth variant="outlined" type={showConfirmPassword ? "text" : "password"} label="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} InputProps={{ style: { color: "white" },endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end" sx={{ color: "white" }}>
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),}}
                    sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] } }, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                  </Grid>
                </Grid>

                {/* Reset Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3, p: '2px', borderRadius: 2 }}>
                  <Button variant="contained" onClick={handleResetPassword} sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'none', borderRadius: 2, px: 9,}}>
                    Reset
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PersonalInfo;