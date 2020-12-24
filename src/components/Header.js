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
    fontSize: "2rem",
    fontWeight: "300",
    marginTop: '1rem'
  },
  subtitle: {
    fontSize: "0.8rem",
    fontWeight: "400",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: "7rem"
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.image} src="imgs/mark-headshot.png" alt="mark"></img>
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
        Full Stack Developer | Designer | Photographer
      </Typography>
      <Typography
        className={classes.subtitle}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        Visit my photography site <a href="https://mark.squarespace.com/">here</a>
      </Typography>
    </div>
  );
}
