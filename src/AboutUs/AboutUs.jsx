import React from 'react';
import { Typography, Button, Box, Container} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import img1 from "../Images/aboutus-1.png";
import img2 from "../Images/aboutus-2.png";
import img3 from "../Images/aboutus-3.png";
import img4 from "../Images/aboutus-4.png";
import img5 from "../Images/aboutus-5.png";
import { Link } from "react-router-dom";

const teams = [
  { img: img5, title: "Dog Trainer", name: "Annette Black"},
  { img: img5, title: "Medical Assistant", name: "Wade Warren"},
  { img: img5, title: "President of Sales", name: "Savannah Nguyen"},
  { img: img5, title: "Nursing Assistant", name: "Jenny Wilson"},
];

function AboutUs() {
  return (
    <Box sx={{backgroundColor: '#000'}}>
      <Box className="prod-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>About Us</span>
          </Typography>
        </Container>
      </Box>

      {/* Paragraph */}
      <Box sx={{color: '#fff'}} className='section'>
        <Container maxWidth={false} className="container center-content" sx={{flexDirection: {xs: 'column-reverse', md: 'row'}}}>
          <Box sx={{width: {sx: '100%', md: '50%'}, marginRight: {sx: '0px', md: '20px'}}}>
            <Typography variant='h4' sx={{fontWeight: 'bold', mb: 2}}>About Deer30</Typography>
            <Typography variant='body6' sx={{display: 'block', mb: 2}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            <Typography variant='body5'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
          </Box>
          <Box>
            <Box component="img" src={img1} alt="about-1" sx={{ height: {xs: "250px",md:"300px"}, width: {xs: "300px",md:"400px"}, objectFit: "cover", marginBottom: "10px"}}/>
          </Box>
        </Container>
      </Box>

      {/* Products-Cate */}
      <Box sx={{color: '#fff'}}> 
        <Container maxWidth={false} className="container center-content">
          <Box sx={{display:  'flex', gap: '50px', flexWrap: 'wrap'}}>
            <Typography variant='h4' sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif',}}>Mission</Typography><GpsFixedOutlinedIcon sx={{fontSize: '2.5rem'}}/>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>Vision</Typography><GpsFixedOutlinedIcon sx={{fontSize: '2.5rem'}}/>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>Values</Typography>
          </Box>
        </Container>
      </Box>
      <Box className='section'>
        <Container maxWidth={false} className="container center-content" sx={{ flexWrap: 'wrap'}}>
          <Box component="img" src={img2} alt="about-1" sx={{ height: "350px", width: "400px", objectFit: "contain", marginBottom: "10px"}}/>
          <Box component="img" src={img3} alt="about-1" sx={{ height: "350px", width: "400px", objectFit: "contain", marginBottom: "10px"}}/>
          <Box component="img" src={img4} alt="about-1" sx={{ height: "350px", width: "400px", objectFit: "contain", marginBottom: "10px"}}/>
        </Container>
      </Box>

      {/* Team-Section */}
      <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
        <Container maxWidth={false} className="container center-content" sx={{ flexDirection: 'column' }}>
          <Box sx={{ display: 'block', textAlign: 'center' }}>
            <Typography variant='h4' sx={{ mb: 2, fontWeight: 'bold',fontFamily: '"Poppins", sans-serif', }}>Meet the Team</Typography>
            <Typography variant='h6' color='#797979' fontFamily= '"Poppins", sans-serif'>Meet our team of professionals to serve you </Typography>
          </Box>
          <Box className='center-content' sx={{ my: 5, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
            {
              teams.map((team, idx) => (
                <Box key={idx} sx={{ backgroundColor: '#fff', width: "280px", borderRadius: '8px', overflow: 'hidden', boxShadow: 3 }}>
                  <Box component="img" src={team.img} alt={team.name} sx={{ height: "250px", width: "280px", objectFit: "cover" }} />
                  <Box className='center-content' sx={{ flexDirection: 'column', p: 2, color: '#000' }}>
                    <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#747474', fontFamily: '"Poppins", sans-serif', }}>{team.title}</Typography>
                    <Typography variant='h6' sx={{fontWeight: 'bold',fontFamily: '"Poppins", sans-serif'}}>{team.name}</Typography>
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Container>
      </Box>

      <Box sx={{background: 'linear-gradient(90deg, #5FEF45 0%, #51B175 100%)', py: 5}}> 
        <Container maxWidth={false} className='container center-content' sx={{flexDirection: 'column'}}>
          <Typography variant='h3' sx={{color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: {xs: '2.5rem', md: '3rem'}, fontFamily: '"Poppins", sans-serif',}}>Ready to get started?</Typography>
          <Typography variant='h4' sx={{my: 2, textAlign: 'center', fontFamily: '"Poppins", sans-serif',}}>Talk to us today</Typography>
          <Box sx={{display: {xs: 'block', md: 'flex'}, flexDirection: {xs: 'column', md: 'row'}, textAlign: 'center'}}>
            <Link to="/products"><Button variant='contained' sx={{ flex: 1, mr: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 16}, color: '#57CA61', backgroundColor: '#fff',mb: {xs: 2}, width: {xs: '100%'}}}>Shop Now</Button></Link>
            <Link to="/enquiryform"><Button variant='outlined' color='success' sx={{ flex: 1, ml: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 10}, color: '#fff', border: '2px solid #fff', width: {xs: '100%'}}}>Dealer Inquiry</Button></Link>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutUs
