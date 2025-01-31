import React from 'react';
import { Typography, Button, Box, Container, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";

function Approval() {
  return (
    <Box>
      <Box className="dealers-header" sx={{ py: 2, backgroundColor: '#000', color: '#fff' }}>
        <Container maxWidth="lg" className="container">
          <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Poppins", sans-serif' }}>
            Home <ArrowForwardIosOutlinedIcon sx={{ margin: '0 10px' }} /> <span style={{ fontWeight: 'bold' }}>Dealers</span>
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#000', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Container maxWidth="lg" className="container">
          <Grid container justifyContent="space-between" alignItems="center" sx={{ position: 'relative' }}>
            {/* Connecting line */}
            <Box sx={{ position: 'absolute', top: { xs: '65%', sm: '65%' }, left: { xs: 'calc(12% + 10px)', sm: 'calc(10% + 20px)' }, right: { xs: 'calc(12% + 80px)', sm: 'calc(8% + 160px)' }, height: '5px', backgroundColor: '#5FEF45', zIndex: 0, '&::after': { content: '""', position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)', border: '7px solid transparent', borderLeftColor: '#5FEF45',},}}/>

            {/* Request Submitted */}
            <Grid item xs={3} sx={{ textAlign: 'center', position: 'relative', zIndex: 1, }}>
              <Typography variant='h6' sx={{ color: '#5FEF45', mb: 1,fontFamily: '"Poppins", sans-serif' }}>Request Submitted</Typography>
              <FiberManualRecordIcon sx={{ fontSize: "40px", color: "#5FEF45" }} />
            </Grid>

            {/* Approval */}
            <Grid item xs={3} sx={{ textAlign: 'center', position: 'relative',zIndex: 100 }}>
              <Typography variant="h6" sx={{ color: "#5FEF45", mb: 1, fontFamily: '"Poppins", sans-serif'}}>Approval</Typography>
              <CheckCircleIcon sx={{ fontSize: "35px", color: "#5FEF45", zIndex: -1, mt: {xs: '35px', md: '0px'} }} />
            </Grid>

            {/* Create Dealer Account */}
            <Grid item xs={3} sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Poppins", sans-serif' }}>Create Dealer Account</Typography>
              <Link to="/signup">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                <Button variant="contained" sx={{ background: 'silver', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'none', borderRadius: 2, px: { xs: 4, md: 6 }, marginBottom: '10px'}}>Sign Up</Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Approval;
