import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const Populars = () => {
  return (
    <Grid
      container
      sx={{
        border: "solid",
        p: 1,
        m: 2,
        display: "flex",
        justifyContent: "center",
        width: "50%",
      }}
      columnSpacing={5}
    >
      <Grid item xs={12} md={6}>
        <h3>
          popular
          <br />
          organizations
        </h3>
        <p>
          <i className="fa-brands fa-facebook"></i>
          <Link to="/users/facebook/repos"> Fackbook</Link>
        </p>
        <p>
          <i className="fa-brands fa-google"></i>
          <Link to="/users/google/repos"> Google</Link>
        </p>
        <p>
          <i className="fa-brands fa-node-js"></i>
          <Link to="/users/nodejs/repos"> Node.js</Link>
        </p>
        <p>
          <i className="fa-brands fa-python"></i>
          <Link to="/users/Python/repos"> Python</Link>
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>
          popular
          <br />
          repositories
        </h3>
        <p>
          <Link to="/users/facebook/repos/react"> React</Link>
        </p>
        <p>
          <Link to="/users/mui/repos/material-ui"> Material-UI</Link>
        </p>
        <p>
          <Link to="/users/remix-run/repos/react-router"> React-Router</Link>
        </p>
        <p>
          <Link to="/users/pallets/repos/flask"> Flask</Link>
        </p>
      </Grid>
    </Grid>
  );
};
export default Populars;
