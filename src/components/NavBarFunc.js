import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton, Snackbar } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import MuiAlert from "@material-ui/lab/Alert";

import Logo from "../../static/images/logo.png";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "white",
  },
  text2: {
    padding: "15px",
  },
  nav: {
    width: "100%",
    background: "rgba(0,0,0,.9)",
    bottom: theme.spacing(0),
  },
  icon: {
    textDecoration: "none",
    color: "white",
  },
  alert: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  logo: {
    "@media (min-width: 600px)": {
      width: "10vw",
    },
    width: "30vw",
  },
  logoCont: {
    marginTop: "1vh",
    marginBottom: "1vh",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function NavBarFunc() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box className={classes.nav}>
      <Grid container>
        <Grid item xs={12} align="center" className={classes.text2}>
          <Typography variant="p" className={classes.text}>
            Kontakt Meg:
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <IconButton aria-label="instagram" color="primary">
            <a
              className={classes.icon}
              href="https://www.instagram.com/lunarcode.js/"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </IconButton>
          <IconButton aria-label="facebook" color="primary">
            <a
              className={classes.icon}
              href="https://www.facebook.com/profile.php?id=100000992903215"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </IconButton>
          <IconButton aria-label="education" color="primary">
            <a
              className={classes.icon}
              href="https://www.linkedin.com/in/oddbj%C3%B8rn-a-92413510b/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </IconButton>
          <IconButton aria-label="github" color="primary">
            <a
              className={classes.icon}
              href="https://github.com/oddis98"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </IconButton>
          <IconButton
            aria-label="education"
            color="primary"
            onClick={handleClick}
          >
            <AlternateEmailIcon className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid item xs={12} align="center" className={classes.alert}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info">
              E-mail: oddbjornalmenning@hotmail.com
            </Alert>
          </Snackbar>
        </Grid>
        <Grid item xs={12} align="center" className={classes.logoCont}>
          <img src={Logo} className={classes.logo} />
        </Grid>
      </Grid>
    </Box>
  );
}
