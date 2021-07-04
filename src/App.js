import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Paper, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import DarkModeToggle from "react-dark-mode-toggle";
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
// Icons 
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

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
    DevContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    SectionIcon: {
      margin: '2rem 0 0 0',
      fontSize: '3rem',
    }

  });
  const classes = useStyles();

  const NavBar = (
    <Grid container>
      <Grid item xs={12}>
        <BottomNavigation
          showLabels
          className={classes.bottomNav}
        >
          {/* <BottomNavigationAction icon={<HomeIcon />} className={classes.navbutton} href="/" label="Home" /> */}
          <BottomNavigationAction icon={<CodeIcon />} href="/" label="development" />
          <BottomNavigationAction icon={<BrushIcon />} href="/design" label="design" />
          <BottomNavigationAction icon={<CameraAltIcon />} target="_blank" href="https://mark.squarespace.com/" label="photography" />
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
            <DarkModeToggle
              size={60}
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            ></DarkModeToggle>
          </Grid>
          <Header />
          <Router>
            <div>
              <Switch>
                <Route path="/design">
                  {/* Design Section */}
                  {NavBar}
                  <Grid className={classes.gridContainer} container>
                    <Grid className={classes.DevContainer}>
                        <DesignItem
                          cardImage="item-images/tulips-concept.png"
                          cardTitle="Shoe Product Page Concept"
                          cardDescription="Product landing page concept made in Adobe XD | featuring my product photography"
                          dribbleURL="https://dribbble.com/shots/14062665-Tulips-homepage-concept"
                        />
             
                        <DesignItem
                          cardImage="item-images/hisherswatches.jpg"
                          cardTitle="Apple Watch Faces Concept"
                          cardDescription="Apple Watch faces concept designed in Adobe xD and Photoshop"
                          dribbleURL="https://dribbble.com/shots/13774573-Apple-Watch-Face-Concept-Rose-Gold-His-Hers?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Apple%20Watch%20Face%20Concept%20-%20Rose%20Gold%20His%20%2B%20Hers&utm_medium=Social_Share"
                        />
                     
                        <DesignItem
                          cardImage="item-images/signup-pgp.png"
                          cardTitle="App Signup Page Concept"
                          cardDescription="Mobile-friendly signup form conceptdesigned in Adobe xD"
                          dribbleURL="https://dribbble.com/shots/13495221-Signup-Form-Concept-Project-Golden-Phoenix?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Signup%20Form%20Concept%20-%20Project%20Golden%20Phoenix&utm_medium=Social_Share"
                        />
                     
                        <DesignItem
                          cardImage="item-images/styledPP.png"
                          cardTitle="Web App Dashboard Concept"
                          cardDescription="Wardrobe app concept user Dashboard designed in Adobe xD with original photography"
                          dribbleURL="https://dribbble.com/shots/13904483-Profile-Page-styld-app-concept"
                        />
                    </Grid>
                  </Grid>
                </Route>
              {/* Development Section */}
                <Route path="/">
                  {NavBar}
                  <Grid className={classes.gridContainer} container>
                    <Grid className={classes.DevContainer}>
                      {/* Development Items */}
                     
                        <DevItem
                          cardImage="item-images/react-social-preview.png"
                          cardTitle="ReactSocial"
                          cardDescription="Social media web app built with React and Firebase"
                          deployURL="https://social-media-app-mso.web.app/"
                          codeURL="https://github.com/markohanesian/ReactSocial"
                        />
                        <DevItem
                          cardImage="item-images/git-good.png"
                          cardTitle="Git Good"
                          cardDescription="Git language cheatsheet with copy to clipboard. Built with ReactJS and features a custom logo design"
                          deployURL="http://gitgood.me/"
                          codeURL="https://github.com/markohanesian/git-cheatsheet-mso"
                        />
      
                        <DevItem
                          cardImage="item-images/tetris-mso.png"
                          cardTitle="tetris-mso"
                          cardDescription="Inspired by the original Tetris game, playable with your keyboard, built with vanilla javascript"
                          deployURL="https://markohanesian.github.io/tetris-mso/"
                          codeURL="https://github.com/markohanesian/tetris-mso"
                        />
                      
                        <DevItem
                          cardImage="item-images/weather-dashboard.png"
                          cardTitle="Weather Dashboard"
                          cardDescription="Find the current weather for any major US City - powered by Weather API"
                          deployURL="https://weather-dashboard-mso.netlify.app/"
                          codeURL="https://github.com/markohanesian/Weather-Dashboard"
                        />
                    </Grid>
                  </Grid>
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
