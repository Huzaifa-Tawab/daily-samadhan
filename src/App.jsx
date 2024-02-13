import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NoPage from "./Pages/404/NoPage";
import PortalDetails from "./Pages/portalDetails/PortalDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="portal/:id" element={<PortalDetails />} />
      </Routes>
    </BrowserRouter>
  );
}