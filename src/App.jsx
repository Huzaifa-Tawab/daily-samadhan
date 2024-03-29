import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NoPage from "./Pages/404/NoPage";
import PortalDetails from "./Pages/portalDetails/PortalDetails";
import Navbar from "../src/Components/Navbar/Navbar";
import Whatwedo from "./Components/whatwedo/Whatwedo";
import Corusal from "./Components/swipecarousal/Corusal";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Whatweoffer from "./Components/whatweoffer/Whatweoffer";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contactform/Contact";

export default function App() {
  return (
    <>
      {/* <Navbar/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="portal/:id" element={<PortalDetails />} />
          {/* <Route path="navbar" element={<Navbar />} /> */}
          <Route path="whatwedo" element={<Whatwedo />} />
          <Route path="swipper" element={<Corusal />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="offer" element={<Whatweoffer />} />
          <Route path="footer" element={<Footer />} />
          <Route path="form" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
