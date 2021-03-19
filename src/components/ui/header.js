import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// for Drawer
import { SwipeableDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
// used for creating our list
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";

// for routing
import { Link } from "react-router-dom";

// for styling
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

//media queries
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Images
import logo from "../../assets/ktorheaderlogo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// For using inline styles
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    // style for when window size shrinks
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    // style for when window size shrinks
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: "#0A0B0D",
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "45px",
    width: "45px",
    color: "white",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: "#0A0B0D",
  },
  drawerItem: {
    // text
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.arcOrange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "#0A0B0D",
  },
}));

// Header Component - will be taking props
export default function Header(props) {
  const classes = useStyles();

  // access to default theme
  const theme = useTheme();
  // brakepoints for medium
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // determines if a user is on a IOS device
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // hook for opening drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  // using hook for menu items - setting anchorEl to null
  const [anchorEl, setAnchorEl] = useState(null);
  // using hooks for menu - determines if menu is being displayed or not
  const [openMenu, setOpenMenu] = useState(false);

  /** define change handler - takes an "e"(event)
    takes a "value" which in this is case is the index of the selected tab */
  const handleChange = (e, newValue) => {
    // user setValue hook to change the state of the selected tab to new selected tab value
    props.setValue(newValue);
  };

  /** function that takes a click event that contains info of where we clicked
   * on the screen
   */
  const handleclick = (e) => {
    setAnchorEl(e.currentTarget);
    // set 'open' to "true"
    setOpenMenu(true);
  };

  // same function as above ^^
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  // Handler function for menuItems, takes an event and index
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  /** array to contain menuItems
   * We will iterate through the array to track our current menuItem objects
   */
  const menuOptions = [
    { name: "Artist", link: "/artist", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Ajb Yunbull",
      link: "/ajb-yungbull",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Kari Banx",
      link: "/karai-banx",
      activeIndex: 1,
      selectedIndex: 1,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Artist",
      link: "/artist",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleclick(event),
    },
    {
      name: "Brand",
      link: "/brand",
      activeIndex: 2,
    },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  // Similar to will mount, pass value at the end to prevent infinite updates
  useEffect(() => {
    // combined both the arrays
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        // inject js into our switch cases
        case `${route.link}`:
          // if current value does not already equal current route index then set to correct index
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            // checks in not undefined & if current route has already been set
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          props.setValue(5);
          break;
        default:
          break;
      }
    }); // eslint-disable-next-line
  }, [props.value, menuOptions, props.selectedIndex, routes]);

  const tabs = (
    <>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={routes.ariaOwns}
            haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      {/* creating menu component that will act as a drop down for services*/}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {
          // option = individual objects from array
          menuOptions.map((option, i) => (
            <MenuItem
              key={`${option}${i}`}
              to={option.link}
              component={Link}
              classes={{ root: classes.menuItem }}
              onClick={(event) => {
                handleMenuItemClick(event, i);
                props.setValue(1);
                handleClose();
              }}
              selected={i === props.selectedIndex && props.value === 1}
            >
              {option.name}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );

  // const for creating drawer
  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        // use classes prop to overwrite some base material-ui styles
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText
                className={classes.drawerItem}
                disabletypography="true"
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      {
        /* arrow function toggles the visibilty to true or false  */
        //if drawer is open and openDrawer=true it will set it to false
      }
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        {/* fix by default */}
        <AppBar position="fixed" className={classes.appbar}>
          <ToolBar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {/* render drawer if screen size shrinks to a certain resolution */}
            {matches ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
