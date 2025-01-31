import React from 'react';
import { Typography, Box, Container, Radio, RadioGroup, FormControlLabel, TextField, Button } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Apple } from '@mui/icons-material'; 
import paypal from "../Images/paypal.png";
import gpay from "../Images/gpay.png";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh', backgroundColor: '#000', py: {xs: 5, md: 0} }}>
      <Container maxWidth={false} className="container center-content" sx={{flexDirection: 'column'}}>
        <Box maxWidth="md" sx={{display: {xs: 'column', md:'flex'}, backgroundColor: '#5FEF45', borderRadius: 4, p: 3 }}>
          <RadioGroup defaultValue="creditCard" name="payment-method" sx={{fontFamily: '"Poppins", sans-serif'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1}}>
              <FormControlLabel value="creditCard" control={<Radio />} label={<Typography variant='h6' fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', fontFamily: '"Poppins", sans-serif' }}>
                <CreditCardIcon sx={{ mr: 1, color: '#0068B3' }} /> Credit Card
              </Typography>}/>
            </Box>
          
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3}}>
              <FormControlLabel value="paypal" control={<Radio />} label={<Typography variant='h6' fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', fontFamily: '"Poppins", sans-serif' }}>
                <Box component="img" src={paypal} alt="paypal-icon" sx={{ height: 25, width: 25, marginRight: 1 }} /> PayPal 
              </Typography>}/>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2}}>
              <FormControlLabel value="applePay" control={<Radio />} label={<Typography variant='h6' fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', fontFamily: '"Poppins", sans-serif' }}>
                <Apple sx={{ mr: 1 }} /> ApplePay
              </Typography>}/>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: {xs: 2, md:0}}}>
              <FormControlLabel value="gpay" control={<Radio />} label={<Typography variant='h6' fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', fontFamily: '"Poppins", sans-serif' }}>
              <Box component="img" src={gpay} alt="paypal-icon" sx={{ height: 25, width: 25, marginRight: 1 }} /> Gpay
              </Typography>}/>
            </Box>
          </RadioGroup>

            {/* Form fields for credit card */}
          <Box sx={{ display: 'grid', gap: 1, mb: 2 }}>
            <TextField variant="filled" placeholder="Name on Card" sx={{ backgroundColor: '#e0ffe6', borderRadius: 1 }} />
            <TextField variant="filled" placeholder="Card Number" sx={{ backgroundColor: '#e0ffe6', borderRadius: 1 }} />
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField variant="filled" placeholder="Month" sx={{ backgroundColor: '#e0ffe6', borderRadius: 1, flex: 1 }} />
              <TextField variant="filled" placeholder="Year" sx={{ backgroundColor: '#e0ffe6', borderRadius: 1, flex: 1 }} />
            </Box>
            <TextField variant="filled" placeholder="CVC" sx={{ backgroundColor: '#e0ffe6', borderRadius: 1, fontSize: '1.5rem', fontFamily: '"Poppins", sans-serif'}} helperText="3 or 4 digits usually found on the signature strip" />
          </Box>
        </Box>
        
        <Link to="/paymentmessage">
        <Box sx={{ display: 'inline-block',p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mt: 3}}>
          <Button variant="contained" sx={{background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.3rem', textTransform: 'none', borderRadius: 2, px: 10}}>
            Submit
          </Button>
        </Box>
        </Link>

      </Container>
    </Box>
  );
}

export default Checkout;

