import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'flex-start',
      margin: '1rem'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 0 auto',
      padding: '0.5rem',
      maxWidth: '200px'
    },
    image: {
      width: 120,
      marginRight: '1rem'
    },
    title: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    description: {
      fontSize: "0.7rem",
      fontWeight: "400",
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
  }),
);

export default function MediaControlCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardMedia
        className={classes.image}
        image={props.cardImage}
        title="Git Good website image"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} component="h5" variant="h5">
            {props.cardTitle}
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary">
            {props.cardDescription}
          </Typography>
        </CardContent>
        <div className={classes.buttons}>
          <Button color="secondary" href={props.deployURL}>Deploy</Button>
          <Button color="secondary" href={props.codeURL}>Code</Button>
        </div>
      </div>
    </Card>
  );
}
