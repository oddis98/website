import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

import Image from "../../static/images/book.jpg";
import FadeIn from "react-fade-in";

const useStyles = makeStyles((theme) => ({
  outerBox: {
    "@media (min-width: 1025px)": {
      padding: 50,
      height: "100vh",
    },
    paddingTop: 50,
    backgroundImage: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "120vh",

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

export default function Education() {
  const classes = useStyles();

  return (
    <Grid container className={classes.outerBox}>
      <Grid item className={classes.header}>
        <FadeIn transitionDuration={2400}>
          <Typography variant="h3" className={classes.text2}>
            Utdanning
          </Typography>
        </FadeIn>
      </Grid>
      <Grid item className={classes.box}>
        <FadeIn transitionDuration={2400}>
          <Typography variant="h4" className={classes.headerText}>
            Universitetet i Bergen (UiB)
          </Typography>
          <Typography variant="h6" className={classes.text3}>
            Bachelorgrad i informasjonsvitenskap
          </Typography>
          <Typography
            variant="p"
            style={{ whiteSpace: "pre-line" }}
            className={classes.text}
          >
            I løpet av denne graden har jeg fått ett bredt innblikk i noen av
            markedets fremste programmerings-språk og teknologier. De
            inkluderer, men er ikke begrenset til: {"\n"}
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Django</li>
              <li>Machine Læring</li>
              <li>Interaksjonsdesign</li>
              <li>Nettverksteori</li>
            </ul>
          </Typography>
        </FadeIn>
      </Grid>
      <Grid item className={classes.box}>
        <FadeIn transitionDuration={2400}>
          <Typography variant="h4" className={classes.headerText}>
            Firda Videregående Skole (Firda VGS)
          </Typography>
          <Typography variant="h6" className={classes.text3}>
            Idrettsfag
          </Typography>
          <Typography variant="p" className={classes.text}>
            Fra videregående fikk jeg med meg mye nyttig kunnskap innen flere
            områder. Blandt annet gikk jeg toppidrett i troppsgymnastikk hvor
            jeg lærte å jobbe hardt for resultater og samtidig hvor viktig det
            er å jobbe sammen mot ett felles mål. {"\n"}
            Samtidig var jeg også trener for den yngre generasjonen hvor jeg
            fikk erfaring av å vere en rollemodell og hvordan organisere
            konkurranser og treninger.
          </Typography>
        </FadeIn>
      </Grid>
    </Grid>
  );
}
