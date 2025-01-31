import React, {useEffect, useState} from 'react';
import { Box, Container, Typography, TextField, IconButton, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, InputBase, Button } from '@mui/material';
import {CreditCard, ExitToApp,} from '@mui/icons-material';
import {Link, useLocation, useNavigate} from "react-router-dom";
import img1 from "../../Images/home-4.png";
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { green } from "@mui/material/colors";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FillAddress() {
  const location = useLocation();
  const navigate = useNavigate();
  const mode = location.state?.mode || "Add";
  const id = location.state?.id || null;
  const [buttonLabel, setButtonLabel] = useState("Add");
  const handleLogout = () => {
    sessionStorage.removeItem("Token");
  }

  useEffect(() => {
    if(mode === "Edit"){
      setButtonLabel("Update");
    }else{
      setButtonLabel("Add");
    }
  }, []);

  const [fullName, setFullName] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async () => {
    const payload = {
      user: "677bc288559fa7e8663c948b",
      name: fullName,
      city: state,
      country: country,
      phoneNumber: mobile,
    }

    const apiEndpoint = mode === "Add" ? 'http://44.196.64.110:9876/user/profile/addAddress' : `http://44.196.64.110:9876/user/profile/updateAddressOfUser/${id}`;
    const apiMethod = mode === "Add" ? axios.post : axios.patch;

    try{
      const response = await apiMethod(apiEndpoint, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(response.data.success){
        toast.success(`Address ${mode === 'Add' ? 'Added' : 'Updated'} Successfully!`);
        setFullName("");
        setState("");
        setCountry("");
        setMobile("");
        navigate('/manageaddress');
      }else{
        toast.error(`Failed to ${mode === 'Add' ? 'Add' : 'Update'} Address. Please try again.`);
      }
    }catch(error){
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        {/* Profile Title */}
        <ToastContainer />
        <Box sx={{display: {sm: 'block',md:'flex'}, flexDirection: {sm: 'column', md: 'row'}, justifyContent: 'space-between'}}>
          <Typography variant="h3" sx={{ color: '#fff', mb: 3 }}>My Profile</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid #00FF00', borderRadius: '10px', padding: '0px 10px', backgroundColor: '#000', width: '100%', maxWidth: '450px', height: '55px', color: '#fff',  marginBottom: {xs: 3}, boxShadow: '0 0 10px 2px #5FEF45'}}>
            <InputBase placeholder="Search address" sx={{ color: '#FFFFFF', flex: 1, paddingLeft: '8px', fontSize: '1.2rem', color: '#fff'}}/>
            <IconButton type="submit" sx={{ padding: '10px', color: '#FFFFFF' }}>
              <SearchIcon sx={{fontSize: '2.2rem'}}/>
            </IconButton>
          </Box>
        </Box>

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
        
        {/* Fill Address */}
        <Grid item xs={12} sm={8} md={9}>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="Full Name" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="State" name="State" value={state} onChange={(e) => setState(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="Country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth variant="outlined" label="Mobile No." name="mobileNo" value={mobile} onChange={(e) => setMobile(e.target.value)} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
                </Grid>
              </Grid>

              {/* Update Button */}
              <Box sx={{  display: 'inline-block', justifyContent: 'center', mt: 3, p: '2px', borderRadius: 2}}>
                <Button variant="contained" onClick={handleSubmit} sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'none', borderRadius: 2, px: 8 }}>{buttonLabel}</Button>
              </Box>
            </Box>
        </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default FillAddress;
