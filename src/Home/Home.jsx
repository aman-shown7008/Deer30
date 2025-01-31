import React, {useState, useEffect} from "react";
import { Typography, Button, Box, Container} from "@mui/material";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Slider from "react-slick";
import noImageFound from "../Images/noImageFound.PNG"
import img4 from "../Images/home-4.png";
import img5 from "../Images/home-5.png";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { Link } from "react-router-dom";

// const products = [
//     {
//       img: img1,  
//       title: "TNT PIPE DREAM LOCK ON",
//       price: "280.00",
//     },
//     {
//       img: img2,
//       title: "TNT PIPE DREAM LOCK ON",
//       price: "280.00",
//     },
//     {
//       img: img3,
//       title: "TNT PIPE DREAM LOCK ON",
//       price: "280.00",
//     },
// ];

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

const blogs = [
    {
        img: img5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img1: img4,
        name: "Andy Claremont",
        date: "22 Nov 2023"
    },
    {
        img: img5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img1: img4,
        name: "Andy Claremont",
        date: "22 Nov 2023"
    },
    {
        img: img5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img1: img4,
        name: "Andy Claremont",
        date: "22 Nov 2023"
    }
]

function Home() {
  const[products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://44.196.64.110:9876/product/get-latest-product").then(res => res.json()).then(data =>{
      if(data.success){
        setProducts(data.product);
      }
    })
  }, [])
      
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
  const user = sessionStorage.getItem("User");
  const token = sessionStorage.getItem("Token");
  
  return (
    <Box>
     <Box className="home-sec">
      <Container maxWidth={false} className='container'>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" gutterBottom sx={{fontSize: {xs: '2.8rem', md: '4rem'}, fontWeight: 'bold', paddingTop: {xs: '100px'}, fontFamily: '"Poppins", sans-serif'}}>
            Explore, Book, Conquer
          </Typography>
          <Typography variant="h5" gutterBottom sx={{fontFamily: '"Poppins", sans-serif', fontSize: {xs: '1.3rem', md: '1.5rem'}}}>
            Discover premium <span style={{fontWeight: 'bolder'}}>hunting resources</span> and <span style={{fontWeight: 'bolder'}}>top-notch gear</span> effortlessly.
            Your next adventure is just a few clicks away!
          </Typography>
          <Link to="/products">
            <Button variant="contained"  sx={{ margin: '20px 20px 0 0', color: '#000', backgroundColor: '#fff', padding: {xs: '5px 35px', md:'8px 40px'}, fontSize: {xs: '1.4rem', md:'1.6rem'}, fontWeight: 'bold', borderRadius: '10px', textTransform: 'initial' }}>
              Book Now!
            </Button>
          </Link>
          {(user === "vendor" && token) ? (
          <Link to="/personalinfo">
            <Button variant="outlined" color="secondary" sx={{ margin: '20px 20px 0 0', color: '#fff', backgroundColor: 'none', border: 'none', fontSize: {xs: '1.4rem', md:'1.6rem'},  fontWeight: 'bold', textTransform: 'initial'}}>
              Go To Dashboard <KeyboardArrowRightOutlinedIcon sx={{fontSize: {xs: '2.2rem', md: '2.5rem'}}}/>
            </Button>
          </Link>
          ) : (
          <Link to="/enquiryform">
            <Button variant="outlined" color="secondary" sx={{ margin: '20px 20px 0 0', color: '#fff', backgroundColor: 'none', border: 'none', fontSize: {xs: '1.4rem', md:'1.6rem'},  fontWeight: 'bold', textTransform: 'initial'}}>
              Dealers Inquiry <KeyboardArrowRightOutlinedIcon sx={{fontSize: {xs: '2.2rem', md: '2.5rem'}}}/>
            </Button>
          </Link>
          )}
          <Box>

          </Box>
        </Box>
        <Box sx={{display: 'flex', marginTop: {xs: '10px', md: '40px'}, pb: {xs: '80px'}}} className="home-icons">
            <Box className="fav-i" sx={{marginRight:'20px'}}>
                <Box><HttpsOutlinedIcon sx={{color: '#77F044', marginRight: '10px', fontSize: '1.9rem'}}/></Box>
                <Typography sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>Protected <br/>Payment Gateway</Typography>
            </Box>
            <Box className="fav-i" sx={{marginRight:'20px'}}>
                <Box><FavoriteBorderOutlinedIcon sx={{color: '#77F044', marginRight: '10px', fontSize: '1.9rem'}}/></Box>
                <Typography sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>Easy <br/>to Use Platform</Typography>
            </Box>
            <Box className="fav-i">
                <Box><SpeedIcon sx={{color: '#77F044', marginRight: '10px', fontSize: '1.9rem'}}/></Box>
                <Typography sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>Fast <br/>Bank Transfers</Typography>
            </Box>
        </Box>
      </Container>
     </Box>

     {/* Latest-Product */}
     <Box className="products-sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4, fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem', md: '3rem'}}}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: {xs: '2.2rem', md: '2.5rem'}}}/></span> Our Latest Products
            </Typography>
            
            <Slider {...settings}>
              {products.map((product, index) => (
                <Box key={index} sx={{ padding: "10px", textAlign: "center" }}>
                  <Link to={`/productdescription/${product._id}`} className="link-c">
                    <Box component="img" src={product.img || noImageFound} alt={product.productName} sx={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px", marginBottom: "10px",}}/>
                    <Box display="flex" justifyContent="center" sx={{ color: "#FFDD44", mb: 1 }}>
                        {[...Array(5)].map((_, i) => (
                            i < 2 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
                        ))}
                    </Box>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", fontFamily: '"Poppins", sans-serif' }}>
                        {product.productName}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white", fontFamily: '"Poppins", sans-serif' }}>
                        Regular price ${product.price}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
     </Box>

     {/* Customer-Sec */}
     <Box className="customer-Sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4, fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem', md: '3rem'} }}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: {xs: '2.2rem', md: '2.5rem'}}}/></span> Customers Reviews
            </Typography>

            <Slider {...settings} className="customer-reviews-slider">
                {customers.map((customer, index) => (
                <Box key={index} sx={{ padding: "30px", textAlign: "center", border: '2px solid #FFFFFF', minHeight: '450px',height: 'auto', width: '400px', borderRadius: '10px', background: 'linear-gradient(135deg, #1c1c1c 0%, #333 100%)', mx: '2' }}>
                    <Typography variant="h6" sx={{ color: "white",  fontFamily: '"Poppins", sans-serif'  }}>
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

     {/* Blog-Sec */}
     <Box className="blog-sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4, fontFamily: '"Poppins", sans-serif', fontSize: {xs: '2.5rem', md: '3rem'} }}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: {xs: '2.2rem', md: '2.5rem'}}}/></span> Latest Blogs
            </Typography>

            <Slider {...settings}>
                {blogs.map((blog, index) => (
                <Box key={index} sx={{ padding: "10px", textAlign: "left" }}>
                    <Box component="img" src={blog.img} alt={blog.title} sx={{ height: "200px", width: "100%", borderRadius: "10px", marginBottom: "10px",}}/>
                    <Typography variant="h6" sx={{ color: "#F3B2D5", backgroundColor: '#381E2C', height: '40px', width: '100%', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0',  fontFamily: '"Poppins", sans-serif' }}>News</Typography>
                    <Typography variant="h5" sx={{ color: "white", fontWeight: '600', margin: '20px 0', fontFamily: '"Poppins", sans-serif'  }}>Tagline</Typography>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "400",  fontFamily: '"Poppins", sans-serif'  }}>
                        {blog.description}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white", display: "flex", alignItems: "center", mt: 2, fontFamily: '"Poppins", sans-serif'  }}>
                        <Box component="img" src={blog.img1} alt={blog.title} sx={{ height: "30px", width: "30px", objectFit: "cover", borderRadius: "10px", marginRight: "10px"}}/>
                        {blog.name} <span style={{color: '#96969E', marginLeft: '10px'}}>{blog.date}</span>
                    </Typography>
                </Box>
                ))}
            </Slider>
            
          </Box>
        </Container>
     </Box>
    </Box>
  );
}


const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <Box onClick={onClick} sx={{ position: "absolute", top: {xs: "42%", md: "50%"}, right: "23px"}} className="arrows">
        <KeyboardArrowRightOutlinedIcon sx={{fontSize: "3rem"}}/>
      </Box>
    );
};
  

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box onClick={onClick} sx={{ position: "absolute", top: {xs: "42%", md: "50%"}, left: "23px",}} className="arrows">
        <KeyboardArrowRightOutlinedIcon sx={{ transform: "rotate(180deg)", fontSize: "3rem" }} />
      </Box>
    );
};

export default Home;
