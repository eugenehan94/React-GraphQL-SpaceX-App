import React from "react";
import { DRAWER_WIDTH } from "../_helper/constant";
import TopNav from "../components/TopNav";
import LeftNav from "../components/LeftNav";
import { Box, Toolbar, CssBaseline, Paper } from "@mui/material";

import spaceXWallpaper from "../images/spaceXWallpaper.jpg";

const Welcome = () => {
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
        {/* <Paper elevation={3} sx={{p: 2, height: "100vh"}}> */}
          <Box>
              <img
                src={spaceXWallpaper}
                alt="spaceX"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
          </Box>
        {/* </Paper> */}
      </Box>
    </Box>
  );
};

export default Welcome;
