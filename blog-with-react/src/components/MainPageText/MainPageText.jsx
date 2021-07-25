import React from "react";
import { Typography } from "@material-ui/core";
// import Link from "@material-ui/core/Link";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function MainPageText() {
  return (
    <>
      <Typography variant="h3" align="center">
        There is no post in website
      </Typography>
      <Typography variant="h3" align="center">
        <Link to="/login">Log in</Link>
        and create posts.
      </Typography>
    </>
  );
}
