import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const styles = (theme) => ({
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
});

function MenuHeader(props) {
  const { classes } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography className={classes.title}>
            <Link exact to="/">
              <HomeWorkIcon />
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link exact to="/posts">
              Posts
            </Link>
          </Typography>
          <Link exact to="/login">
            <Button color="inherit">{props.logName}</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Button
        className={classes.createButton}
        color="primary"
        variant="contained"
      >
        <Link to="/posts">Create Post</Link>
      </Button>
    </> 
  );
}

export default withStyles(styles)(MenuHeader);
