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
    topBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    gridColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '2rem'
    },
    gridRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    heading2: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "flex-start",
      fontSize: "1.3rem",
      fontWeight: "300",
      marginTop: "1rem",
    },
    subtitle: {
      fontSize: "0.8rem",
      fontWeight: "400",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
  });
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper
          style={{
            // height: "100vh",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Grid
            className={classes.topBar}
          >
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            ></Switch>
          </Grid>
          <Header />
          {/* Development Section */}
          <Typography
            className={classes.heading2}
            variant="h2"
            component="h2"
            gutterBottom
          >
            Development
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <DevItem
                cardImage="imgs/git-good.png"
                cardTitle="Git Good"
                cardDescription="Git language cheatsheet with copy to clipboard. Built with ReactJS and features a custom logo design"
                deployURL="http://gitgood.me/"
                codeURL="https://github.com/markohanesian/git-cheatsheet-mso"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DevItem
                cardImage="imgs/tetris-mso.png"
                cardTitle="tetris-mso"
                cardDescription="Inspired by the original Tetris game, playable with your keyboard, built with vanilla javascript"
                deployURL="https://markohanesian.github.io/tetris-mso/"
                codeURL="https://github.com/markohanesian/tetris-mso"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DevItem
                cardImage="imgs/weather-dashboard.png"
                cardTitle="Weather Dashboard"
                cardDescription="Find the current weather for any major US City - powered by Weather API"
                deployURL="https://weather-dashboard-mso.netlify.app/"
                codeURL="https://github.com/markohanesian/Weather-Dashboard"
              />
            </Grid>
          </Grid>
          {/* Design Section */}
          <Typography
            className={classes.heading2}
            variant="h2"
            component="h2"
            gutterBottom
          >
            Design
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <DesignItem
                cardImage="imgs/tulips-concept.png"
                cardTitle="Shoe Product Page Concept"
                cardDescription="Product landing page concept made in Adobe XD | featuring my product photography"
                dribbleURL="https://markohanesian.github.io/markohanesian/"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DesignItem
                cardImage="imgs/hisherswatches.jpg"
                cardTitle="Apple Watch Faces Concept"
                cardDescription="Apple Watch faces concept designed in Adobe xD and Photoshop"
                dribbleURL="https://dribbble.com/shots/13774573-Apple-Watch-Face-Concept-Rose-Gold-His-Hers?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Apple%20Watch%20Face%20Concept%20-%20Rose%20Gold%20His%20%2B%20Hers&utm_medium=Social_Share"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DesignItem
                cardImage="imgs/signup-pgp.png"
                cardTitle="App Signup Page Concept"
                cardDescription="Mobile-friendly signup form conceptdesigned in Adobe xD"
                dribbleURL="https://dribbble.com/shots/13495221-Signup-Form-Concept-Project-Golden-Phoenix?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Signup%20Form%20Concept%20-%20Project%20Golden%20Phoenix&utm_medium=Social_Share"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DesignItem
                cardImage="imgs/styledPP.png"
                cardTitle="Web App Dashboard Concept"
                cardDescription="Wardrobe app concept user Dashboard designed in Adobe xD with original photography"
                dribbleURL="https://dribbble.com/shots/13904483-Profile-Page-styld-app-concept"
              />
            </Grid>
          </Grid>

          <Footer />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
