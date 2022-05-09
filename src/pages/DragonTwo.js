import React from "react";
import TopNav from "../components/TopNav";
import LeftNav from "../components/LeftNav";
import { DRAWER_WIDTH } from "../_helper/constant";
import { Box, Toolbar, CssBaseline, Paper} from "@mui/material";

import { GetDragonTwoInfo } from "../components/graphQL/DragonTwo";
const DragonTwo = () => {
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
        <Paper elevation={4} sx={{ p: 3 }}>
          <GetDragonTwoInfo/>
        </Paper>
      </Box>
    </Box>
  );
};

export default DragonTwo;