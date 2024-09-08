import React from "react";
import { makeStyles } from "@mui/styles";
import SocialBar from './SocialBar';

const useStyles = makeStyles({
  image: {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    display: "flex",
    alignSelf: "center",
    marginBottom: "1rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "300",
    marginTop: "1rem",
    fontFamily: 'Marcellus, serif'
  },
  subtitle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: "1rem",
    fontWeight: "400",
    maxWidth: "20rem",
    fontFamily: 'Marcellus, serif'
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    margin: "2rem",
    maxWidth: "300px",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%", // Make sure the container takes full width
    marginTop: "2rem", // Add some space between the text and the links
  },
  link: {
    padding: "1rem", 
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src="mark-headshot-2024.jpg"
        alt="mark"
      ></img>
     <SocialBar />
    </div>
  );
}
