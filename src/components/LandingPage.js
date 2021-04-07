import React from "react";
// import Lottie from 'react-lottie';
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

// media query
import useMediaQuery from "@material-ui/core/useMediaQuery";
import background from "../assets/ktorlandingpagebackground.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "3em",
    width: "100%",
    backgroundColor: "#0A0B0D",
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "37em",
      marginTop: "1em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    // to cover the whole container
    backgroundSize: "cover",
    // makes sure extra space isn't filled with duplicate background image
    backgroundRepeat: "no-repeat",
    height: "65em",
    [theme.breakpoints.down("xl")]: {
      backgroundImage: `url(${background})`,
      height: "53em",
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${background})`,
      height: "40em",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${background})`,
      height: "30em",
    },
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    // Grid that will hold all of the content for the home page
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? "center" : undefined}
        className={classes.background}
        alignItems="center"
      ></Grid>
    </Grid>
  );
}
