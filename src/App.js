import React, { useState } from "react";
import { Switch, Grid, Typography, Button, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
// components

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            ></Switch>
          </Grid>
          <Grid class="grid-default">
            <Typography variant="h4" component="h2" gutterBottom>
              Hello, I'm Mark
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Full Stack Developer ++ Designer
            </Typography>
          </Grid>
          <Grid class="grid-default">
            <Button>button 1</Button>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
