import React,{ useState }  from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";
import { BorderBottom } from '@mui/icons-material';

function Navbar() {

  const token = sessionStorage.getItem("Token");
  const[drawerOpen, setDrawerOpen] = useState(false);
  const[activeLink, setActiveLink] = useState('/');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  }
  const user = sessionStorage.getItem("User");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  }

  const getLinkStyles = (path) => ({
    fontWeight: activeLink === path ? 'bolder': 'normal',
    borderBottom: activeLink === path ? '2px solid white' : 'none'
  })

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center', mb: 8}}>
      <List sx={{pt:9, px: 2}}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Home"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/products">
            <ListItemText primary="Products"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/service">
            <ListItemText primary="Services"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dealers">
            <ListItemText primary="Dealers"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/aboutus">
            <ListItemText primary="About Us"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/cart">
            <ShoppingCartOutlinedIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Cart"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/personalinfo">
            <AccountCircleOutlinedIcon/>
            <ListItemText primary="Account"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/login">
            <ListItemText primary="Log In"/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
      <>
        <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'black', paddingTop: '5px' }}>
          <Container maxWidth={false} className='container'>
            <Toolbar className='head-tool'>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/">
                  <Button sx={{ color: 'black', fontSize: '1.2rem', marginRight: 6, background: '#5FEF45', lineHeight: 1.2 }}>Logo</Button>
                </Link>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Link to="/" onClick={() => handleLinkClick('/')}><Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4, ...getLinkStyles('/') }}>Home</Button></Link>
                  <Link to="/products" onClick={() => handleLinkClick('/products')}><Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4, ...getLinkStyles('/products') }}>Products</Button></Link>
                  <Link to="/service" onClick={() => handleLinkClick('/service')}><Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4, ...getLinkStyles('/service') }}>Services</Button></Link>
                  { user !== "Vendor" && (<Link to="/dealers" onClick={() => handleLinkClick('/dealers')}><Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4, ...getLinkStyles('/dealers') }}>Dealers</Button></Link> )}
                  <Link to="/aboutus" onClick={() => handleLinkClick('/aboutus')}><Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4, ...getLinkStyles('/aboutus') }}>About Us</Button></Link>
                </Box>
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <Link to="/cart">
                  <IconButton sx={{ color: 'white', marginRight: '20px' }}>
                    <ShoppingCartOutlinedIcon sx={{ fontSize: '2rem' }} />
                  </IconButton>
                </Link>

                {token &&
                <Link to="/personalinfo">
                  <IconButton sx={{ color: '#5FEF45', marginRight: '10px' }}>
                    <AccountCircleOutlinedIcon sx={{ fontSize: '2.5rem' }} />
                  </IconButton>
                </Link>
                }

                <Link to={ token ? "/contactus" : "/navigationuser"}>
                  <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)' }}>
                    <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'none', borderRadius: 2, px: 3 }}>{token ? "Contact Us" : "Log In"}</Button>
                  </Box>
                </Link>
              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                  <MenuIcon />
                </IconButton>
              </Box>

            </Toolbar>
          </Container>
          <Divider sx={{ borderColor: '#5FEF45', mt: 1 }} />
        </AppBar>

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </>
  );
}

export default Navbar;
