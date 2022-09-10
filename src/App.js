import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Blogs from "./pages/Blog/Blogs";
import TC from "./pages/TC";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/CotactUs";
import Earn from "./pages/Earn";
import CustomerJourney from "./pages/CustomerJourney";
import NotFound from "./pages/NotFound";
import About from "./pages/About/About";
import Career from "./pages/Career/Career";
import HTU from "./pages/HowToUse/HTU";
import RateFees from "./pages/RateFees/RateFees";
import Refer from "./pages/Refer/Refer";
import Security from "./pages/Security";
import Help from "./pages/Help";
import FAQ from "./pages/FAQ/FAQ";
import Reviews from "./pages/Reviews/Reviews";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBarComp /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/tc" element={<TC />} />
          <Route path="/pp" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/processflow" element={<CustomerJourney />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/how-to-use" element={<HTU />} />
          <Route path="/rate-fees" element={<RateFees />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/security" element={<Security />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* <Route path="/rate-fees" element={<RateFees />} />
          <Route path="/security" element={<Security />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/help" element={<Help />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
