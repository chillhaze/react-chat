import React from "react";
// ----=MUI-----
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 150 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
