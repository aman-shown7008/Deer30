import React, { useState } from 'react';
import { Typography, Button, Box, Container, InputBase, IconButton } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function FAQ() {

  const[openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
      answer: "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam. Id placerat dui habitasse quisque nisl tincidunt facilisi mi id. Dictum elit velit."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      answer: "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      answer: "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      answer: "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      answer: "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac."
    },
  ];

  return (
    <Box sx={{backgroundColor: '#000'}}>
      <Box className="prod-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>FAQ</span>
          </Typography>
        </Container>
      </Box>

      {/* Profile Title */}
      <Box sx={{py: 4}}>
        <Container maxWidth={false} className="container" sx={{display: {sm: 'block',md:'flex'}, flexDirection: {sm: 'column', md: 'row'}, justifyContent: 'space-between'}}>
          <Typography variant="h3" sx={{ color: '#fff', mb: 3, fontSize: {xs: '2.5rem'} }}>Frequently Asked Question</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid #00FF00', borderRadius: '10px', padding: '0px 10px', backgroundColor: '#000', width: '100%', maxWidth: '450px', height: '55px', color: '#fff'}}>
            <InputBase placeholder="Search any products" sx={{ flex: 1, paddingLeft: '8px', fontSize: '1.2rem', color: '#fff'}}/>
            <IconButton type="submit" sx={{ padding: '10px', color: '#FFFFFF' }}>
              <SearchIcon sx={{fontSize: '2.2rem'}}/>
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* FAQ-Section */}
      <Box>
        <Container maxWidth={false} className="container">
          {faqs.map((faq, index) =>(
            <Box key={index} sx={{ backgroundColor: '#000', color: '#fff', mb: 2, borderRadius: '8px', overflow: 'hidden', border: '1px solid #152329' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleToggle(index)}>
              <Typography variant="h6" sx={{ fontWeight: '500', p: 2 }}>0{index + 1}. {faq.question}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: openIndex === 'index' ? '#5FEF4533' : '#5FEF45', p: {xs: 4,md:2}}}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1, }}></Typography>
                {openIndex === index ? <RemoveIcon /> : <AddIcon />}
              </Box>
            </Box>
            {openIndex === index && <Box sx={{ p: 2, borderTop: '1px solid #333' }}>{faq.answer}</Box>}
          </Box>
          ))}
        </Container>
      </Box>

      <Box sx={{background: 'linear-gradient(90deg, #5FEF45 0%, #51B175 100%)', py: 5, mt: 8}}> 
        <Container maxWidth={false} className='container center-content' sx={{flexDirection: 'column'}}>
          <Typography variant='h3' sx={{color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: {xs: '2.5rem'}, fontFamily: '"Poppins", sans-serif'}}>Ready to get started?</Typography>
          <Typography variant='h4' sx={{my: 2, textAlign: 'center', fontFamily: '"Poppins", sans-serif'}}>Talk to us today</Typography>
          <Box sx={{display: {xs: 'block', md: 'flex'}, flexDirection: {xs: 'column', md: 'row'}, textAlign: 'center'}}>
            <Link to="/contactus"><Button variant='contained' sx={{ flex: 1, mr: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 16}, color: '#57CA61', backgroundColor: '#fff', mb: {xs: 2}, width: {xs: '100%'}}}>Contact Us</Button></Link>
            <Link to="/enquiryform"><Button variant='outlined' color='success' sx={{ flex: 1, ml: {md: 2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: {md: 10}, color: '#fff', border: '2px solid #fff',  width: {xs: '100%'}}}>Submit Inquiry</Button></Link>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default FAQ
