import React from 'react';
import { Box, Container, Typography, Button, TextField, Grid, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 4, borderTop: '1px solid #5FEF45'}}>
      <Container maxWidth={false} className='container' sx={{marginTop: '50px'}}>
        <Grid container spacing={4} sx={{marginBottom: '50px'}}>
          
          {/* Logo and Description */}
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Box sx={{ backgroundColor: '#5FEF45', width: '150px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', mb: 2 }}>
                <Typography variant="h5" color="textPrimary">Logo</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2, color: '#fff', fontSize: '1rem', width: {xs: '100%', md: '350px'}, fontFamily: '"Poppins", sans-serif' }}>
                Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus tempus mauris neque.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Facebook sx={{ color: '#5FEF45' }} />
                <Instagram sx={{ color: '#5FEF45' }} />
                <LinkedIn sx={{ color: '#5FEF45' }} />
              </Box>
            </Box>
          </Grid>
          
          {/* Website Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h5" sx={{ color: '#5FEF45', mb: 2, fontWeight: 'bold',fontFamily: '"Poppins", sans-serif' }}>Website Links</Typography>
            <Box>
              <Link href="/" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>Home</Link>
              <Link href="/aboutus" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>About</Link>
              <Link href="/contactus" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>Get in touch</Link>
              <Link href="/faq" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>FAQs</Link>
            </Box>
          </Grid>
          
          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h5" sx={{ color: '#5FEF45', mb: 2, fontWeight: 'bold', fontFamily: '"Poppins", sans-serif' }}>Services</Typography>
            <Box>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>Website designing</Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>Website Development</Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>SEO Services</Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>Application Design</Link>
            </Box>
          </Grid>
          
          {/* Subscribe Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ backgroundColor: '#5FEF45', p: 2, borderRadius: '5px' }}>
              <Typography variant="h5" color="textPrimary" sx={{ mb: 1, fontWeight: 'bold' }}>SUBSCRIBE TO GET UPDATED</Typography>
              <Typography variant="body2" color="textPrimary" sx={{ mb: 2, fontSize: '1rem',  fontFamily: '"Poppins", sans-serif' }}>
                Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.
              </Typography>
              <Box component="form" sx={{ display: 'flex', gap: 1 }}>
                <TextField 
                  variant="outlined" 
                  placeholder="Enter your email" 
                  size="small" 
                  fullWidth
                  sx={{ backgroundColor: '#5FEF45', borderRadius: 1, border: '1px solid #000' }}
                />
                <Button variant="contained" sx={{ backgroundColor: '#000', color: '#5FEF45', whiteSpace: 'nowrap', padding: ' 0 30px', textTransform: 'initial' }}>
                  Subscribe Now
                </Button>
              </Box>
            </Box>
          </Grid>
          
        </Grid>
        
        {/* Footer Bottom Text */}
        <Box sx={{ borderTop: '1px solid #5FEF45', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="h6" sx={{color: '#fff', fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif'}}>
            Non Copyrighted © 2024 Design and upload by Aayan Infotech
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
