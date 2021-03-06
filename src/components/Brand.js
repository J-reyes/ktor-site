import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import background from "../assets/greenLineBackgroundsvg.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: "100%",

    backgroundColor: "#0A0B0D",

    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    // to cover the whole container
    backgroundSize: "cover",
    // makes sure extra space isn't filled with duplicate background image
    backgroundRepeat: "no-repeat",
    height: "60em",

    [theme.breakpoints.down("md")]: {
      height: "40em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "43.2em",
    },
  },
  textContainer: {
    width: "40rem",
    marginTop: "3rem",
    marginBottom: "14rem",
    [theme.breakpoints.down("sm")]: {
      width: "35rem",
      marginBottom: "9rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "25rem",
      marginBottom: "9rem",
    },
  },
}));

export default function Brand(props) {
  const classes = useStyles();
  // const theme = useTheme();

  // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Grid Container style={{ marginWidth: "40rem" }}>
          <Grid
            item
            container
            align="center"
            justify="center"
            className={classes.textContainer}
          >
            <Typography variant="h2" style={{ fontWeight: "700" }}>
              Coming Soon
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
