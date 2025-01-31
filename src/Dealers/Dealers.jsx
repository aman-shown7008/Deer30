import React from 'react';
import { Typography, Button, Box, Container} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {Link} from "react-router-dom";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";

const products = [
  { img: img1, dealer: "Dealer 1" },
  { img: img2, dealer: "Dealer 2" },
  { img: img1, dealer: "Dealer 3" },
  { img: img2, dealer: "Dealer 4" },
  { img: img1, dealer: "Dealer 5" },
  { img: img2, dealer: "Dealer 6" },
  { img: img1, dealer: "Dealer 7" },
  { img: img2, dealer: "Dealer 8" },
];

function Dealers() {
  return (
    <Box>
      <Box className="dealers-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff'}}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>Dealers</span>
          </Typography>
        </Container>
      </Box>
      <Box>
       <Box sx={{backgroundColor: 'black', py: 4}}>
        <Container maxWidth={false} className="container center-content" sx={{display: { xs: 'block', md: 'flex' }, flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', backgroundColor: '#5FEF45', borderRadius: '20px', py: 3}}>
          <Box sx={{width: {xs: '100%', md:'15%'}, marginBottom: {xs: '20px', md: '0px'}}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>DEALERS</Typography>
            <Typography variant='body6' sx={{fontWeight: 'bold'}}>Submit Enquiry Form</Typography>
          </Box>
          <Box sx={{width: {xs: '100%', md:'60%'}, marginBottom: {xs: '20px', md: '0px'}}}>
            <Typography variant='body6'>Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis, Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.</Typography>
            <Typography variant='body6'>Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis, Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.</Typography>
          </Box>
          <Box sx={{width: {xs: '100%', md:'20%'}}}>
            <Link to="/enquiryform"><Button variant='contained' sx={{ flex: 1, mr: 2, textTransform: 'initial', fontSize: '1.2rem', fontWeight: 'bold', color: '#5FEF45', backgroundColor: '#000', py: 2}}>Enquiry Form >></Button></Link>
          </Box>
        </Container>
       </Box>

       <Box sx={{backgroundColor: 'black', py: 4}}>
       <Container maxWidth={false} className='container' sx={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((prod, idx) => (
          <Box key={idx} sx={{  display: "flex", flexDirection: "column",  alignItems: "center", width: { xs: "100%", sm: "50%", md: "33%", lg: "25%" }, padding: "10px", }}>
            <Box component="img" src={prod.img} alt={prod.dealer} sx={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "50%", marginBottom: "10px"}}/>
            <Typography variant="h6" sx={{ textAlign: "center", color: '#fff' }}>
              {prod.dealer}
            </Typography>
          </Box>
        ))}
        </Container>
       </Box>

       <Box sx={{background: 'linear-gradient(90deg, #5FEF45 0%, #51B175 100%)', py: 5}}> 
        <Container maxWidth={false} className='container center-content' sx={{flexDirection: 'column'}}>
          <Typography variant='h3' sx={{color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: {xs: '2.5rem', md: '3rem'}, fontFamily: '"Poppins", sans-serif'}}>Ready to get started?</Typography>
          <Typography variant='h4' sx={{my: 2, textAlign: 'center', fontFamily: '"Poppins", sans-serif'}}>Talk to us today</Typography>
          <Box sx={{display: {xs: 'block', md: 'flex'}, flexDirection: {xs: 'column', md: 'row'}, textAlign: 'center'}}>
            <Link to="/contactus"><Button variant='contained' sx={{ flex: 1, mr: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 16}, color: '#57CA61', backgroundColor: '#fff',mb: {xs: 2}, width: {xs: '100%'}}}>Contact Us</Button></Link>
            <Link to="/enquiryform"><Button variant='outlined' color='success' sx={{ flex: 1, ml: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 10}, color: '#fff', border: '2px solid #fff', width: {xs: '100%'}}}>Submit Inquiry</Button></Link>
          </Box>
        </Container>
       </Box>
      </Box>
    </Box>
  )
}

export default Dealers;
