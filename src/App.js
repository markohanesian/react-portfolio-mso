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
    topBar:{
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
            <Grid>
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
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <DevItem
                  cardImage="imgs/tetris-mso.png"
                  cardTitle="tetris-mso"
                  cardDescription="Inspired by the original Tetris game, playable with your keyboard, built with vanilla javascript"
                />
                </Grid>
              </Grid>
              <Typography
                  className={classes.heading2}
                  variant="h2"
                  component="h2"
                  gutterBottom
                >
                  Design
              </Typography>
            </Grid>
          <Footer />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
