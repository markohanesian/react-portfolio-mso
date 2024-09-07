import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated imports for v6
import { Grid, Paper } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactSocialCaseStudy from "./pages/Development";
import Development from "./pages/Development";
import Design from "./pages/Design";
import NavBar from "./components/NavBar"; // Import the NavBar component
import { makeStyles } from "@mui/styles";
import DarkModeToggle from "react-dark-mode-toggle";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  app: {
    display: "flex",
    flexDirection: "column",
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
        <Router>
          {/* Render the NavBar component */}
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode}><DarkModeToggle
            size={60}
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          /></NavBar>
          <div>
            <Routes>
              {" "}
              {/* Replaces Switch with Routes for v6 */}
              <Route
                path="/photography"
                element={() => {
                  window.location.href = "http://markohanesian.photography/";
                  return null;
                }}
              />
              <Route
                path="/design"
                element={
                  <Design />
                }
              />
              <Route
                path="/react-social-case-study"
                element={<ReactSocialCaseStudy />}
              />
              <Route
                path="/development"
                element={<Development />}
              />
              <Route
                path="/"
                element={
                  <Grid
                    container
                    spacing={2}
                    className={classes.gridContainer}
                    sx={{ maxWidth: "800px", margin: "0 auto" }}
                  >
                    <Header />
                  </Grid>
                }
              />
            </Routes>
          </div>
        </Router>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
