import React, {useEffect, useState} from "react";
import {Box,Typography,TextField,Button,IconButton,FormControlLabel,Checkbox, InputAdornment, Divider,} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from "@mui/icons-material/Apple";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { green } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Loader/Loader";
import { signInWithPopup } from "firebase/auth";
import {auth, provider1, provider2, provider3} from "../../firebase";


function Login() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [value, setEmail] = useState('');
  const [value1, setEmail1] = useState('');
  const [value2, setEmail2] = useState('');

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider1).then((data) => {
      sessionStorage.setItem('Token', data.user.accessToken);
      setEmail(data.user.email);
      // localStorage.setItem("googleEmail", data.user.email);
      sessionStorage.setItem('isLoggedIn', true);
      navigate("/");
    })
    // try {
    //   toast.success("Google login successful!");
    // } catch (error) {
    //   toast.error("Google login failed. Please try again.");
    // }
  }

  const handleFacebookLogin = () => {
    signInWithPopup(auth, provider2).then((data) => {
      sessionStorage.setItem('Token', data.user.accessToken);
      setEmail1(data.user);
      // localStorage.setItem("facebookEmail", data.user);
      sessionStorage.setItem('isLoggedIn', true);
      navigate("/");
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleAppleLogin = () => {
    signInWithPopup(auth, provider3).then((data) =>{
      sessionStorage.setItem('Token', data.user.accessToken);
      setEmail2(data.user.email);
      sessionStorage.setItem('isLoggedIn', true);
      navigate("/");
    }).catch((err) =>{
      console.log(err);
    })
  }

  useEffect(() =>{
    setEmail(localStorage.getItem('email'));
  })

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleToggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name] : value });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      toast.error("Please Enter Username and Password");
      return;
    }
    sessionStorage.setItem('Email', formData.email);
    setLoading(true);

    try{
      const response = axios.post("http://44.196.64.110:9876/user/login", formData);
      if((await response).data.success){
        const { token } = (await response).data;
        // console.log(token);
        sessionStorage.setItem('Token', token);
        sessionStorage.setItem('userId', response.data?.data?.id);
        sessionStorage.setItem('isLoggedIn', true);
        toast.success("Login Successful!");
        navigate("/");
      }else{
        toast.error(response.data.message || "Login Failed");
      }
    }catch(error){
      console.error("Error logging in:", error.response);
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    }finally{
      setLoading(false);
    }
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={3}>
      <ToastContainer/>
      {loading ? (<Loading/>): (
      <>
      <Box position="absolute" top={16} left={16}>
        <Link to="/">
          <IconButton sx={{ color: green[500] }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>

      <Typography variant="h2" fontWeight="bold" mb={3} sx={{fontFamily: "Poppins, sans-serif"}}>Log In</Typography>
      <Typography variant="h4" fontWeight="medium" mb={1} sx={{fontFamily: "Poppins, sans-serif", textAlign:{xs: 'center', md: 'left'}}}>Welcome Back, Deer30!</Typography>
      <Typography variant="h6" mb={4} color="silver" maxWidth="520px" sx={{fontFamily: "Poppins, sans-serif", textAlign:{xs: 'center', md: 'left'}}}>We are excited to have your back. Log in now and access your account.</Typography>

      {/* Username or Email Field */}
      <Box display="flex" flexDirection="column" width="100%" maxWidth="520px">
        <TextField variant="outlined" label="Username Or Email" name="email" value={formData.email} onChange={handleChange} InputProps={{ style: { color: "white" },}} sx={{ mb: 2, bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500],},"&:hover fieldset": {borderColor: green[500],},},"& .MuiInputLabel-root": {color: "white", fontFamily: "Poppins, sans-serif"},}}/>
        <TextField variant="outlined" type={showConfirmPassword ? "text" : "password"} label="Password" value={formData.password} onChange={handleChange} name="password"  InputProps={{ style: { color: "white" }, endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end" sx={{ color: "white" }}>
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
          ),}}sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500],},"&:hover fieldset": {borderColor: green[500],},},"& .MuiInputLabel-root": {color: "white", fontFamily: "Poppins, sans-serif"},}}/>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between" maxWidth="520px" width="100%" mb={3} fontFamily="Poppins, sans-serif">
        <FormControlLabel control={<Checkbox sx={{ color: green[500] }} />} label={<Typography variant="body6" sx={{ color: "white", fontFamily: "Poppins, sans-serif" }}>Remember me</Typography>}/>
        <Link to="/resetpassword" className="no-underline">
          <Typography variant="body6" color="white" sx={{ cursor: "pointer", fontFamily: "Poppins, sans-serif" }}>Forgot your password?</Typography>
        </Link>
      </Box>

      {/* Login Button */}
      <Link to="/resetpassword">
        <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mb: 3 }}>
          <Button  fullWidth variant="contained" onClick={handleSubmit} sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'none', borderRadius: 2, px: 2, width: {xs:"320px", sm:"400px", md:"520px"} }}>Log In</Button>
        </Box>
      </Link>
      
      <Typography variant="body6" color="white" sx={{ cursor: "pointer", marginBottom: "15px", fontFamily: "Poppins, sans-serif"}} textAlign="center">
        No Account ? <Link to="/signup" className="log-button">SignUp</Link>
      </Typography>

      <Divider sx={{ maxWidth: "520px", width: "100%", bgcolor: "#4D4D4D", mb: 3 }}>OR</Divider>

      {/* Social Login Buttons */}
      <Box display="flex" justifyContent="center" gap={2}>
        <Button id="google-butt" onClick={handleGoogleLogin} variant="outlined" sx={{ color: "white", borderColor: "#4D4D4D", px: {xs: 4, sm: 6,md: 8.5}, py: 1, borderRadius: 1,}}>
          <GoogleIcon sx={{color: '#EA4335', fontSize: '1.8rem'}}/>
        </Button>
        <Button variant="outlined" onClick={handleFacebookLogin} sx={{ color: "white", borderColor: "#4D4D4D", px: {xs: 4, sm: 6,md: 8.5}, py: 1, borderRadius: 1,}}>
          <FacebookOutlinedIcon sx={{color: '#1877F2', backgroundColor: '#fff', borderRadius: '50%', fontSize: '1.8rem'}} />
        </Button>
        <Button variant="outlined" onClick={handleAppleLogin} sx={{ color: "white", borderColor: "#4D4D4D", px: {xs: 4, sm: 6,md: 8.5}, py: 1, borderRadius: 1,}}>
          <AppleIcon sx={{fontSize: '1.8rem'}}/>
        </Button>
      </Box>
      </>
      )}
    </Box>
  );
}

export default Login;
