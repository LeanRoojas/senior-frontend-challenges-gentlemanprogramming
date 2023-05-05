import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
