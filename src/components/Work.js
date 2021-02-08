import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

import Image from "../../static/images/office.jpg";
import FadeIn from "react-fade-in";

const useStyles = makeStyles((theme) => ({
  outerBox: {
    "@media (min-width: 1025px)": {
      padding: 50,
      height: "100vh",
    },
    height: "120vh",
    paddingTop: 50,
    backgroundImage: `linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.9)), url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    padding: 10,
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
      width: "100%",
    },
  },
  text: {
    fontSize: "2vh",
    color: "#ffffff",
  },
  text2: {
    color: "#ffffff",
    "@media (min-width: 1025px)": {
      paddingLeft: "10vw",
    },
  },
  text3: {
    color: "#ffffff",
    fontSize: "3vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
  headerText: {
    fontSize: "3vh",
    color: "#ffffff",
  },
  box: {
    "@media (min-width: 1025px)": {
      width: "49%",
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
  },
}));

export default function Work() {
  const classes = useStyles();

  return (
    <Grid container className={classes.outerBox}>
      <Grid item className={classes.header}>
        <FadeIn transitionDuration={2400}>
          <Typography variant="h3" className={classes.text2}>
            Arbeidserfaring
          </Typography>
        </FadeIn>
      </Grid>
      <Grid item className={classes.box}>
        <FadeIn transitionDuration={2400}>
          <Typography variant="h4" className={classes.headerText}>
            Elkem Bremanger AS
          </Typography>
          <Typography variant="h6" className={classes.text3}>
            Ildfast operatør
          </Typography>
          <Typography
            variant="p"
            style={{ whiteSpace: "pre-line" }}
            className={classes.text}
          >
            Jeg har jobbet som ildfast operatør for Elkem Bremanger AS i alle
            sommere og ferier siden jeg var 18år. Her har jeg fått mye lærdom om
            å jobbe i små teams, samt på egenhand. Her har jeg også fått god
            kjennskap til moderne arbeidmetoder som f.eks. Scrum. {"\n\n"}
            Fra Elkem har jeg også fått mye ansvar i blandt annet opptrening av
            nye arbeidere og avanserte solo-oppdrag. {"\n\n"}
            Jeg har også fått nyttige kurs innen HMS, samt sertifisering for
            motvektstruck, traverskran og løfteredskap.
          </Typography>
        </FadeIn>
      </Grid>
      <Grid item className={classes.box}>
        <FadeIn transitionDuration={2400}>
          <Typography variant="h4" className={classes.headerText}>
            Bergen Kommune
          </Typography>
          <Typography variant="h6" className={classes.text3}>
            Ringevikar
          </Typography>
          <Typography variant="p" className={classes.text}>
            I 2017/2018 jobbet jeg omtrent 6 månader som ringevikar for Hop
            Ungdomskole. Her underviste jeg i blandt annet fag som gym, spansk,
            engelsk, norsk. Jeg var i hovedsak assistent for elever med
            lærevansker.
          </Typography>
        </FadeIn>
      </Grid>
    </Grid>
  );
}
