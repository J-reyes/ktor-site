import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ajbLogo from "../assets/ajbLogo.svg";
import banxLogo from "../assets/karaibanxLogo.svg";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: "100%",
    height: "50rem",
    backgroundColor: "#0A0B0D",
    [theme.breakpoints.down("lg")]: {
      height: "43rem",
    },
    [theme.breakpoints.down("md")]: {
      height: "39rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "39rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "43.5rem",
    },
  },
  artistLogoContrainer: {
    marginBottom: "5.5rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "4.1rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4rem",
      direction: "column"
    },
  },
  ajbLogo: {
    width: "150px",
    height: "150px",
    marginTop: "4rem",
    [theme.breakpoints.down("sm")]: {
      width: "142px",
      height: "135px",
    },
  },
  banxLogo: {
    width: "350px",
    height: "350px",
    marginBottom: "-120px",
    [theme.breakpoints.down("md")]: {
      width: "340px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "260px",
      height: "324px",
    },
  },
}));

export default function Artists(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      justify="center"
    >
      <Grid
        item
        container
        direction={matchesXS ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
        className={classes.artistLogoContrainer}
      >
        <Grid item justify="center" direction="column">
          <Grid
            item
            container
            className={classes.ajbLogo}
          >
            <img src={ajbLogo} alt="ajbb" />
          </Grid>
          <Grid item container alignItems="center" justify="center">
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h3"
              gutterBottom
              component={Link}
              to="/ajb-yungbull"
              style={{
                textDecoration: "none",
                paddingTop: "1.2rem",
                marginBottom: "16px",
                fontSize: "1.25rem",
              }}
            >
              View Artist
            </Typography>
          </Grid>
        </Grid>
        <Grid item justify="center" direction="column">
          <Grid item container className={classes.banxLogo}>
            <img src={banxLogo} alt="quil pen sitting on top of book" />
          </Grid>
          <Grid item container alignItems="center" justify="center">
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h3"
              gutterBottom
              component={Link}
              to="/karai-banx"
              style={{ textDecoration: "none", fontSize: "1.25rem" }}
            >
              View Artist
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
