import React from "react";
import TopNav from "../components/TopNav";
import LeftNav from "../components/LeftNav";
import { DRAWER_WIDTH } from "../_helper/constant";
import { Box, Toolbar, CssBaseline, Paper, Typography } from "@mui/material";

const CompanyInfo = () => {
  return (
    <Box>
      <CssBaseline />
      <TopNav />
      <LeftNav />
      <Box
        component="main"
        sx={{
          height: "100%",
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default CompanyInfo;
