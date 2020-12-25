import React, { useState } from "react";
import { Switch, Grid, Typography, Paper } from "@material-ui/core";
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
  
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Paper
          className={classes.app}
        >
          <Grid
            className={classes.topBar}
          >
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            ></Switch>
            <Brightness4Icon style={{fontSize: "26px"}}/>
          </Grid>
          <Header />
          {/* Development Section */}
          <Grid className={classes.gridContainer}>
            <Grid className={classes.gridColumn}>
              <CodeIcon style={{fontSize: "36px"}}/>
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
          {/* Design Section */}
          <Grid className={classes.gridContainer}>  
            <Grid className={classes.gridColumn}>
              <BrushIcon style={{fontSize: "36px"}}/>
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
          {/* Photography Section */}
          <Grid className={classes.gridContainer}>  
            <Grid className={classes.gridColumn}>
              <CameraAltIcon style={{fontSize: "36px"}}/>
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
          <Footer />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
