import React from "react";
import {DRAWER_WIDTH} from "../_helper/constant";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {useSelector, useDispatch} from "react-redux";
import { toggleMobileOpen } from "../redux/actions/topNav";


const TopNav = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch();
  const {mobileOpen} = data.topNavReducer;
  //NOTE: repeats in App.js - state has to be passed upwards to set state to open drawer in mobile
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    // setMobileOpen(!mobileOpen);
    dispatch(toggleMobileOpen(!mobileOpen));
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
