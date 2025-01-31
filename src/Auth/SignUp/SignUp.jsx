import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton, InputAdornment, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from "@mui/icons-material/Apple";
import { green } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithPopup } from "firebase/auth";
import {auth, provider1, provider2, provider3} from "../../firebase";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [value, setEmail] = useState('');
  const [value1, setEmail1] = useState('');
  const [value2, setEmail2] = useState('');
  const user = sessionStorage.getItem("User");
  // console.log(user);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider1).then((data) => {
      // console.log(data);
      setEmail(data.user.email);
      // localStorage.setItem("googleEmail", data.user.email);
      sessionStorage.setItem('isLoggedIn', true);
      navigate("/");
    })
  }

  const handleFacebookLogin = () => {
    signInWithPopup(auth, provider2).then((data) => {
      // console.log(data);
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
      setEmail2(data.user.email);
      sessionStorage.setItem('isLoggedIn', true);
      navigate("/");
    }).catch((err) =>{
      console.log(err);
    })
  }

  const handleTogglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  const validate = () => {
    const newErrors = {};

    if(!formData.firstName && !formData.lastName && !formData.email && !formData.password){
      toast.error("Please Enter the Details.");
      return;
    }

    if (!formData.firstName) newErrors.firstName = "Please Enter Your First Name";
    if (!formData.lastName) newErrors.lastName = "Please Enter Your Last Name";
    if (!formData.email) newErrors.email = "Please Enter Your Email";
    if (!formData.password) newErrors.password = "Please Enter Your Password";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Password Do Not Match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("http://44.196.64.110:9876/user/signup",
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            userType: user
          }
        );
        toast.success(response?.data?.message || "User registered successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        setFormData({ firstName: "",lastName: "", email: "", password: "", confirmPassword: "" });
        navigate("/login");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={3}>
      <Box position="absolute" top={16} left={16}>
        <Link to="/login">
          <IconButton sx={{ color: green[500] }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>

      <Typography variant="h2" fontWeight="bold" mb={3} sx={{ fontFamily: "Poppins, sans-serif" }}>Sign Up</Typography>

      <Typography variant="h4" fontWeight="medium" mb={1} sx={{ fontFamily: "Poppins, sans-serif" }}>Register</Typography>
      <Typography variant="h6" mb={4} textAlign="left" maxWidth="520px" color="silver" sx={{ fontFamily: "Poppins, sans-serif" }}>
        Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!
      </Typography>

      <Box display="flex" flexDirection="column" gap={2} mb={4} width="100%" maxWidth="520px">
        <TextField variant="outlined" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
        {errors.firstName && <Typography variant="body6" color="error">{errors.firstName}</Typography>}

        <TextField variant="outlined" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
        {errors.lastName && <Typography variant="body6" color="error">{errors.lastName}</Typography>}

        <TextField variant="outlined" label="Email Address" name="email" value={formData.email} onChange={handleChange} InputProps={{ style: { color: "white" } }} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },},"& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
        {errors.email && <Typography variant="body6" color="error">{errors.email}</Typography>}

        <TextField variant="outlined" type={showPassword ? "text" : "password"} label="Password" name="password" value={formData.password} onChange={handleChange} InputProps={{ style: { color: "white" },endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end" sx={{ color: "white" }}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },}, "& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
        {errors.password && <Typography variant="body6" color="error">{errors.password}</Typography>}

        <TextField variant="outlined" type={showConfirmPassword ? "text" : "password"} label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} InputProps={{ style: { color: "white" },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end" sx={{ color: "white" }}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500] }, "&:hover fieldset": { borderColor: green[500] },},"& .MuiInputLabel-root": { color: "white", fontFamily: "Poppins, sans-serif" },}}/>
        {errors.confirmPassword && <Typography variant="body6" color="error">{errors.confirmPassword}</Typography>}
      </Box>

      <Button variant="contained" onClick={handleSubmit} sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'none', borderRadius: 2, px: 2, width: {xs:"350px",md:"520px"} }}>Register</Button>

      <Typography variant="body6" color="white" sx={{ cursor: "pointer", my: "15px", fontFamily: "Poppins, sans-serif" }} textAlign="center">
        Already have an account? <Link to="/login" className="log-button">Log In</Link>
      </Typography>

      <Divider sx={{ maxWidth: "520px", width: "100%", bgcolor: "#4D4D4D", mb: 3 }}>OR</Divider>

      <Box display="flex" justifyContent="center" gap={2}>
        <Button variant="outlined" onClick={handleGoogleLogin} sx={{ color: "white", borderColor: "#4D4D4D", px: { xs: 5, md: 8.5 }, py: 1, borderRadius: 1 }}>
          <GoogleIcon sx={{ color: '#EA4335', fontSize: '1.8rem' }} />
        </Button>
        <Button variant="outlined" onClick={handleFacebookLogin} sx={{ color: "white", borderColor: "#4D4D4D", px: { xs: 5, md: 8.5 }, py: 1, borderRadius: 1 }}>
          <FacebookOutlinedIcon sx={{ color: '#1877F2', fontSize: '1.8rem' }} />
        </Button>
        <Button variant="outlined" onClick={handleAppleLogin} sx={{ color: "white", borderColor: "#4D4D4D", px: { xs: 5, md: 8.5 }, py: 1, borderRadius: 1 }}>
          <AppleIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />
        </Button>
      </Box>

      <ToastContainer />
    </Box>
  );
}

export default SignUp;
