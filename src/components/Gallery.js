import React from "react";
import { makeStyles, createStyles, Theme } from "@mui/core/styles";
import Paper from "@mui/core/Paper";
import Grid from "@mui/core/Grid";
import Typography from "@mui/core/Typography";
import Button from "@mui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    image: {
      display: "flex",
      height: "auto",
      width: "100%"
    }
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
      <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
            className={classes.subtitle}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Visit my photography site<Button color="secondary" href="https://mark.squarespace.com/">Here</Button>

          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img className={classes.image} src="gallery-images/karine-bottle.jpg" alt="bottle"></img></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img className={classes.image} src="gallery-images/shirts.jpg" alt="portrait"></img></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img className={classes.image} src="gallery-images/stella-fashion.jpg" alt=""></img></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img className={classes.image} src="gallery-images/corin-portrait.jpg" alt=""></img></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
