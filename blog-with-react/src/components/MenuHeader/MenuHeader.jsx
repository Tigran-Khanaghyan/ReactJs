import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    margin: 10,
    color: "white",
  },
  linkIcon: {
    padding: 5,
  },
  createButton: {
    margin: 5,
  },
}));

export default function MenuHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography className={classes.title}>
            <Link
              className={classes.linkIcon}
              href="#"
              variant="h6"
              color="inherit"
            >
              <HomeWorkIcon />
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="#" variant="h6" color="inherit">
              Posts
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Button
        className={classes.createButton}
        color="primary"
        variant="contained"
      >
        Create Post
      </Button>
    </div>
  );
}
