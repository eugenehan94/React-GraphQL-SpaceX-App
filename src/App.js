import React from "react";
import WelcomePage from "./pages/Welcome";
import CompanyInfoPage from "./pages/CompanyInfo";
import FalconOne from "./pages/FalconOne";
import FalconNine from "./pages/FalconNine";
import FalconHeavy from "./pages/FalconHeavy";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/companyInfo" element={<CompanyInfoPage/>}/>
      <Route path="/falcon1" element ={<FalconOne/>}/>
      <Route path="/falcon9" element={<FalconNine/>}/>
      <Route path="/falconHeavy" element={<FalconHeavy/>}/>
    </Routes>
  );
};

export default App;
