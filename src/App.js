import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Typography, Paper, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import ToggleButton from '@material-ui/lab/ToggleButton';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import "./App.css";
// components
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
// Development items
import DevItem from "./components/DevItem";
// Design Items
import DesignItem from "./components/DesignItem";
// Photography Image Gallery
import Gallery from "./components/Gallery";
// Icons 
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import HomeIcon from '@material-ui/icons/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    app: {
      // height: "100vh",
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
    },
    topBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    heading2: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      fontSize: "1.3rem",
      fontWeight: "300",
      paddingBottom: "0",
    },
    subtitle: {
      fontSize: "0.8rem",
      fontWeight: "400",
    },
    gridContainer: {
      flexGrow: 1,
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    gridColumn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem"
    },
    SectionIcon: {
      margin: '2rem 0 0 0',
      fontSize: '3rem',
    }

  });
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const NavBar = (
    <Grid container>
      <Grid item xs={12}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.bottomNav}
        >
          <BottomNavigationAction icon={<HomeIcon />} className={classes.navbutton} href="/" label="Home" />
          <BottomNavigationAction icon={<CodeIcon />} className={classes.navbutton} href="/development" label="development" />
          <BottomNavigationAction icon={<BrushIcon />}className={classes.navbutton} href="/design" label="design" />
          <BottomNavigationAction icon={<CameraAltIcon />} className={classes.navbutton} href="/photography" label="photography" />
        </BottomNavigation>
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Paper
          className={classes.app}
        >
          <Grid
            className={classes.topBar}
          >
            <ToggleButton
              value="check"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            ></ToggleButton>
            <Brightness4Icon style={{ fontSize: "26px" }} />
          </Grid>
          <Header />
          <Router>
            <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/photography">
                  {/* Photography Section */}
                  {NavBar}

                  <Grid className={classes.gridContainer}>
                    <Grid className={classes.gridColumn}>
                      <CameraAltIcon className={classes.SectionIcon} />
                      <Typography
                        className={classes.heading2}
                        variant="h2"
                        component="h2"
                        gutterBottom
                      >
                        Photography
                      </Typography>
                    </Grid>
                    <Grid container className={classes.gridContainer}>
                      <Gallery />
                    </Grid>
                  </Grid>
                </Route>
                <Route path="/development">
                  {/* Development Section */}
                  {NavBar}
                  <Grid className={classes.gridContainer}>
                    <Grid className={classes.gridColumn}>
                      <CodeIcon className={classes.SectionIcon} />
                      <Typography
                        className={classes.heading2}
                        variant="h2"
                        component="h2"
                        gutterBottom
                      >
                        Development
                      </Typography>
                    </Grid>
                    <Grid container>
                      {/* Development Items */}
                      <Grid item xs={12} sm={6}>
                        <DevItem
                          cardImage="item-images/react-social-preview.png"
                          cardTitle="ReactSocial"
                          cardDescription="Social media web app built with React and Firebase"
                          deployURL="https://social-media-app-mso.web.app/"
                          codeURL="https://github.com/markohanesian/ReactSocial"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DevItem
                          cardImage="item-images/git-good.png"
                          cardTitle="Git Good"
                          cardDescription="Git language cheatsheet with copy to clipboard. Built with ReactJS and features a custom logo design"
                          deployURL="http://gitgood.me/"
                          codeURL="https://github.com/markohanesian/git-cheatsheet-mso"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DevItem
                          cardImage="item-images/tetris-mso.png"
                          cardTitle="tetris-mso"
                          cardDescription="Inspired by the original Tetris game, playable with your keyboard, built with vanilla javascript"
                          deployURL="https://markohanesian.github.io/tetris-mso/"
                          codeURL="https://github.com/markohanesian/tetris-mso"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DevItem
                          cardImage="item-images/weather-dashboard.png"
                          cardTitle="Weather Dashboard"
                          cardDescription="Find the current weather for any major US City - powered by Weather API"
                          deployURL="https://weather-dashboard-mso.netlify.app/"
                          codeURL="https://github.com/markohanesian/Weather-Dashboard"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Route>
                <Route path="/design">
                  {/* Design Section */}
                  {NavBar}
                  <Grid className={classes.gridContainer}>
                    <Grid className={classes.gridColumn}>
                      <BrushIcon className={classes.SectionIcon} />
                      <Typography
                        className={classes.heading2}
                        variant="h2"
                        component="h2"
                        gutterBottom
                      >
                        Design
                      </Typography>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} sm={6}>
                        <DesignItem
                          cardImage="item-images/tulips-concept.png"
                          cardTitle="Shoe Product Page Concept"
                          cardDescription="Product landing page concept made in Adobe XD | featuring my product photography"
                          dribbleURL="https://dribbble.com/shots/14062665-Tulips-homepage-concept"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DesignItem
                          cardImage="item-images/hisherswatches.jpg"
                          cardTitle="Apple Watch Faces Concept"
                          cardDescription="Apple Watch faces concept designed in Adobe xD and Photoshop"
                          dribbleURL="https://dribbble.com/shots/13774573-Apple-Watch-Face-Concept-Rose-Gold-His-Hers?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Apple%20Watch%20Face%20Concept%20-%20Rose%20Gold%20His%20%2B%20Hers&utm_medium=Social_Share"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DesignItem
                          cardImage="item-images/signup-pgp.png"
                          cardTitle="App Signup Page Concept"
                          cardDescription="Mobile-friendly signup form conceptdesigned in Adobe xD"
                          dribbleURL="https://dribbble.com/shots/13495221-Signup-Form-Concept-Project-Golden-Phoenix?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Signup%20Form%20Concept%20-%20Project%20Golden%20Phoenix&utm_medium=Social_Share"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DesignItem
                          cardImage="item-images/styledPP.png"
                          cardTitle="Web App Dashboard Concept"
                          cardDescription="Wardrobe app concept user Dashboard designed in Adobe xD with original photography"
                          dribbleURL="https://dribbble.com/shots/13904483-Profile-Page-styld-app-concept"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Route>
                <Route path="/">
                  {NavBar}
                  <h1 style={{ fontSize: '3rem', display: 'grid', placeItems: 'center' }}>YOU ARE HOME</h1>
                </Route>
              </Switch>
            </div>
          </Router>



          <Footer />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
