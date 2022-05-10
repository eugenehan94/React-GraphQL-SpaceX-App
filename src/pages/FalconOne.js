import React from "react";
import TopNav from "../components/TopNav";
import LeftNav from "../components/LeftNav";
import ErrorBoundary from "../components/ErrorBoundary";
import { DRAWER_WIDTH } from "../_helper/constant";
import { Box, Toolbar, CssBaseline, Paper, Typography } from "@mui/material";

import { GetFalconOneInfo } from "../components/graphQL/FalconOne";
const FalconOne = () => {
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
          p: { sm: 1, md: 3 },
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar />
        <Paper elevation={4} sx={{ p: 3 }}>
          <ErrorBoundary>
            <GetFalconOneInfo />
          </ErrorBoundary>
        </Paper>
      </Box>
    </Box>
  );
};

export default FalconOne;
