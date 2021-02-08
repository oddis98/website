import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FadeIn from "react-fade-in";
import Nav from "./Nav";

import PropTypes from "prop-types";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import Image from "../../static/images/me.jpg";
import Moon from "../../static/images/cat.jpg";
import News from "../../static/images/news.jpg";
import Food from "../../static/images/food.jpg";
import newsF1 from "../../static/images/NewsFlash/scetch.PNG";
import newsF2 from "../../static/images/NewsFlash/layout.PNG";
import newsF3 from "../../static/images/NewsFlash/article-final.PNG";
import foodie1 from "../../static/images/Foodie/new_main.PNG";
import foodie2 from "../../static/images/Foodie/new_steps.PNG";
import foodie3 from "../../static/images/Foodie/new_search.PNG";

import Education from "./Education";
import Work from "./Work";
import NavBarFunc from "./NavBarFunc";
import FadeInSection from "./FadeInSection";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "65vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${Moon})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  textBoxHeader: {
    "@media (min-width: 600px)": {
      paddingLeft: 250,
      paddingTop: 150,
      paddingRight: 250,
    },
    paddingLeft: 20,
  },
  textBoxHeader2: {
    "@media (min-width: 600px)": {
      paddingLeft: 250,
      paddingRight: 250,
    },
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: "5vh",
  },
  textBoxHeader3: {
    "@media (min-width: 600px)": {
      paddingLeft: 0,
      paddingRight: 50,
    },
    paddingTop: 0,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20,
  },
  textBoxHeader4: {
    "@media (min-width: 600px)": {
      paddingLeft: "25vw",
      paddingRight: 50,
    },
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20,
  },
  trigger: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(6),
  },
  image: {
    width: "50%",
    borderRadius: 0,
    boxShadow: "10px 10px 10px grey",
    padding: 0,
    filter: "grayscale(50%)",
  },
  image2: {
    "@media (min-width: 600px)": {
      width: "14vw",
    },
    width: "100%",

    borderRadius: 10,
  },
  textBox: {
    background: "rgba(0,0,0,.1)",
    "@media (min-width: 600px)": {
      width: "100%",
    },
  },
  imageBox: {
    "@media (min-width: 600px)": {
      width: "50%",
      marginBottom: "8vh",
    },
    width: "100%",
    paddingTop: 50,
    textAlign: "center",
  },
  header: {
    color: "white",
  },
  text: {
    "@media (min-width: 600px)": {
      width: "50%",
      paddingRight: "20vw",
      paddingTop: "15vh",
    },
    width: "100%",
    fontSize: "2vh",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    paddingTop: "5vh",
    paddingBottom: "5vh",
  },
  text2: {
    fontSize: "2vh",
  },
  newsFlash: {
    backgroundImage: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${News})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",

    "@media (min-width: 600px)": {
      height: "100vh",
    },
    "@media (max-width: 600px)": {
      justifyContent: "center",
    },
  },
  header2: {
    fontSize: "7vh",
  },
  foodie: {
    backgroundImage: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${Food})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",

    "@media (min-width: 600px)": {
      height: "100vh",
    },
    "@media (max-width: 600px)": {
      justifyContent: "center",
    },
  },
  newsImg: {
    width: "100%",
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.trigger}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.PropTypes = {
  children: PropTypes.element.isRequired,
};

function homePage() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      {/*Hero Image*/}
      <Box className={classes.hero}>
        <Toolbar id="back-to-top-anchor" />
        <Box className={classes.textBoxHeader}>
          <FadeIn transitionDuration={2400}>
            <Typography variant="h1" className={classes.header}>
              Lunar Code
            </Typography>
            <Typography variant="h6" className={classes.header}>
              Oddbjørn Almenning
            </Typography>
          </FadeIn>
        </Box>
      </Box>

      {/*Container for info*/}
      <Grid container>
        {/*Intro*/}
        <Grid item className={classes.textBox}>
          <FadeInSection>
            <Grid container>
              <Grid item className={classes.imageBox}>
                <img src={Image} className={classes.image} title="image" />
              </Grid>
              <Grid item className={classes.text}>
                <Typography variant="p" style={{ whiteSpace: "pre-line" }}>
                  Jeg er en 22 år gammel student ved Universitetet i Bergen,
                  hvor jeg studerer informasjonsvitenskap. I løpet av bachelor
                  graden min har jeg vært med på flere prosjekter innen
                  systemutvikling og interaksjonsdesign.{"\n\n"}
                  Som person er jeg hardtarbeidende, livlig, fokusert,
                  løsningsorientert og alltid åpen for nye utfordringer!
                </Typography>
              </Grid>
            </Grid>
          </FadeInSection>
        </Grid>
      </Grid>
      {/*NewsFlash section*/}
      <Grid container xs={12} className={classes.newsFlash}>
        <Grid item className={classes.textBoxHeader2}>
          <FadeInSection>
            <Typography variant="h1" className={classes.header2}>
              newsflash
            </Typography>
            <Typography variant="p" className={classes.text2}>
              NewsFlash var mitt første prosjekt i studiet og gikk ut på å samle
              mange nyheter fra mange forskjellige kilder i en og samme app!
              Denne ble skrevet i ren HTML, CSS og JavaScript som også gjorde
              det til en fin utfordring!
            </Typography>
          </FadeInSection>
        </Grid>
        <Grid item className={classes.textBoxHeader4}>
          <FadeInSection>
            <Box className={classes.newsImg}>
              <img src={newsF1} className={classes.image2} />
            </Box>
          </FadeInSection>
        </Grid>
        <Grid item className={classes.textBoxHeader3}>
          <FadeInSection>
            <Box className={classes.newsImg}>
              <img src={newsF2} className={classes.image2} />
            </Box>
          </FadeInSection>
        </Grid>
        <Grid item className={classes.textBoxHeader3}>
          <FadeInSection>
            <Box className={classes.newsImg}>
              <img src={newsF3} className={classes.image2} />
            </Box>
          </FadeInSection>
        </Grid>
      </Grid>
      <Grid container xs={12} className={classes.foodie}>
        <Grid item className={classes.textBoxHeader2}>
          <FadeInSection>
            <Typography variant="h1" className={classes.header2}>
              foodie
            </Typography>
            <Typography variant="p" className={classes.text2}>
              Mitt andre prosjekt var appen Foodie. Her gikk vi i en annen
              retning og valgte å bruke Python til å utvikle med. Vi brukte
              KivyMD biblioteket til dette. Foodie er en applikasjon som samler
              inn tusenvis av mat-oppskrifter og presenterer dette til brukeren
              ved hjelp av MaterialUI. Årsaken til å bruke python var i hovedsak
              å lære mer om språket i seg selv!
            </Typography>
          </FadeInSection>
        </Grid>
        <Grid item className={classes.textBoxHeader4}>
          <FadeInSection>
            <Box className={classes.newsImg}>
              <img src={foodie1} className={classes.image2} />
            </Box>
          </FadeInSection>
        </Grid>
        <Grid item className={classes.textBoxHeader3}>
          <FadeInSection>
            <Box className={classes.newsImg}>
              <img src={foodie2} className={classes.image2} />
            </Box>
          </FadeInSection>
        </Grid>
        <Grid item className={classes.textBoxHeader3}>
          <FadeInSection>
            <Box className={classes.newsImg}>
              <img src={foodie3} className={classes.image2} />
            </Box>
          </FadeInSection>
        </Grid>
      </Grid>
      {/*Social Media Links*/}
      <NavBarFunc />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default function HomePage() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          {homePage()}
        </Route>
        <Route path="/education">{Education()}</Route>
        <Route path="/work">{Work()}</Route>
      </Switch>
    </Router>
  );
}
