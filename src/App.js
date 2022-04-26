import React from "react";
import WelcomePage from "./pages/Welcome";
import CompanyInfoPage from "./pages/CompanyInfo"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/companyInfo" element={<CompanyInfoPage/>}/>
    </Routes>
  );
};

export default App;
