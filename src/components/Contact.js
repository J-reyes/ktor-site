import React, { useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import background from "../assets/greenLineBackgroundsvg.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

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
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    // to cover the whole container
    backgroundSize: "cover",
    // makes sure extra space isn't filled with duplicate background image
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${background})`,
    },
  },
  input: {
    width: "100%",
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px #0a0b0d inset",
    },
    "& .MuiInputBase-input": {
      color: "#fff", // Text color
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white", // Semi-transparent underline
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white", // Semi-transparent underline
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "white", // Solid underline on hover
    },
    "& .MuiInputBase-inputMultiline": {
      border: "2px solid white",
    },
  },
  // message: {
  //   marginTop: "5em",
  //   borderRadius: 5,
  // },
  sendButton: {
    color: "white",
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    background: "rgb(50, 48, 125)",
    "&:disabled": {
      backgroundColor: "#848485",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "rgb(42, 39, 126)",
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // Values in text field are set to an empty string
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  // Checking too see if there is an error
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  // Function for dialog
  const [open, setOpen] = useState(false);

  //Handle our spinner
  const [loading, setLoading] = useState(false);

  // Handle snackbar - making it more customizable
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  // function that checks to see if there is an error
  const onChange = (event) => {
    // define empty variable
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        // validate whether or not the email entered is valid
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        // if its not a valid email
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);

        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = () => {
    // set spinner to true
    setLoading(true);

    axios
      .get("https://us-central1-ktor-8dbfd.cloudfunctions.net/sendMail", {
        params: {
          email: email,
          name: name,
          phone: phone,
          message: message,
        },
      })
      .then((res) => {
        // setLoading(false);
        // clear out our fields
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        // trigger snackbar alert
        setAlert({
          open: true,
          message: "Message sent successfully!",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, please try again",
          backgroundColor: "#FF3232",
        });
      });
  };

  // const containg our send message content
  const buttonContents = (
    <React.Fragment>
      Send message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
    </React.Fragment>
  );

  return (
    <Grid container direction="row" className={classes.mainContainer}>
      {/* will take up 3 columns worth of space if its at a large screen size */}
      {/* main axis is vertical -- column = vertial main axis */}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        className={classes.background}
      >
        <Grid item>
          <Grid container direction="column">
            {/*  */}
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? "center" : "center"}
                variant="body1"
                style={{ color: theme.palette.common.archblue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginBottom: "2em", marginTop: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="email"
                  style={{
                    marginRight: "0.5em",
                    verticalAlign: "bottom",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.archblue,
                    fontSize: "1rem",
                  }}
                >
                  <a
                    href="mailto:zachary@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    killthemoffrecords@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "25em" }}
            >
              <Grid item style={{ marginBottom: "0.5em", width: "100%" }}>
                {/* onChange is a function that will be called everytime there is a change to the text fied */}
                <TextField
                  label="Name"
                  id="Name"
                  fullWidth
                  value={name}
                  onChange={(event) => {
                    // call setName function to add the new string(our event var)to the State
                    setName(event.target.value);
                  }}
                  className={classes.input}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  // add function to error prop
                  // if its greater than 0
                  error={emailHelper.length !== 0}
                  // set to email helper value
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                  className={classes.input}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                  className={classes.input}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "25em" }}>
              <TextField
                // props we can pass into the input component
                InputProps={{ disableUnderline: true }}
                value={message}
                
                multiline
                fullWidth
                rows={10}
                id="message"
                className={classes.input}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
            {/*  */}
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        className={classes.input}
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matchesXS}
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            // to cover the whole container
            backgroundSize: "cover",
            backgroundColor: "#0A0B0D",
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              {/* onChange is a function that will be calledeverytimethere is a change to the text fied */}
              <TextField
                label="Name"
                id="Name"
                fullWidth
                value={name}
                onChange={(event) => {
                  // call setName function to add the new string(oureventvar)to the State
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                // add function to error prop
                // if its greater than 0
                error={emailHelper.length !== 0}
                // set to email helper value
                helperText={emailHelper}
                id="email"
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
              <TextField
                // props we can pass into the input component
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                multiline
                fullWidth
                rows={10}
                id="message"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/* Place snackbar component here */}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Grid>
  );
}
