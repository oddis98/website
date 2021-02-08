import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";

const useStyles = makeStyles((theme) => ({
  nav: {
    background: "rgba(0,0,0,.9)",
  },
  link: {
    marginLeft: "1rem",
    color: "rgba(255, 255, 255, 1)",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  item: {
    flexGrow: 1,
  },
  logo: {
    "@media (max-width: 600px)": {
      width: "50px",
    },
    width: "100px",
    margin: "0.5rem",
  },
}));
export default function Nav() {
  const classes = useStyles();
  return (
    <AppBar className={classes.nav}>
      <Toolbar>
        <span className={classes.item}></span>
        <NavLink exact to="/" className={classes.link}>
          <HomeRoundedIcon />
        </NavLink>
        <NavLink exact to="/education" className={classes.link}>
          <SchoolRoundedIcon />
        </NavLink>
        <NavLink exact to="/work" className={classes.link}>
          <WorkRoundedIcon />
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
