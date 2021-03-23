import {createMuiTheme} from "@material-ui/core/styles";


const ktorBlue = "#3c3998"
const ktorRed = "#d24c4c"
const ktorGray = "#3f3a3a"
const ktorTeal = "#336c85"

export default createMuiTheme({
    palette: {
        common: {
            ktorBlue: `${ktorBlue}`,
            ktorRed: `${ktorRed}`,
            ktorGray: `${ktorGray}`,
            ktorTeal: `${ktorTeal}`,
        },
        primary: {
            main: "#FFFFFF"
        }
    },
    typography: {
        tab: {
            fontFamily: "Modak",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
            color: "white"
        },
        h1: {
            fontFamily: "antique-olive-nord",
            fontWeight: 700,
            fontSize: "7.5rem",
            color: "white",
            lineHeight: 1.5
        },
        h2: {
            fontFamily: "antique-olive-nord",
            fontWeight: 700,
            fontSize: "5.5rem",
            color: "white",
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Roboto",
            fontSize: "4rem",
            color: "white",
            fontWeight: "bold"
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.7rem",
            color: "white",
            fontWeight: 700
        },
        artistButton: {
            borderColor: "purple",
            color: "white",
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
        body1: {
            fontSize: "1.25rem",
            color: 'white',
            fontWeight: 300,
            
        },
        body2: {
            fontSize: "1.10rem",
            color: 'white',
            fontWeight: 300,
        },
        
    }
});