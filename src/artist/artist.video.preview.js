import React from "react";

import Grid from "@material-ui/core/Grid";
import ARTIST_DATA from "../artist/artist.data";
import YouTube from "react-youtube";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

class ArtistVideoPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: ARTIST_DATA,
    };
  }

  render() {
    const { videos } = this.state;

    return (
      <Grid item container direction="row">
        {videos.map(({ id, ...videos }) => {
          return <ArtistVideos key={id} {...videos} />;
        })}
      </Grid>
    );
  }
}

const ArtistVideos = ({ videos }) => {
  const useStyles = makeStyles((theme) => ({
    
    rowContainer: {
      paddingLeft: "5em",
      paddingRight: "5em",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
      },
    },
    
  }));

  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const opts = {
    height: "270",
    width: "430",
    playerVars: {
      // https://developers.google.com/youtube/player_paramete rs
      autoplay: 0,
    },
  };
  var currentLocation = window.location.pathname;
  return (
    <Grid
      item
      container
      alignItems={matchesMD ? "center" : undefined}
      direction={matchesMD ? "column" : "row"}
      
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
        <Grid item container direction="row" md justify='center' justify="space-around" style={{marginBottom: '2em'}}>
          {videos.map((video, index) =>
            video.name === "ajb" && currentLocation === "/ajb-yungbull" ? (
              <YouTube videoId={video.vidId} opts={opts} />
            ) : video.name === "banx" && currentLocation === "/karai-banx" ? (
              <YouTube videoId={video.vidId} opts={opts} />
            ) : null
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArtistVideoPreview;

// if (video.name === "ajb") {
//   console.log("video.name", video.name)
//   return <YouTube videoId={video.vidId} opts={opts} />;
// }
// if (currentLocation === 'karai-banx') {
//   console.log("video.name", video.name)
//   return <YouTube videoId={ video.name === 'banx' ? video.vidId : null} opts={opts} />;
// }