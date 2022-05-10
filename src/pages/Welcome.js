import React from "react";
import { DRAWER_WIDTH } from "../_helper/constant";
import TopNav from "../components/TopNav";
import LeftNav from "../components/LeftNav";
import { Box, Toolbar, CssBaseline } from "@mui/material";

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
          p: {sm: 0, md: 3 },
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          height: "100vh",
        }}
      >
        <Toolbar />
          <Box sx={{ height: "100%"}}>
              <img
                src={spaceXWallpaper}
                alt="spaceX"
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
          </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
