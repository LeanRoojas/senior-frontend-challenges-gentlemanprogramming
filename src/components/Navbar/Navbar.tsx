import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog, FavoriteTable, dialogOpenSubject$ } from "..";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

  useSelector((store: AppStore) => store.favorites);


  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }

  return (
    <>
      <CustomDialog>
        <FavoriteTable/>
      </CustomDialog>

      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gentleman Programming
          </Typography>

          <Button 
            variant="contained" 
            color="success"
            onClick={handleClick}
          >
          Open Favorites
          </Button>

        </Toolbar>
      </AppBar>
    </>
  )
};

export default Navbar;
