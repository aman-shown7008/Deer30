import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { green } from '@mui/material/colors';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

function OTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.querySelector(`input:nth-of-type(${index + 2})`);
      if (nextInput) nextInput.focus();
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    try {
      const response = await axios.post('http://44.196.64.110:9876/user/verifyOtp', { email: email, otp: otpValue });
      if (response.data.success) {
        toast.success("Your OTP is verified.");
        localStorage.setItem('token', response.data.token);
        navigate("/changepassword", {state: {email} });
      } else {
        setMessage('');
        setError(response.data.message || 'Failed to verify OTP');
      }
    } catch (error) {
      setMessage('');
      setError('An Error Occurred While Verifying OTP.');
    }
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={3}>
      {/* Back Arrow */}
      <Box position="absolute" top={16} left={16}>
        <Link to="/resetpassword">
          <IconButton sx={{ color: green[500] }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>

      {/* Heading */}
      <Typography variant="h2" fontWeight="bold" mb={3} textAlign="center">Forget Password</Typography>

      {/* Subheading */}
      <Typography variant="h4" fontWeight="medium" mb={1} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Verify Your Code</Typography>

      <Typography variant="h6" mb={4} color='silver' maxWidth="520px" sx={{ fontFamily: "Poppins, sans-serif", textAlign: { xs: 'center', md: 'left' } }}>
        Enter the passcode you just received on your email address ending with ********@gmail.com
      </Typography>

      {/* OTP Input Boxes */}
      <Box component="form" display="flex" flexDirection="column" alignItems="center" width="100%" maxWidth="520px">
        <Box display="flex" justifyContent="center" sx={{ gap: { xs: 2, md: 8 } }} mb={4}>
          {otp.map((value, index) => (
            <TextField key={index} variant="outlined" value={value} onChange={(e) => handleOtpChange(index, e.target.value)} onFocus={(e) => e.target.select()} inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: '2.2rem', padding: { xs: '10px 14px', md: '15px 14px' }, color: 'white',},}} sx={{ bgcolor: 'black', borderColor: green[500], width: { xs: '65px', md: '80px' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: green[500], borderRadius: 1 }, '&:hover fieldset': { borderColor: green[500] },},}}/>
          ))}
        </Box>
        {error && <Typography variant="body6" color="error" mb={2}>{error}</Typography>}
        {message && <Typography variant="body6" color="success" mb={2}>{message}</Typography>}
        {/* Submit Button */}
        <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mb: 3 }}>
          <Button type="submit" variant="contained" onClick={handleSubmit} sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'none', borderRadius: 2, px: 2, width: { xs: "350px", md: "520px" },}}>Submit</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default OTP;
