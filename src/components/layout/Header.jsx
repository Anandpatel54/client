import React from "react";
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
} from "@mui/icons-material";

const Header = () => {
  const handleMobile = () => {
    console.log("mobile");
  };
  const openSearchDialog = () => {
    console.log("openSearchDialog");
  };
  const openNewGroup = () => {
    console.log("openNewGroup");
  };
  const navigateToGroup = () => {
    console.log("navigateToGroup");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange[900], // 'orange' ko 'orange[500]' se replace karein
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat App{" "}
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <Tooltip title="Search">
              <IconButton
                color="inherit"
                size="large"
                onClick={openSearchDialog}
              >
                <SearchIcon />
              </IconButton>
              </Tooltip>

              <Tooltip title="New Group">
              <IconButton color="inherit" size="large" onClick={openNewGroup}>
                <AddIcon />
              </IconButton>
              </Tooltip>

              <Tooltip title="Manage Groups">
                <IconButton color="inherit" size="large" onClick={navigateToGroup} >
                  <GroupIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
