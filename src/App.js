import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavigationUser from "./Auth/NavigationUser/NavigationUser";
import Login from "./Auth/Login/Login";
import OTP from "./Auth/OTP/OTP";
import ResetPassword from "./Auth/ResetPassword/ResetPassword";
import ChangePassword from "./Auth/ChangePassword/ChangePassword";
import SignUp from "./Auth/SignUp/SignUp";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import PersonalInfo from "./Profile/PersonalInfo/PersonalInfo";
import MyOrders from "./Profile/MyOrders/MyOrders";
import Products from "./Products/Products";
import ProductDescription from "./ProductDescription/ProductDescription";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import PaymentMessage from "./PaymentMessage/PaymentMessage";
import OrderTracking from "./OrderTracking/OrderTracking";
import Service from "./Service/Service";
import Dealers from "./Dealers/Dealers";
import EnquiryForm from "./EnquiryForm/EnquiryForm";
import Approval from "./Approval/Approval";
import AboutUs from "./AboutUs/AboutUs";
import FAQ from "./FAQ/FAQ";
import ContactUs from "./ContactUs/ContactUs";
import ManageAddress from "./Profile/ManageAddress/ManageAddress";
import AddAddress from "./Profile/AddAddress/AddAddress";
import FillAddress from "./Profile/FillAddress/FillAddress";
import SavedCards from "./Profile/SavedCards/SavedCards";
import Notifications from "./Profile/Notifications/Notifications";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function AppContent() {
  const location = useLocation();
  const noFooterPath = ["/login", "/signup", "/otp", "/resetpassword", "/changepassword", "/navigationuser"];
  const noNavbarPath = ["/login", "/signup", "/otp", "/resetpassword", "/changepassword", "/navigationuser"];

  return (
    <div className="App">
      {!noNavbarPath.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/navigationuser" element={<NavigationUser />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdescription/:id" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymentmessage" element={<PaymentMessage />} />
        <Route path="/ordertracking" element={<OrderTracking />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/dealers" element={<Dealers/>} />
        <Route path="/enquiryform" element={<EnquiryForm/>} />
        <Route path="/approval" element={<Approval/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/manageaddress" element={<ManageAddress/>} />
        <Route path="/addaddress" element={<AddAddress/>} />
        <Route path="/fulladdress" element={<FillAddress/>} />
        <Route path="/savedcards" element={<SavedCards/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      {!noFooterPath.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <AppContent />
    </Router>
  );
}

export default App;
