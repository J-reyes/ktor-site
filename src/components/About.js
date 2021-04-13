import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import background from '../assets/greenLineBackgroundsvg.svg'

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
      backgroundImage: `url(${background})`,
    },
  },
}));

export default function About(props) {
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
            justify="center"
            className={classes.rowContainer}
            style={{ marginTop: "1rem", marginBottom: "6rem" }}
          >
            <Typography variant="h3" align="center">
              About Us
            </Typography>
          </Grid>
          <Grid item container style={{ width: "40rem", marginTop: "3rem" , marginBottom: '14rem'}}>
            <Typography
              variant="h3"
              align="center"
              style={{
                marginBottom: "1rem",
                fontSize: "2.25rem",
                color: "rgb(60, 57, 152)",
              }}
            >
              KTOR Movement
            </Typography>
            <Typography
              variant="h4"
              align="left"
              style={{ fontSize: "1.2rem", lineHeight: "2", fontWeight: "700" }}
            >
              The kill Them Off Records is a positive movement of expression
              through music, photography, and fashion. While promoting artist
              under the label, our Artist, are free to their artistic creativity
              and also own 100% of their music. We have made an addition to
              launch our clothing branch in addition to expand our creativeness.
              We plan for growth, as we grow as one together.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
