import React, { useContext } from "react";
import { Context } from "../..";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// ----=MUI-----
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 150 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          container
          alignItems={"center"}
          direction={"column"}
          style={{ width: 350 }}
        >
          <Box p={5}>
            <Button variant="contained" onClick={login}>
              Sign in with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
