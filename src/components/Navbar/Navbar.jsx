import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../..";
// ----=MUI-----
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React-Chat
            </Typography>
            {user ? (
              <Button
                color="inherit"
                sx={{ ml: 1 }}
                onClick={() => auth.signOut()}
              >
                Logout
              </Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button color="inherit">Hello!</Button>
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
