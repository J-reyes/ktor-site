import React from "react";
// for navigation
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

// left side logo footer
import footerAdornment from "../../assets/ktorfooterlogo.svg";
// icons
import youtube from "../../assets/youtube.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

// gets access to our Theme.js
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#0A0B0D",
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "19em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    // so that we can move the Links in the footer around regardless of the other elements
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-5.35em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.9em",
    },
  },
}));

export default function Footer(props) {
  // gives us accesses to our styles
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      {/* Content will be hidden at the medium and below breakpoints */}
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            {/* inner container to hold vertial link placement */}
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            {/* inner container to hold links, stacked top to bottom */}
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                to="/artist"
                className={classes.link}
              >
                Artist
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                to="/ajb-yungbull"
                className={classes.link}
              >
                Ajb Yungbull
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                to="/karai-banx"
                className={classes.link}
              >
                Karai-Banx
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/brand"
                className={classes.link}
              >
                Brand
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                About us
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        alt="ktor logo"
        src={footerAdornment}
      />
      {/* grid container for social media icons is ROW */}
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://twitter.com/KTOR_Global"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com/ktor_global_/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.youtube.com/channel/UCI68ieuh3AXn_LwjyppdUpQ  "
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={youtube} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
