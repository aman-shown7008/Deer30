import React from 'react';
import { Typography, Button, Box, Container} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import img3 from "../Images/service-1.png";
import img2 from "../Images/service-2.png";
import img1 from "../Images/service-3.png";
import { Link } from "react-router-dom";

const service = [
    {
      img: img1,  
      title: "Bulk Purchasing",
      description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful, Lorem ipsum dolor sit amet.",
    },
    {
      img: img2,
      title: "Farm Management",
      description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful, Lorem ipsum dolor sit amet.",
    },
    {
      img: img3,
      title: "Dealer Partnership",
      description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful, Lorem ipsum dolor sit amet.",
    },
];

function Service() {
  return (
    <Box>
      <Box className="service-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>Services</span>
          </Typography>
        </Container>
      </Box>

      <Box sx={{backgroundColor: '#000', color: '#fff', py: 5}}>
        <Container maxWidth={false} className='container'>
          {service.map((service, idx) => (
            <Box key={idx} sx={{display: 'flex',flexDirection: { xs: 'column', sm: 'row' }, py: 3, alignItems: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' }}}>
              <Box component="img" src={service.img} alt={service.title} sx={{ height: { xs: "170px", sm: "200px" }, width: { xs: "80%", sm: "40%" }, objectFit: "cover", borderRadius: "10px", marginBottom: { xs: "20px", sm: "10px" }, mr: { sm: 5 }}}/>
                <Box className="center-content" sx={{flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, width: { xs: '100%', sm: '50%' }}}>
                  <Typography variant='h4' sx={{fontWeight: 'bold', mb: 2}}>{service.title}</Typography>
                  <Typography variant='body6'>{service.description}</Typography>
                </Box>
                <Box className="center-content" sx={{ width: { xs: '100%', sm: '10%' },justifyContent: { xs: 'center', sm: 'flex-start' }, mt: { xs: 2, sm: 0 }}}>
                  <Link to="/products"><Typography sx={{height: '60px', width: '60px', backgroundColor: '#5FEF45', borderRadius: '50px'}} className='center-content'><ArrowForwardIosOutlinedIcon sx={{fontSize: '2.2rem', fontWeight: 'bold', color: '#fff'}}/></Typography></Link>
                </Box>
            </Box>
          ))}
        </Container>
      </Box>

      <Box sx={{background: 'linear-gradient(90deg, #5FEF45 0%, #51B175 100%)', py: 5}}> 
        <Container maxWidth={false} className='container center-content' sx={{flexDirection: 'column'}}>
          <Typography variant='h3' sx={{color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: {xs: '2.5rem', md: '3rem'}, fontFamily: '"Poppins", sans-serif'}}>Ready to get started?</Typography>
          <Typography variant='h4' sx={{my: 2, fontFamily: '"Poppins", sans-serif'}}>Talk to us today</Typography>
          <Box sx={{display: {xs: 'block', md: 'flex'}, flexDirection: {xs: 'column', md: 'row'}, textAlign: 'center'}}>
            <Link to="/contactus"><Button variant='contained' sx={{ flex: 1, mr: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 16}, color: '#57CA61', backgroundColor: '#fff', mb: {xs: 2}, width: {xs: '100%'}}}>Contact Us</Button></Link>
            <Link to="/enquiryform"><Button variant='outlined' color='success' sx={{ flex: 1, ml: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 10}, color: '#fff', border: '2px solid #fff',  width: {xs: '100%'}}}>Submit Inquiry</Button></Link>
          </Box>
        </Container>
      </Box>

    </Box>
  )
}

export default Service;
