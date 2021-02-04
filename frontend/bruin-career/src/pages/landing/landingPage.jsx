import React from "react";

/* Adding Material UI libs */
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

/* Adding components */
import Image from "./images/bruinbackground.jpg";
import Signin from "../../components/signin/signin.component";

/* Adding Material UI styles */
var styles = {
  backgroundImage: `url(${Image})`,
  backgroundPositionX: "center",
  backgroundPositionY: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const useStyles = makeStyles((theme) => ({
  mainback: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100vh",
  },
  mainimage: {
    position: "relative",
    width: "75% !important",
    height: "100%",
    margin: "0px 5px 0px 0px",
  },
  signin: {
    position: "relative",
    width: "25%",
    margin: "10% 5px 0px 5px",
    [theme.breakpoints.down("sm")]: {
      margin: "10% 5px 0px 5px",
    },
  },
  infor: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "#c3d8f0",
    position: "absolute",
    bottom: "20%",
    right: "5%",
    left: "5%",
    padding: "10px",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.mainback}>
        <div className={classes.mainimage} style={styles}>
          <div className={classes.infor}>
            <Typography variant="h3" align="justify">
              <b>BruninCareer</b>
            </Typography>
            <Typography variant="h4" align="left">
              Take your resume to the next level
            </Typography>
          </div>
        </div>
        <div className={classes.signin}>
          <Signin />
        </div>
      </div>
    </div>
  );
};
export default Landing;
