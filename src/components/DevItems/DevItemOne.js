import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="public\imgs\happy-nappers.png"
          title="Happy Nappers"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Happy Nappers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A react.js web application that assists parents with their baby's
            sleep time and playtime by providing a simple interface for
            switching between sleep and play music and visuals
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://happy-nappers.herokuapp.com/">
          Deploy
        </Button>
        <Button size="small" color="primary" href="https://github.com/markohanesian/happy-nappers">
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
