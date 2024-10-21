import { useState } from "react";
import Paper from "./Paper";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import MenuIcon from "/MenuIcon.svg";
import MarginBox from "./MarginedBox";
import { NavLink } from "react-router-dom";
import OutlinedButton from "./OutlinedButton";
import LogoAndName from "./LogoAndName";
import Button from "./Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";

// Navigation links
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Properties",
    path: "/properties",
  },
  {
    name: "Services",
    path: "/services",
  },
];

// List of links for desktop view
const ListLinks = () => {
  return (
    <>
      {links.map(link => (
        <NavLink to={link.path} key={link.path}>
          {({ isActive }) => (
            <Typography
              variant="body1"
              sx={theme => ({
                backgroundColor: isActive
                  ? theme.palette.background.default
                  : theme.palette.background.paper,
                color: theme.palette.text.primary,
                textDecoration: "none",
                padding: "14px 24px",
                borderRadius: "10px",
              })}
            >
              {link.name}
            </Typography>
          )}
        </NavLink>
      ))}
    </>
  );
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer

  // Toggle drawer state
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // List of links for the drawer (mobile view)
  const DrawerList = (
    <Stack
      justifyContent={"space-between"}
      sx={{ height: "100%", width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {links.map(link => (
          <ListItem key={link.path} disablePadding>
            <NavLink to={link.path} style={{ width: "100%" }}>
              <ListItemButton>
                <Typography variant="body1" color="textPrimary">
                  {link.name}
                </Typography>
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <NavLink to="/contact-us">
        <ListItemButton>
          <OutlinedButton variant="outlined" sx={{ width: "100%" }}>
            Contact Us
          </OutlinedButton>
        </ListItemButton>
      </NavLink>
    </Stack>
  );

  return (
    <Paper
      sx={{
        borderRadius: 0,
        paddingBlock: "20px",
      }}
    >
      <MarginBox>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <LogoAndName />
          {/* Desktop Links */}
          <Stack
            direction="row"
            gap={"10px"}
            sx={{ display: { mobile: "none", laptop: "flex" } }}
          >
            <ListLinks />
          </Stack>

          {/* Contact Us Button for desktop */}
          <NavLink to="/contact-us">
            {({ isActive }) =>
              isActive ? (
                <Button sx={{ display: { mobile: "none", laptop: "block" } }}>
                  Contact Us
                </Button>
              ) : (
                <OutlinedButton
                  variant="outlined"
                  sx={{ display: { mobile: "none", laptop: "block" } }}
                >
                  Contact Us
                </OutlinedButton>
              )
            }
          </NavLink>

          {/* Menu Icon for mobile */}
          <Box
            sx={{
              display: {
                mobile: "flex",
                laptop: "none",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={toggleDrawer(true)}>
              <img src={MenuIcon} alt="menu" />
            </IconButton>
          </Box>
        </Stack>
      </MarginBox>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ height: "100%", backgroundImage: "none" }}
      >
        {DrawerList}
      </Drawer>
    </Paper>
  );
};

export default Navbar;
