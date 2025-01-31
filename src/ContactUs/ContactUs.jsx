import React from 'react';
import { Typography, Button, Box, Container, TextField} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";
import img1 from "../Images/contact.png";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {

  const handleSubmit = () => {
    console.log("It is cliecked");
    toast.success("Thankyou, Your message has been received!");
  }

  return (
    <Box sx={{backgroundColor: '#000'}}>
      <Box className="prod-header">
        <Container maxWidth={false} className="container center-content" sx={{flexDirection: 'column'}}>
          <Typography variant="h3" sx={{fontWeight: 'bold', textAlign: 'center', fontFamily: '"Poppins", sans-serif'}}>Get in touch</Typography>
          <Typography variant='h6' sx={{textAlign: 'center', fontFamily: '"Poppins", sans-serif'}}>Reach out, and let's create a universe of possibilities together!</Typography>
        </Container>
      </Box>
      <ToastContainer/>
      {/* Contact-section */}
      <Box className='center-content'>
        <Container maxWidth={false} className='container' sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column-reverse', md: 'row' }, backgroundColor: '#111', borderRadius: '16px', my: 4, py: 4 }}>
        {/* Form-section */}
          <Box sx={{flex: 1, color: '#fff'}}>
            <Typography variant='h5' sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>Let’s connect constellations</Typography>
            <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif'}}>Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</Typography>
            <Box component="form" noValidate sx={{ display: 'grid', gap: 2, mt: 5 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField fullWidth placeholder='First Name' variant='outlined' sx={{bgcolor: '#333', borderRadius: '8px', input: {color: '#fff'}}} />
                <TextField fullWidth placeholder="Last Name" variant="outlined" sx={{ bgcolor: '#333', borderRadius: '8px', input: { color: '#fff' } }} />
              </Box>
              <TextField fullWidth placeholder='Email' variant='outlined' sx={{bgcolor: '#333', borderRadius: '8px', input: {color: '#fff'}}}/>
              <TextField fullWidth placeholder='Phone Number' variant='outlined' sx={{bgcolor: '#333', borderRadius: '8px', input: {color: '#fff'}}}/>
              <TextField fullWidth multiline rows={4} placeholder='Message' variant='outlined' sx={{bgcolor: '#333', borderRadius: '8px', input: {color: '#fff'}}}/>
              <Box sx={{ display: 'inline-block',p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)'}}>
                <Button fullWidth variant="contained" onClick={handleSubmit} sx={{background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'none', borderRadius: 2, px: 3}}>
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
          {/* Image-section */}
          <Box sx={{flex: 1, borderRadius: '12px', overflow: 'hidden'}} className='center-content'>
            <Box component="img" src={img1} alt="about-1" sx={{ maxHeight: '500px',height: 'intial', width: {sm:"450px", md: '100%'}, objectFit: "contain", marginBottom: "10px"}}/>
          </Box>
        </Container>
      </Box>
      
      <Box sx={{background: 'linear-gradient(90deg, #5FEF45 0%, #51B175 100%)', py: 5}}> 
        <Container maxWidth={false} className='container center-content' sx={{flexDirection: 'column'}}>
          <Typography variant='h3' sx={{color: '#fff', fontWeight: 'bold', textAlign: 'center', fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem', md: '3rem'}}}>Ready to get started?</Typography>
          <Typography variant='h4' sx={{my: 2, textAlign: 'center', fontFamily: '"Poppins", sans-serif'}}>Talk to us today</Typography>
          <Box sx={{display: {xs: 'block', md: 'flex'}, flexDirection: {xs: 'column', md: 'row'}, textAlign: 'center'}}>
            <Link to="/products"><Button variant='contained' sx={{ flex: 1, mr: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 16}, color: '#57CA61', backgroundColor: '#fff', mb: {xs: 2}, width: {xs: '100%'}}}>Shop Now</Button></Link>
            <Link to="/enquiryform"><Button variant='outlined' color='success' sx={{ flex: 1, ml: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 10}, color: '#fff', border: '2px solid #fff',  width: {xs: '100%'}}}>Dealer Inquiry</Button></Link>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default ContactUs
