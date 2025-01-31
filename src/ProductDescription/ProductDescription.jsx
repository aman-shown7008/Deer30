import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, Container, IconButton} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import img1 from "../Images/productDesc-1.png"
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img4 from "../Images/home-4.png";
// import img2 from "../Images/home-2.png";
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
import noImageFound from "../Images/noImageFound.PNG"

const customers = [
  {
      description:"“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
      img: img4,
      name: "Jane Smith",
      title: "Freelance Designer",
  },
  {
      description:"“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
      img: img4,
      name: "Tom Williams",
      title: "Software Developer",
  },
  {
      description:"“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
      img: img4,
      name: "Michael Brown",
      title: "Online Entrepreneur",
  }
]

function ProductDescription() {
  const { id } = useParams();
  console.log(`${id}`);
  const[quantity, setQuantity] = useState(1);
  const[productDetails, setProductDetails] = useState([]);
  const[products, setProducts] = useState([]);

  useEffect(() => {
    if(id){
      axios.get(`http://44.196.64.110:9876/product/get-product-details/${id}`).then((resp) => {
        if(resp.data.success){
          setProductDetails(resp.data.product);
        }
      })
    }
  }, [id])
  
  useEffect(() => {
    fetch("http://44.196.64.110:9876/product/get-latest-product").then(res => res.json()).then(data =>{
      if(data.success){
        setProducts(data.product);
      }
    })
  }, [])

  const handleQuantityChange = (type) => {
    setQuantity(prev => (type === 'increment' ? prev + 1 : prev > 1 ? prev - 1: 1));
  }
  
  const prodDescription = {
    img: img1,
    title: "Millennium Treestands Q-230 Buck Hut Shooting House Blind and Tower Combo",
    price: "$350.00",
    description: "True North Treestands is very proud to present this first of its kind, the TNT MENTOR 2 person hang-on treestand (patent pending). This stand features our 14 oz. TNT Bracket (patent pending) hanging system and our single pin micro- position leveling stem. With a commitment to being industry leaders and innovators, we’ve delivered on our commitment with the Mentor. The stand boasts a huge 43” x 30” platform, two individually hinged Teslin seats, and backrests, and it weighs in at just 49 lbs. The TNT Mentor’s set-up is achieved using our TNT Universal “V” Bracket system. Also included with the Mentor, at a value of $49.99, is the TNT HOH (HANG-ON HOIST), to aid with the Mentor’s set-up",
    specifications: [
      "Rugged steel construction",
      "Three easy to install TNT Universal Quick Hitch 'V' Brackets (Patent Pending)",
      "Additional brackets available as accessories",
      "Heavy-duty 1.5 inch, 3000 lbs. capacity 'J' hook with keeper ratchet strap assemblies",
      "Two full-body, four-point Certified FAS (Fall-Arrest System)",
      "Camouflage padded armrests",
      "Stand Weight: 49.50 lbs",
      "1 year limited warranty",
    ]
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // const products = [
  //   {
  //     img: img2,  
  //     title: "TNT PIPE DREAM LOCK ON",
  //     price: "280.00",
  //   },
  //   {
  //     img: img2,
  //     title: "TNT PIPE DREAM LOCK ON",
  //     price: "280.00",
  //   },
  //   {
  //     img: img2,
  //     title: "TNT PIPE DREAM LOCK ON",
  //     price: "280.00",
  //   },
  // ];

  return (
    <Box>
      <Box className="prod-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Poppins", sans-serif' }}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>Products</span>
          </Typography>
        </Container>
      </Box>

      {/* Product-Description */}
      <Box sx={{ backgroundColor: "#000", color: "#fff", paddingY: 4 }}>  
        <Container maxWidth={false} className="container">
          <Box sx={{display: {xs: 'column', md:'flex'}, justifyContent: 'space-between'}}>
            <Box component="img" src={productDetails.img || noImageFound} alt={productDetails.productName} sx={{ height: {xs: "300px",md:"500px"}, width: "100%", objectFit: "contain", borderRadius: "10px" }}/>

            <Box sx={{mr: 4}}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 4, fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem'}}}>{productDetails.productName}</Typography>
              <Box sx={{display: {xs: 'column',md:'flex'}, justifyContent: 'space-between'}}>
                <Typography variant="h3" sx={{ color: "#4CAF50", my: 4, fontWeight: 'bold', mb: {xs: 2, md: 4}, fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem'} }}>${productDetails.price}</Typography>

                <Box sx={{display: 'flex', mt: 2 }}>
                  <Typography variant='h6' sx={{mr:2, mt: 4, fontFamily: '"Poppins", sans-serif' }}>Quantity</Typography>
                  <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box display="flex" sx={{ color: "#FFDD44", ml: 2 }}>
                      {[...Array(5)].map((_, i) => (i < 4 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />))}
                    </Box>
                    <Box sx={{border: '1px solid #5FEF45', borderRadius: '5px'}} className="center-content">
                      <IconButton onClick={() => handleQuantityChange('decrement')}><RemoveIcon sx={{color: '#fff'}}/></IconButton>
                      <Typography variant="h6" sx={{ fontFamily: '"Poppins", sans-serif' }}>{quantity}</Typography>
                      <IconButton onClick={() => handleQuantityChange('increment')}><AddIcon sx={{color: '#fff'}}/></IconButton>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box sx={{display: {xs:'column',md:'flex'}, gap: '2', mt: 3}}>
                <Link to="/checkout"><Button variant='contained' color='success' sx={{ flex: 1, mr: 2, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: 16}}>Buy</Button></Link>
                <Link to="/cart"><Button variant='outlined' color='success' sx={{ flex: 1, ml: {xs: 0, md:2}, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: 10.5, mt: {xs: 2, md: 0}, whiteSpace: 'nowrap' }}>Add to Cart</Button></Link>
              </Box>
            </Box>
          </Box>

          <Box sx={{mt: 5}}>
            <Typography variant="h3" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', mb: 2, fontSize: {xs: '2.5rem'}   }}>
              <GpsFixedIcon sx={{ fontSize: {xs: '2.2rem', md: '2.5rem'}, mr: 1, fontFamily: '"Poppins", sans-serif', }} /> Description
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", mb: 3, fontFamily: '"Poppins", sans-serif'  }}>{productDetails.productDescription}</Typography>

            <Typography variant='h6' sx={{fontWeight: 'bold', mb: 2, fontFamily: '"Poppins", sans-serif' }}>Specifications:</Typography>
            <Box component="ul" sx={{color: '#fff', mb: 3, ml: 3}}>
              {prodDescription.specifications.map((spec, index) =>(
                <li key={index}>{spec}</li>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className="customer-Sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4, fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem'} }}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: {xs: '2.2rem', md: '2.5rem'}}}/></span> Customers Reviews
            </Typography>

            <Slider {...settings} className="customer-reviews-slider">
                {customers.map((customer, index) => (
                <Box key={index} sx={{ padding: "30px", textAlign: "center", border: '2px solid #FFFFFF',  minHeight: '450px',height: 'auto', width: '400px', borderRadius: '10px', background: 'linear-gradient(135deg, #1c1c1c 0%, #333 100%)', mx: '2' }}>
                    <Typography variant="h6" sx={{ color: "white", fontFamily: '"Poppins", sans-serif'  }}>
                      {customer.description}
                    </Typography>
                    <Box display="flex" justifyContent="center" sx={{ color: "#FFDD44", my: 2 }}>
                        {[...Array(5)].map((_, i) => (
                            i < 4 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
                        ))}
                    </Box>
                    <Box component="img" src={customer.img} alt={customer.title} sx={{ height: "50px", width: "50px", objectFit: "cover", borderRadius: "50%", marginBottom: "10px", mx: 'auto'}}/>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", fontFamily: '"Poppins", sans-serif'  }}>
                        {customer.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "silver", fontFamily: '"Poppins", sans-serif'  }}>
                        {customer.title}
                    </Typography>
                </Box>
                ))}
            </Slider>
            
          </Box>
        </Container>
      </Box>

      {/* Latest-Products */}
      <Box className="products-sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4,  fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem'}  }}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: {xs: '2.2rem', md: '2.5rem'}}}/></span> Our Latest Products
            </Typography>

            <Slider {...settings}>
              {products.map((product, index) => (
                <Box key={index} sx={{ padding: "10px", textAlign: "center" }}>
                  <Link to={`/productdescription/${product._id}`} className="link-c">
                    <Box component="img" src={product.img || noImageFound} alt={product.productName} sx={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px", marginBottom: "10px",}}/>
                    <Box display="flex" justifyContent="center" sx={{ color: "#FFDD44", mb: 1 }}>
                        {[...Array(5)].map((_, i) => (
                            i < 4 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
                        ))}
                    </Box>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", fontFamily: '"Poppins", sans-serif'  }}>
                        {product.productName}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white", fontFamily: '"Poppins", sans-serif'  }}>
                        Regular price ${product.price}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Slider>
            
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Box onClick={onClick} sx={{ position: "absolute",  top: {xs: "42%", md: "50%"}, right: "23px"}} className="arrows">
      <KeyboardArrowRightOutlinedIcon sx={{fontSize: "3rem"}}/>
    </Box>
  );
};


const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box onClick={onClick} sx={{ position: "absolute",  top: {xs: "42%", md: "50%"}, left: "23px",}} className="arrows">
      <KeyboardArrowRightOutlinedIcon sx={{ transform: "rotate(180deg)", fontSize: "3rem" }} />
    </Box>
  );
};

export default ProductDescription;
