import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Link} from "@mui/material";
// import Button from '@mui/material/Button';

const useStyles = makeStyles({
  image: {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    display: 'flex',
    alignSelf: 'center',
    marginBottom: "1rem"
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
    alignSelf: "center",
    textAlign: 'center',
    margin: "2rem",
    maxWidth: "300px"
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.image} src="mark-headshot-2024.jpg" alt="mark"></img>
      <Typography
        className={classes.heading}
        gutterBottom
        variant="h4"
        component="h1"
      >
        Hello, I'm Mark
      </Typography>
      <Typography
        variant="body1"
        component="p"
      >
        I'm a full stack web developer and ui/ux designer, and I made this website with ReactJS and MaterialUI
        {/* <Button color="secondary" href="https://github.com/markohanesian/react-portfolio-mso" target="blank">Here</Button> */}
      </Typography>
      <br></br>
      <Link
        href="https://docs.google.com/document/d/13YCjJR0GZG3vrNRGLlTZpAYYAn5Oj5OahaxFcmQakMQ/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Mark's resume"
      >
        Resume
      </Link>  <Link
        href="https://www.linkedin.com/in/mark-ohanesian/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Mark's LinkedIn"
      >
        LinkedIn
      </Link>  </div>
  );
}
