import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  image: {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    display: 'flex',
    alignSelf: 'center',
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "300",
    marginTop: '1rem'
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: "1rem",
    fontWeight: "400",
    maxWidth: '20rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    textAlign: 'center',
    marginBottom: "2rem"
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.image} src="mark-headshot.jpg" alt="mark"></img>
      <Typography
        className={classes.heading}
        gutterBottom
        variant="h1"
        component="h2"
      >
        Hello, I'm Mark
      </Typography>
      <Typography
        className={classes.subtitle}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        Hi, I'm Mark, full stack web developer, and I made this website with ReactJS and MaterialUI.
      </Typography>
    </div>
  );
}
