import React from 'react';
import { Typography, Button, Box, Container} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";

function PaymentMessage() {
  return (
    <Box sx={{backgroundColor: '#000'}}>
      <Container maxWidth={false} className="container ">
        <Box className="center-content" sx={{flexDirection: 'column',  minHeight: '75vh', color: '#fff', textAlign: 'center', py: {xs: 5, md: 0}}}>
          <CheckCircleIcon sx={{fontSize: {xs:'8rem', md: '10rem'}, color: '#5FEF45'}}/>
          <Typography sx={{color: '#5FEF45', fontSize: '1.8rem', mt: 2}}>Your order was successful</Typography>
          <Typography sx={{fontSize: {xs: '2.4rem', md:'2.8rem'}, my: 2}}>Thanks for your purchase!</Typography>
          <Typography sx={{fontSize: '1.3rem', mb: 2}}>Your order number is #11234556423146230</Typography>
          <Box sx={{display: 'flex', flexDirection: 'column'}} className="center-content">
            <Link to="/ordertracking">
              <Box sx={{ display: 'inline-block',p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mt: 3}}>
                <Button variant="contained" sx={{background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.3rem', textTransform: 'none', borderRadius: 2, px: {xs: 7,md:10}}}>
                  Track Your Order
                </Button>
              </Box>
            </Link>
            <Link to="/">
              <Button variant="contained" sx={{ paddingX: 5, backgroundColor: '#000', mt: 2, color: '#5FEF45', textTransform: 'initial', fontSize: '1.3rem' }}>Back to home</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default PaymentMessage;
