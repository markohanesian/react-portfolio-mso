import React from "react";
import { Theme, createStyles, makeStyles } from '@mui/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "1rem",
      padding: "1rem",
      maxWidth: "300px",
      minHeight: "400px"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      // flex: '1 0 auto',
      padding: "0.5rem",
      maxWidth: "200px",
    },
  
    image: {
      height: "200px",
      width: "200px"    },
    title: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    description: {
      fontSize: ".8rem",
      fontWeight: "400",
      marginTop: "1rem",
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-end",
    },
  })
);

export default function PortfolioItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <div className={classes.imageContainer}>
        <CardMedia
          className={classes.image}
          image={props.cardImage}
          title={`thumbnail of${props.cardTitle}`}
          />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} component="h5" variant="h5">
            {props.cardTitle}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
          >
            {props.cardDescription}
          </Typography>
        </CardContent>
        <div className={classes.buttons}>
          {props.deployURL && (
            <Button color="secondary" href={props.deployURL} target="blank">
              Site
            </Button>
          )}
          {props.codeURL && (
            <Button color="secondary" href={props.codeURL} target="blank">
              Code
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
