import React, { useState, useEffect } from "react";
import { Typography, Button, Box, Container} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import img1 from "../Images/home-1.png";
import img2 from "../Images/home-2.png";
import img3 from "../Images/home-3.png";
import noImageFound from "../Images/noImageFound.PNG"
import {Link} from "react-router-dom";

const product = [
  { img: img1, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
  { img: img2, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
  { img: img3, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
  { img: img1, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
  { img: img2, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
  { img: img3, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
  { img: img1, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
  { img: img2, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
];

// const category = [
//   { img: img1, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
//   { img: img2, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
//   { img: img3, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
//   { img: img1, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
//   { img: img2, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
//   { img: img3, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
//   { img: img1, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
//   { img: img2, title: "TNT PIPE DREAM LOCK ON", price: "280.00" },
// ];


function Products() {

  const[visibleProd, setVisibleProd] = useState(6);
  const[visibleCate, setVisibleCate] = useState(6);
  const[products, setProducts] = useState([]);

    useEffect(() => {
      fetch("http://44.196.64.110:9876/product/get-all-product").then(res => res.json()).then(data =>{
        if(data.success){
          setProducts(data.product);
        }
      })
    }, [])

  const showMoreProd = () => {
    setVisibleProd((prev) => prev + 6);
  };

  const showMoreCate = () => {
    setVisibleCate((prev) => prev + 6);
  }

  return (
    <Box>
      <Box className="prod-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>Products</span>
          </Typography>
        </Container>
      </Box>

      <Box className="products-sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4, fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem', md: '3rem'}}}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: {xs: '2.2rem', md: '2.5rem'}}}/></span> Our Popular Products
            </Typography>

            <Link to="/productdescription" className="link-c">
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
              {product.slice(0, visibleProd).map((product, index) => (
                <Box key={index} sx={{ width: { xs: "100%", sm: "48%", md: "30%" }, padding: "10px 10px 20px 10px", textAlign: "center" }}>
                  <Box component="img" src={product.img} alt={product.title} sx={{ height: "400px", width: "100%", objectFit: "contain", borderRadius: "10px", marginBottom: "10px"}}/>
                  <Box display="flex" justifyContent="center" sx={{ color: "#FFDD44", mb: 1 }}>
                    {[...Array(5)].map((_, i) => ( i < 4 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />))}
                  </Box>
                  <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", borderBottom: '1px solid #000', fontFamily: '"Poppins", sans-serif'}}>{product.title}</Typography>
                  <Typography variant="body1" sx={{ color: "white", fontFamily: '"Poppins", sans-serif'}}>Regular price ${product.price}</Typography>
                </Box>
              ))}
            </Box>
            </Link>

            {visibleProd < products.length && (
              <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
                <Button variant="contained" onClick={showMoreProd} sx={{border: '2px solid #5FEF45', backgroundColor: '#000'}}>
                  Show More
                </Button>
              </Box>
            )}
            
          </Box>
        </Container>
      </Box>

      {/* All-Products */}
      <Box className="category-sec section-bottom" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4, fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem', md: '3rem'}}}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: {xs: '2.2rem', md: '2.5rem'}}}/></span> All Products
            </Typography>

            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
              {products.slice(0, visibleCate).map((prod, index) => (
                <Box key={index} sx={{ width: { xs: "100%", sm: "48%", md: "30%" }, padding: "10px 10px 20px 10px", textAlign: "center" }}>
                 <Link to={`/productdescription/${prod._id}`} className="link-c">
                  <Box component="img" src={prod.img || noImageFound} alt={prod.productName} sx={{ height: "300px", width: "100%", objectFit: "contain", borderRadius: "10px", marginBottom: "10px"}}/>
                  <Box display="flex" justifyContent="center" sx={{ color: "#FFDD44", mb: 1 }}>
                    {[...Array(5)].map((_, i) => ( i < 3 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />))}
                  </Box>
                  <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", fontFamily: '"Poppins", sans-serif'}}>{prod.productName}</Typography>
                  <Typography variant="body6" sx={{ color: "white", fontFamily: '"Poppins", sans-serif'}}>Regular price ${prod.price}</Typography>
                 </Link>
                </Box>
              ))}
            </Box>

            {visibleCate < products.length && (
              <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
                <Button variant="contained" onClick={showMoreCate} sx={{border: '2px solid #5FEF45', backgroundColor: '#000'}}>
                  Show More
                </Button>
              </Box>
            )}
            
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Products;
