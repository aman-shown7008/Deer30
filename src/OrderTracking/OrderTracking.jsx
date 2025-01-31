import React from 'react';
import { Typography, Button, Box, Container } from "@mui/material";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Link } from "react-router-dom";

function OrderTracking() {
  return (
    <Box sx={{ backgroundColor: '#000', minHeight: '75vh', py: 4 }} className="center-content">
      <Container maxWidth="lg" className="container">
        <Box sx={{ color: '#fff', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant='h4' sx={{ mb: 2, fontFamily: '"Poppins", sans-serif' }}>Order ID: 3354654654526</Typography>

          {/* Order Date and Estimated Delivery */}
          <Typography variant='h6' sx={{ mb: 5, fontFamily: '"Poppins", sans-serif' }}>Order Date: <span style={{ fontWeight: 'bold' }}>Jan 1, 2024</span> <span style={{ margin: '0 10px' }}>|</span>
            <span style={{ color: '#5FEF45', alignItems: 'center', ml: 1 }}>
              <LocalShippingOutlinedIcon sx={{ mr: 0.5 }} /> Estimated delivery: Jan 5th, 2024
            </span>
          </Typography>

          {/* Order Progress */}
          <Box sx={{ position: 'relative', width: '100%', my: 4, marginTop: '70px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              {['Order Confirmed', 'Shipped', 'Out For Delivery', 'Delivered'].map((status, index) => (
                <Typography key={index} variant="h6" sx={{ fontWeight: index === 0 ? 'bold' : 'normal', color: index === 0 ? '#5FEF45' : '#aaa', fontFamily: '"Poppins", sans-serif', width: '25%', textAlign: 'center', fontSize: {xs: '1rem', md: '1.25rem'} }}>
                  {status}
                </Typography>
              ))}
            </Box>

            <Box sx={{ position: 'absolute', top: {xs: '75px',md:'57px'}, left: '12.5%', right: '12.5%', height: '5px', backgroundColor: '#fff', zIndex: 1 }}>
              <Box sx={{ height: '5px', width: '100%', backgroundColor: '#5FEF45' }} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              {['Wed, 1st Jan', 'Wed, 1st Jan', 'Wed, 2nd Jan', 'Expected by Sat, 5th Jan'].map((date, index) => (
                <Box key={index} sx={{ textAlign: 'center', width: '25%' }}>
                  <Box sx={{ width: 25, height: 25, borderRadius: '50%', backgroundColor: index === 0 ? '#5FEF45' : '#777', mx: 'auto', mb: 1, position: 'relative', zIndex: 1 }} />
                  <Typography variant="h6" sx={{ color: '#aaa', fontFamily: '"Poppins", sans-serif', fontSize: {xs: '1rem', md: '1.25rem'} }}>
                    {date}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Back Button */}
          <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mt: 3 }}>
            <Link to="/paymentmessage">
              <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.3rem', textTransform: 'none', borderRadius: 2, px: { xs: 4, md: 10 } }}>
                Back
              </Button>
            </Link>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default OrderTracking;
