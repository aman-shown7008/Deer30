import React, { useState } from 'react';
import {Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, InputBase, IconButton } from '@mui/material';
import {CreditCard, ExitToApp,} from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import img1 from "../../Images/home-4.png";
import {Link} from "react-router-dom";
import SideBar from '../SideBar/SideBar';

const address = [
  { id: 1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.it to make a.......",},
  {id: 2, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.it to make a.......",},
  {id: 3, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.it to make a.......",},
  {id: 4, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.it to make a.......",},
  {id: 5, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.it to make a.......",},
];


function Notifications() {
  const[clickedItems, setClickedItems] = useState({});

  const handleItemClick = (id) => {
    setClickedItems((prevClickItems) => ({
      ...prevClickItems,
      [id] : !prevClickItems[id],
    }))
  }

  const handleLogout = () => {
    console.log("It is cliecked");
    sessionStorage.removeItem("Token");
  }

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        
        {/* Profile Title */}
        <Box sx={{display: {sm: 'block',md:'flex'}, flexDirection: {sm: 'column', md: 'row'}, justifyContent: 'space-between'}}>
          <Typography variant="h3" sx={{ color: '#fff', mb: 3, fontFamily: '"Poppins", sans-serif'  }}>My Profile</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid #00FF00', borderRadius: '10px', padding: '0px 10px', backgroundColor: '#000', width: '100%', maxWidth: '450px', height: '55px', color: '#fff',  marginBottom: {xs: 3}, boxShadow: '0 0 10px 2px #5FEF45',}}>
            <InputBase placeholder="Search notifications" sx={{ color: '#FFFFFF', flex: 1, paddingLeft: '8px', fontSize: '1.2rem', color: '#fff'}}/>
            <IconButton type="submit" sx={{ padding: '10px', color: '#FFFFFF' }}>
              <SearchIcon sx={{fontSize: '2.2rem'}}/>
            </IconButton>
          </Box>
        </Box>

        <Grid container spacing={4}>
          
        {/* Sidebar Navigation */}
        <Grid item xs={12} sm={4} md={3}>
            <Box sx={{ backgroundColor: '#fff', borderRadius: 2 }}>
              <Box sx={{ mb: 2, display: 'flex', padding: '15px 15px 10px 15px'}}>
                <img src={img1} alt="Profile" style={{ borderRadius: '50%' }} />
                <Box sx={{marginLeft: '20px'}}>
                    <Typography variant="body6" color="textSecondary">Hello!</Typography>
                    <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold', fontSize: '1.3rem' }}>Robert Fox</Typography>
                </Box>
              </Box>
              <Divider sx={{ borderColor: '#2e2e2e', mb: 2 }} />
              <List component="nav">
                <Link to="/personalinfo" className='link-c'>
                  <ListItem button selected sx={{'&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><PermIdentityOutlinedIcon sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Personal Information" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem', whiteSpace: 'nowrap' } }}/>
                  </ListItem>
                </Link>
                
                <Link to="/myorders" className='link-c'>
                  <ListItem button sx={{my: 1,'&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><BorderAllOutlinedIcon sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="My Orders" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>

                
                <Link to="/manageaddress" className='link-c'>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><RoomOutlinedIcon sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Manage Addresses" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem', whiteSpace: 'nowrap' } }}/>
                  </ListItem>
                </Link>

                <Link to="/savedcards" className='link-c'>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><CreditCard sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Saved Cards" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>

                <Link to="/notifications" className='link-c'>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><NotificationsNoneOutlinedIcon  sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Notifications" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>

                <Link to="/navigationuser" className='link-c' onClick={handleLogout}>
                  <ListItem button sx={{my: 1, '&:hover':{backgroundColor: '#5FEF45'}}}>
                    <ListItemIcon><ExitToApp sx={{ color: '#000' }} /></ListItemIcon>
                    <ListItemText primary="Log Out" primaryTypographyProps={{ sx: { color: '#000', fontSize: '1.1rem' } }}/>
                  </ListItem>
                </Link>
              </List>
            </Box>
        </Grid>
          
        {/* Personal Information Form */}
        <Grid item xs={12} sm={8} md={9}>
          {address.map((item) => (
            <Box key={item.id} onClick={() => handleItemClick(item.id)} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#000', mb: 2, color: clickedItems[item.id] ? '#fff' : '#aaa', border: `1px solid ${clickedItems[item.id] ? '#fff': '#aaa'}`, cursor: 'pointer'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, p: 1}}>
                <Typography variant='h6' fontWeight={'bold'} sx={{ fontFamily: '"Poppins", sans-serif' }}>
                  {item.description}{!clickedItems[item.id] && (<span style={{height: '15px', width: '15px', borderRadius: '50%', backgroundColor: '#5FEF45', display: 'inline-block', marginLeft: '5px'}}></span>)}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default Notifications
