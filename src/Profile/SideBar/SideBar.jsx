import React from 'react';
import {Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Divider} from '@mui/material';
import {CreditCard, ExitToApp,} from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import img1 from "../../Images/home-4.png";
import {Link} from "react-router-dom";

function SideBar() {
    const handleLogout = () => {
        console.log("It is cliecked");
        sessionStorage.removeItem("Token");
      }
    
  return (
    <div className='sidebar'>
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
    </div>
  )
}

export default SideBar;