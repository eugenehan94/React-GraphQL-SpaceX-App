import React from "react";
import { DRAWER_WIDTH } from "../_helper/constant";
import {
  Box,
  Drawer,
  Toolbar,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material/";

import RocketIcon from "@mui/icons-material/Rocket";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileOpen } from "../redux/actions/topNav";

import { Link } from "react-router-dom";

const LeftNav = (props) => {
  const { window } = props;
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { mobileOpen } = data.topNavReducer;
  const handleDrawerToggle = () => {
    dispatch(toggleMobileOpen(!mobileOpen));
  };
  const drawer = (
    <div>
      {/* <Toolbar/> */}

      <Typography sx={{ ml: "30px", p: "2px", fontSize: "40px", letterSpacing: "5px" }}>SPACE X</Typography>

      <Divider sx={{ backgroundColor: "white" }} />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <RocketIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Welcome" />
        </ListItem>
        <ListItem button component={Link} to="/companyInfo">
          <ListItemIcon>
            <RocketIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Info" />
        </ListItem>
        <ListItem button component={Link} to="/falcon1">
          <ListItemIcon>
            <RocketIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Falcon 1" />
        </ListItem>
        <ListItem button component={Link} to="/falcon9">
          <ListItemIcon>
            <RocketIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Falcon 9" />
        </ListItem>
        <ListItem button component={Link} to="/falconHeavy">
          <ListItemIcon>
            <RocketIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Falcon Heavy" />
        </ListItem>
        <ListItem button component={Link} to="/starship">
          <ListItemIcon>
            <RocketIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Starship" />
        </ListItem>
        <ListItem button component={Link} to="/dragon1">
          <ListItemIcon>
            <RocketIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dragon One" />
        </ListItem>
        <ListItem button component={Link} to="/dragon2">
          <ListItemIcon>
            <RocketIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dragon Two" />
        </ListItem>
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? < RocketIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? < RocketIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            backgroundColor: "#181C1F",
            color: "#FFFFFF",
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* https://www.schemecolor.com/spacex-website.php */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            backgroundColor: "#181C1F",
            color: "#FFFFFF",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default LeftNav;