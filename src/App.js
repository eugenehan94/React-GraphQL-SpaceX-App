import React from "react";
import WelcomePage from "./pages/Welcome";
import CompanyInfoPage from "./pages/CompanyInfo";
import FalconOne from "./pages/FalconOne";
import FalconNine from "./pages/FalconNine";
import FalconHeavy from "./pages/FalconHeavy";
import Starship from "./pages/Starship";
import DragonOne from "./pages/DragonOne";
import DragonTwo from "./pages/DragonTwo";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/companyInfo" element={<CompanyInfoPage/>}/>
      <Route path="/falcon1" element ={<FalconOne/>}/>
      <Route path="/falcon9" element={<FalconNine/>}/>
      <Route path="/falconHeavy" element={<FalconHeavy/>}/>
      <Route path="/starship" element={<Starship/>}/>
      <Route path="/dragon1" element={<DragonOne/>}/>
      <Route path="/dragon2" element={<DragonTwo/>}/>
    </Routes>
  );
};

export default App;
