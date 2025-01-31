import React, {useState} from 'react';
import { Card, CardContent, CardActions, Box, Container, Typography, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, InputBase, IconButton } from '@mui/material';
import {CreditCard, ExitToApp,} from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import img1 from "../../Images/home-4.png";
import img2 from "../../Images/home-1.png";
import {Link} from "react-router-dom";

const orders = [
  {
    id: 1,
    img: img2,
    title: "Girls Pink Moana Printed Dress",
    status: "Delivered",
    price: 80.00,
    quantity: 1,
  },
  {
    id: 2,
    img: img2,
    title: "Women Textured Handheld Bag",
    status: "In Process",
    price: 80.00,
    quantity: 1,
  },
  {
    id: 3,
    img: img2,
    title: "Tailored Cotton Casual Shirt",
    status: "In Process",
    price: 40.00,
    quantity: 1,
  },
];

function MyOrders() {

  const[seletedItem, setSelectedItem] = useState("null");
  const handleLogout = () => {
    sessionStorage.removeItem("Token");
  }
  
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        
        {/* Profile Title */}
        <Box sx={{display: {sm: 'block',md:'flex'}, flexDirection: {sm: 'column', md: 'row'}, justifyContent: 'space-between'}}>
          <Typography variant="h3" sx={{ color: '#fff', mb: 3 }}>My Profile</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid #00FF00', borderRadius: '10px', padding: '0px 10px', backgroundColor: '#000', width: '100%', maxWidth: '450px', height: '55px', color: '#fff', marginBottom: {xs: 3}, boxShadow: '0 0 10px 2px #5FEF45'}}>
            <InputBase placeholder="Search any products" sx={{ color: '#FFFFFF', flex: 1, paddingLeft: '8px', fontSize: '1.2rem', color: '#fff'}}/>
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
                  <ListItem button selected={seletedItem === "PersonalInfo"} sx={{backgroundColor: seletedItem === "PersonalInfo" ? "blue" : "#fff" ,'&:hover':{backgroundColor: '#5FEF45'}}} onClick={() => setSelectedItem("PersonalInfo")}>
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
        <Grid spacing={2} item xs={12} sm={8} md={9}>
          {orders.map((order) => (
          <Grid item xs={12} key={order.id}>
            <Card sx={{display: 'flex',flexDirection: { xs: 'column', sm: 'row' },  justifyContent: 'space-between', backgroundColor: '#000', borderBottom: '1px solid #A4A1AA33', mb: '10px'}}>
              <CardContent>
                <Box sx={{display: {xs: 'block', md: 'flex'}, flexDirection: {xs: 'column', md: 'row'}, color: '#fff'}}>
                  <Box>
                    <Box component="img" src={order.img} alt={order.title} sx={{ height: "90px", width: "80px", objectFit: "cover", borderRadius: "2px", marginBottom: "10px",}}/>
                  </Box>
                  <Box sx={{marginLeft: {xs: '0px', md: '20px'}}}>
                    <Typography variant="h6" sx={{fontWeight: 'bold', mb: '15px'}} fontFamily= '"Poppins", sans-serif'>{order.title}</Typography>
                    <Typography variant="body3" >Qty: {order.quantity}</Typography>
                  </Box>
                </Box>
                <Box sx={{display: 'flex', color: '#fff', marginTop: {xs: '10px', md: '0px'}}}>
                  <Typography variant='body2' sx={{height: '30px', width: '80px', color: order.status === 'Delivered' ? '#3CD139' : '#E3B231', backgroundColor: order.status === 'Delivered' ? '#3CD1391A' : '#E3B2311A', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "2px"}} fontFamily='"Poppins", sans-serif'>
                    {order.status === 'Delivered' ? 'Delivered' : 'In Process'}
                  </Typography>
                  <Typography variant="body3" sx={{marginLeft: '22px'}}>
                    {order.status === 'Delivered' ? 'Your product has been delivered' : 'Your product has been In process'}
                  </Typography>
                </Box>

              </CardContent>

              <CardContent>
                <Typography variant="h6" sx={{color: '#fff', fontWeight: 'bold'}} fontFamily='"Poppins", sans-serif'>${order.price.toFixed(2)}</Typography>
              </CardContent>

              <CardActions sx={{display: {xs: 'flex', md: 'flex'}, flexDirection: {xs: 'row', md: 'column'}, justifyContent: {xs: 'space-between', md: 'start'}}}>
                <Link to="/productdescription">
                  <Button variant="contained" sx={{marginBottom: {xs: '0px',md: '10px'}, minWidth:  {xs: '140px', md:'160px'}, width: 'auto', backgroundColor: '#000', border: '1px solid #fff', textTransform: 'initial', marginLeft: '0px!important'}}>View Order</Button>
                </Link>
                {order.status === 'Delivered' ? (
                  <Button variant="outlined" sx={{minWidth: {xs: '140px', md:'160px'}, width: 'auto', backgroundColor: '#fff',border: 'none', color: '#000',border: '1px solid #fff', textTransform: 'initial'}}>Reorder</Button>
                  ) : (
                  <Button variant="contained" color="error" sx={{minWidth:  {xs: '140px', md:'160px'}, width: 'auto', backgroundColor: '#FF7262',border: '1px solid #FF7262', textTransform: 'initial'}}>Cancel Order</Button>
                )}
              </CardActions>
            </Card>
          </Grid>
          ))}
        </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MyOrders;
