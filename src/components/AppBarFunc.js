import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#373a40",
  },
  text: {
    padding: "10px",
    "@media (max-width: 350px)": {
      fontSize: "16px",
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function AppBarFunc() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="secondary" className={classes.text}>
          DIGITAL CV for Oddbjørn Almenning
        </Typography>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
}
