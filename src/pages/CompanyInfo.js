import React from "react";
import TopNav from "../components/TopNav";
import LeftNav from "../components/LeftNav";
import { DRAWER_WIDTH } from "../_helper/constant";
import { Box, Toolbar, CssBaseline, Paper, Typography } from "@mui/material";

import { GetChiefs } from "../components/graphQL/Chiefs";
import { GetCompanyInfo } from "../components/graphQL/CompInfo";
const CompanyInfo = () => {
  return (
    <Box sx={{ display: "flex" }}>
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
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography>Company Info</Typography>
          <Typography>Chiefs</Typography>
          <GetChiefs />
          <Typography>Info</Typography>
          <GetCompanyInfo/>
        </Paper>
      </Box>
    </Box>
  );
};

export default CompanyInfo;
