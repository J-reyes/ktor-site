import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from "@material-ui/core/Hidden";



const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
    missionStatement: {
        fontstyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    avatar: {
        height: "25em",
        width: "25em",
        [theme.breakpoints.down("sm")]: {
            height: "20em",
            width: "20em",
            maxHeight: "300",
            maxWidth: "300"
        }
    }
}));



export default function Banx(props) {
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid 
            container 
            direction="column"
        >
            banx
        </Grid>
    )


}