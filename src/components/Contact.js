import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    // to cover the whole container
    backgroundSize: "cover",
    // makes sure extra space isn't filled with duplicate background image
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="row">
      {/* will take up 3 columns worth of space if its at a large screen size */}
      {/* main axis is vertical -- column = vertial main axis */}
      Contact
    </Grid>
  );
}
