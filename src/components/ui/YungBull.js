import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import ajbLogo from "../../assets/ajbLogo.svg";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import spotify from "../../assets/spotify.svg";
import youtube from "../../assets/youtube.svg";
import apple from "../../assets/apple-music.svg";
import ajbBioPic from "../../assets/ajbBioPic.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "1em",
    width: "100%",
    backgroundColor: "#0A0B0D",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  background: {
    backgroundImage: `url(${ajbLogo})`,
    backgroundPosition: "center",
    // to cover the whole container
    backgroundSize: "cover",
    // makes sure extra space isn't filled with duplicate background image
    backgroundRepeat: "no-repeat",
    height: "45em",

    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${ajbLogo})`,
    },
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
    },
  },
  bioPic: {
    height: "29em",
    width: "26em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
    },
  },
}));

export default function YungBull(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* Contains all of our page content */}
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        {/* Hides our arrow */}
        <Hidden mdDown>
          {/* Contains our navigation arrows */}
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to service Page" />
            </IconButton>
          </Grid>
        </Hidden>

        {/* Contains our heading text paragraphs */}
        <Grid
          item
          container
          direction="column"
          className={classes.heading}
          style={{ maxWidth: "90%", alignItems: "center" }}
        >
          <Grid item justify="center">
            <img src={ajbLogo} alt="ajb logo" className={classes.background} />
          </Grid>
        </Grid>
        {/* Hides the arrow */}
        <Hidden mdDown>
          {/* contains an icon button, wrapping an image OUR OTHER ARROW*/}
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src={forwardArrow}
                alt="Forward to IOS/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/* contains all of our icons */}
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          component={"a"}
          href="http://www.spotify.com"
          rel="noopener noreferrer"
          target="_blank"
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <img alt="instagram logo" src={spotify} className={classes.icon} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          component={"a"}
          href="http://www.apple.com"
          rel="noopener noreferrer"
          target="_blank"
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <img alt="instagram logo" src={apple} className={classes.icon} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          component={"a"}
          href="http://www.youtube.com"
          rel="noopener noreferrer"
          target="_blank"
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <img alt="instagram logo" src={youtube} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      {/* Digital documents and data section */}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item align="center">
              <img
                alt="Ajb yungbull bio picture"
                src={ajbBioPic}
                className={classes.bioPic}
              />
            </Grid>
          </Grid>
          <Grid item md></Grid>
        </Grid>
        {/* SCALE section -- HAVE md prop to share space uptil medium resolution than it will no longer have md */}
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "left"}>
                Bio
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                Born and raised in Santa Ana, California. AJB YungBull has
                always been a big dreamer. He setsgoals and aims for them
                precisely. One thing is certain that's that his love for music
                has never dwindled. In fact, as as he's grown, his love for
                music has grown with him. AJB was just 19 when he first got his
                hands on a microphone and since then has never looked back. The
                Bull says that the first rap he ever wrote was in the third
                grade. He grew up listening to all genres of music but
                especially Hip-Hop, Funk, Classics, and Oldies.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                I asked AJB YungBullwhy he made music and he casually replied
                "The reason why I make music is to share my story and to
                enlighten others about Santa Ana and what we go through. Not
                only that, but I also create music to be an outlet for people,
                that way they can block out their negative and enjoy the
                positive things that I talk about". As you can see, AJB has a
                great mindset and wants to remain connected with his city. Bull
                has many goals to hit and he would be glad if you joined along
                on his journey.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Video Section*/}
      <Grid
        item
        container
        direction="row"
        style={{ marginBottom: "10em", marginTop: "10em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Videography
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*Video CONTAINER*/}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        styler={{ marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Filler
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Filler Item
              </Typography>
             
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "center"}>
                Filler Item
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "center"}
              >
                Filler Item
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Filler Item
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Filler Item
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
