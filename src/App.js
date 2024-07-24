import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import DarkModeToggle from "react-dark-mode-toggle";
import "./App.css";
// components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Development items
import PortfolioItem from "./components/PortfolioItem";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  app: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heading2: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    fontSize: "1.3rem",
    fontWeight: "300",
    paddingBottom: "0",
  },
  gridContainer: {
    flexGrow: 1,
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  gridItem: {
    padding: "1rem",
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.app}>
        <Grid className={classes.topBar}>
          <DarkModeToggle
            size={60}
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </Grid>
        <Header />
        <Router>
          <NavBar />
          <div>
            <Switch>
              <Route
                path="/photography"
                component={() => {
                  window.location.href = "http://markohanesian.photography/";
                  return null;
                }}
              />
              {/* Design Section */}
              <Route path="/design">
                <Grid container spacing={2} className={classes.gridContainer}                   sx={{ maxWidth: "800px", margin: "0 auto" }}
                >
                  <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
                    <PortfolioItem
                      cardImage="item-images/styledPP.png"
                      cardTitle="Web App Dashboard Concept"
                      cardDescription="Wardrobe app concept user Dashboard designed in Adobe xD with original photography"
                      deployURL="https://dribbble.com/shots/13904483-Profile-Page-styld-app-concept"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
                    <PortfolioItem
                      cardImage="item-images/tulips-concept.png"
                      cardTitle="Shoe Product Page Concept"
                      cardDescription="Product landing page concept made in Adobe XD | featuring my product photography"
                      deployURL="https://dribbble.com/shots/14062665-Tulips-homepage-concept"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
                    <PortfolioItem
                      cardImage="item-images/hisherswatches.jpg"
                      cardTitle="Apple Watch Faces Concept"
                      cardDescription="Apple Watch faces concept designed in Adobe xD and Photoshop"
                      deployURL="https://dribbble.com/shots/13774573-Apple-Watch-Face-Concept-Rose-Gold-His-Hers?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Apple%20Watch%20Face%20Concept%20-%20Rose%20Gold%20His%20%2B%20Hers&utm_medium=Social_Share"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
                    <PortfolioItem
                      cardImage="item-images/signup-pgp.png"
                      cardTitle="App Signup Page Concept"
                      cardDescription="Mobile-friendly signup form conceptdesigned in Adobe xD"
                      deployURL="https://dribbble.com/shots/13495221-Signup-Form-Concept-Project-Golden-Phoenix?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Signup%20Form%20Concept%20-%20Project%20Golden%20Phoenix&utm_medium=Social_Share"
                    />
                  </Grid>
                </Grid>
              </Route>
              {/* Development Section */}
              <Route path="/">
                <Grid
                  container
                  spacing={2}
                  className={classes.gridContainer}
                  sx={{ maxWidth: "800px", margin: "0 auto" }}
                >
                  <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
                    <PortfolioItem
                      cardImage="item-images/react-social-preview.png"
                      cardTitle="ReactSocial"
                      cardDescription="A social media app featuring the ability to post text and images, and comment on user posts. Built with reactjs, firebase, and materialui"
                      deployURL="https://social-media-app-mso.web.app/"
                      codeURL="https://github.com/markohanesian/ReactSocial"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
                    <PortfolioItem
                      cardImage="item-images/git-good.png"
                      cardTitle="Git Good"
                      cardDescription="Git language cheatsheet with copy to clipboard. Built with ReactJS and features a custom logo design"
                      deployURL="https://git-cheatsheet-mso.netlify.app/"
                      codeURL="https://github.com/markohanesian/git-cheatsheet-mso"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
                    <PortfolioItem
                      cardImage="item-images/former-mso.png"
                      cardTitle="Former"
                      cardDescription="Form creator website with export to pdf"
                      deployURL="https://former-mso.netlify.app/"
                      codeURL="https://github.com/markohanesian/former-mso"
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
  );
}

export default App;
