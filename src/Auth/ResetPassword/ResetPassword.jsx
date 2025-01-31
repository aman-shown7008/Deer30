import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { green } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function ResetPassword() {
  const[email, setEmail] = useState('');
  const[error, setError] = useState('');
  const[message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await axios.post("http://44.196.64.110:9876/user/forgetPassword", {email});
      if(response.data.message){
        toast.success("OTP sent successfully! Check your email.");
        setError('');
        setTimeout(() => navigate('/otp', {state: {email} }), 2000);
      }else{
        setMessage('');
        setError(response.data.message || 'Failed to send the OTP');
      }
    }catch(error){
      setMessage('');
      setError('An error occurred while sending OTP');
    }
  }

  return ( 
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={3}>
      <ToastContainer/>
      <Box position="absolute" top={16} left={16}>
        <Link to="/login">
          <IconButton sx={{ color: green[500] }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>

      <Typography variant="h2" fontWeight="bold" mb={3} sx={{fontFamily: "Poppins, sans-serif", textAlign: 'center'}}>Forget Password</Typography>
      <Typography variant="h4" fontWeight="medium" mb={3} sx={{fontFamily: "Poppins, sans-serif", textAlign: {xs: 'left', md: 'center'}}}>Reset Password</Typography>
      <Typography variant="h6" fontWeight="medium" mb={1} color='silver' textAlign="left" maxWidth="520px" sx={{fontFamily: "Poppins, sans-serif"}}>We have send an otp on your registered email address/mobile number</Typography>

      {/* Username or Email Field */}
      <Box display="flex" flexDirection="column" textAlign="center" width="100%" maxWidth="520px">
        <TextField variant="outlined" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} InputProps={{ style: { color: "white" },}} sx={{ mb: 2, bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500],},"&:hover fieldset": {borderColor: green[500],},},"& .MuiInputLabel-root": {color: "white", fontFamily: "Poppins, sans-serif"},}}/>
        {error && <Typography variant="body6" color="error" mb={2}>{error}</Typography>}
        {message && <Typography variant="body6" color="success" mb={2}>{message}</Typography>}
      </Box>

      {/* ResetPassword Button */}
      <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mb: 3 }}>
        <Button variant="contained" onClick={handleSubmit} sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'none', borderRadius: 2, px: 2, width: {xs:"350px",md:"520px"} }}>Submit</Button>
      </Box>
    </Box>
  );
}

export default ResetPassword;
