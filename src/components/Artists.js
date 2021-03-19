import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ajbLogo from "../assets/ajbLogo.svg";
import banxLogo from "../assets/karaibanxLogo.svg";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withWidth } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: "100%",
    height: "50rem",
    backgroundColor: "#0A0B0D",
  },
}));

export default function Artists(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      justify='center'
    >
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
        style={{marginBottom: '5.5rem'}}
      >
        <Grid item justify='center' direction="column">
          <Grid item container style={{ width: "150px", height: "150px", marginTop: '4rem' }}>
            <img src={ajbLogo} alt="quil pen sitting on top of book" />
          </Grid>
          <Grid item container alignItems='center' justify='center'>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h3"
              gutterBottom
              component={Link}
              to="/ajb-yungbull"
              style={{ textDecoration: "none", paddingTop: '1.2rem', marginBottom: '16px' }}
            >
              View Artist
            </Typography>
          </Grid>
        </Grid>
        <Grid item justify='center' direction="column">
          <Grid item container style={{ width: "350px", height: "350px", marginBottom: "-120px" }}>
            <img src={banxLogo} alt="quil pen sitting on top of book" />
          </Grid>
          <Grid item container alignItems='center' justify='center'>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h3"
              gutterBottom
              component={Link}
              to="/karai-banx"
              style={{ textDecoration: "none" }}
            >
              View Artist
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
