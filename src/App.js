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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
