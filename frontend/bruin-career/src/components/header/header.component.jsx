import React from "react";

/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
/* logo image */
import logo from "./images/logobruin.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

/* Main here */
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar className={classes.header}>
          <Link to="/">
            <IconButton>
              <Avatar alt="bruincareer" src={logo} className={classes.large} />
            </IconButton>
          </Link>
          <Link to="/register">
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Link>
          <Link to="/onboarding1">
            <Button variant="contained" color="primary">
              onboarding1
            </Button>
          </Link>
          <Link to="/onboarding2">
            <Button variant="contained" color="primary">
              onboarding2
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="contained" color="primary">
              Portfolio
            </Button>
          </Link>
          <Link to="/project">
            <Button variant="contained" color="primary">
              Project
            </Button>
          </Link>
          <Link to="/home">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
