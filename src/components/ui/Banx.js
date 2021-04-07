import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import karaiBanxLogo from "../../assets/karaibanxLogo.svg";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import spotify from "../../assets/spotify.svg";
import youtube from "../../assets/youtube.svg";
import apple from "../../assets/apple-music.svg";
import banxBioPic from "../../assets/banxBioPic.jpeg";

import ArtistVideoPage from '../../artist/artist.video.page';

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
    backgroundImage: `url(${karaiBanxLogo})`,
    backgroundPosition: "center",
    // to cover the whole container
    backgroundSize: "cover",
    // makes sure extra space isn't filled with duplicate background image
    backgroundRepeat: "no-repeat",
    height: "50em",

    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${karaiBanxLogo})`,
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
    width: "24em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
    },
  },
}));

export default function Banx(props) {
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
              to="/ajb-yungbull"
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
            <img
              src={karaiBanxLogo}
              alt="ajb logo"
              className={classes.background}
            />
          </Grid>
        </Grid>
        {/* Hides the arrow */}
        <Hidden mdDown>
          {/* contains an icon button, wrapping an image OUR OTHER ARROW*/}
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/brand"
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
        style={{ marginTop: "3em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          component={"a"}
          href="https://open.spotify.com/artist/1yztRpKZ4QgiQDZhcQhbGY"
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
          href="https://music.apple.com/us/artist/karai-banx/1488240314"
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
          href="https://www.youtube.com/channel/UCxZCxJEL09lOZ1W5IwRm44A"
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
                alt="Banx Bio"
                src={banxBioPic}
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
                style={{ lineHeight: "2" }}
              >
                Born and raised in Westminster California, Karai Banx is
                experienced in many different genres. He has various avenues of
                music that he's dispalyed work in and continues to grow as an
                artist. At the age of 17, Karai Banx began writing to express
                his feelings and thoughts, and since then has used writing as
                away to deal with struggles in his life. Karai Banx has a unique
                sound and wants to share it with the world. He is looking to take
                his opportunities to the next level, while always staying motivated
                to unify withh his supporters.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "left"}
                style={{ lineHeight: "2" }}
              >
                Karai Banx has been working tirelessly to better his craft and
                plans to release new and improved music at least once every
                month. He knows that his supporters have his back and he has theirs,
                so keep a look out for Karai Banx!
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
        style={{ marginBottom: "8em", marginTop: "10em" }}
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
      <ArtistVideoPage />
    </Grid>
  );
}