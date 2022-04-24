import React from "react";

import {Box, Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText} from "@mui/material/"
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { useSelector, useDispatch } from "react-redux";
import { toggleMobileOpen } from "../redux/actions/topNav";
const drawerWidth = 240;

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
          <Toolbar />
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    const container =
    window !== undefined ? () => window().document.body : undefined;
    return(
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
              width: drawerWidth,
            },
          }}
        >
          {drawer}hello
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}dsfjadfjaldfl
        </Drawer>
      </Box>
    )
}

export default LeftNav;