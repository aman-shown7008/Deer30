import React, {useState} from 'react';
import { Typography, Button, Box, Container,Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import img1 from "../Images/eCart.webp";
import img2 from "../Images/home-2.png";
import {Link} from "react-router-dom";

function Cart() {

  const [cartItems, setCartItems] = useState([
    {id: 1, image: img2, name: "TNT PIPE DREAM LOCK ON", price: 34.43, quantity: 1, },
    { id: 2, image: img2, name: "TNT PIPE DREAM LOCK ON", price: 30.43, quantity: 1, }
  ]);

  const handleQuantityChange = (type, itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: type === "Incre" ? item.quantity + 1 : Math.max(item.quantity - 1, 1), }: item)
  )};

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Box>
      <Box className="cart-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>Cart</span>
          </Typography>
        </Container>
      </Box>

      {cartItems.length === 0 ? (
        <Box sx={{backgroundColor: '#000'}}>
        <Container maxWidth={false} className="container center-content" sx={{flexDirection: 'column', height: '50vh'}}>
          <Box component="img" src={img1} alt="cart-img" sx={{ height: 250, width: 250, marginRight: 2 }} />
          <Typography variant="h3" sx={{ color: "#fff", textAlign: 'center'}}>Your Cart is Empty!</Typography>
          </Container>
        </Box>
      ) : (
      <Box sx={{ padding: 3, backgroundColor: '#000' }}>
        <Container maxWidth={false} className="container">
          <Typography variant='h6' sx={{color: '#fff', my: 2}}>Cart (2 Items)</Typography>
          <TableContainer>
            <Table sx={{border: '1px solid #5FEF45'}}>
              <TableHead>
                <TableRow sx={{borderBottom: '1px solid #5FEF45'}}>
                  <TableCell sx={{ color: "#fff",borderBottom: '1px solid #5FEF45', fontSize: '1.2rem' }}>Items</TableCell>
                  <TableCell sx={{ color: "#fff",borderBottom: '1px solid #5FEF45', fontSize: '1.2rem' }}>Price</TableCell>
                  <TableCell sx={{ color: "#fff",borderBottom: '1px solid #5FEF45', fontSize: '1.2rem', ml: 5 }}>Quantity</TableCell>
                  <TableCell sx={{ color: "#fff",borderBottom: '1px solid #5FEF45', fontSize: '1.2rem' }}>Total</TableCell>
                  <TableCell sx={{ color: "#fff",borderBottom: '1px solid #5FEF45', fontSize: '1.2rem' }}>Remove</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell sx={{borderBottom: '1px solid #5FEF45'}}>
                      <Box sx={{display: "flex", alignItems: "center", flexDirection: {sm: 'column', md:'row'}}}>
                        <Box component="img" src={item.image} alt={item.name} sx={{ height: 50, width: 50, marginRight: 2 }} />
                        <Typography variant="body1" sx={{ color: "#fff",fontSize: '1rem', textAlign: {xs: "center", md: "left"} }}>{item.name}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell sx={{color: '#fff', borderBottom: '1px solid #5FEF45',fontSize: '1rem'}}>${item.price.toFixed(2)}</TableCell>
                    <TableCell sx={{borderBottom: '1px solid #5FEF45', py: 5}}>
                      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', md: 'flex-start'}}}>
                        <IconButton sx={{border: '2px solid #fff'}} onClick={() => handleQuantityChange("Decre", item.id)}>
                          <RemoveIcon sx={{color: '#fff'}}/>
                        </IconButton>
                        <Typography variant="body1" sx={{ color: "#fff", marginX: 1, border: '2px solid #fff', padding: 1 }}>{item.quantity}</Typography>
                        <IconButton sx={{border: '2px solid #fff'}} onClick={() => handleQuantityChange("Incre", item.id)}>
                          <AddIcon sx={{color: '#fff'}}/>
                        </IconButton>
                      </Box>
                    </TableCell>

                    <TableCell sx={{ color: "#fff", borderBottom: '1px solid #5FEF45',fontSize: '1rem' }}>${(item.price * item.quantity).toFixed(2)}</TableCell>

                    <TableCell sx={{borderBottom: '1px solid #5FEF45'}}>
                      <IconButton onClick={() => handleRemoveItem(item.id)} color="error">
                        <DeleteOutlineIcon />
                      </IconButton>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box display="flex" justifyContent="flex-end" alignItems="center" sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ color: "#fff", mr:2 }}>Total: ${calculateTotal()}</Typography>
            <Link to="/checkout">
              <Button variant="contained" color="success" sx={{ paddingX: 5 }}>Checkout</Button>
            </Link>
          </Box>
        </Container>
      <Box>

        </Box>
      </Box>
    )}
    </Box>
  )
}

export default Cart;
