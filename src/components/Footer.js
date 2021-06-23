import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CssBaseline, Toolbar } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
// social link icons
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// date subcomponent
import CurrentYear from './CurrentYear';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    footer: {
      top: 'auto',
      bottom: 0,
      backgroundColor: 'transparent',
      marginTop: '2rem',
    },
    icon: {
      color: 'black'
    },
    grow: {
      flexGrow: 1,
    },
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid position="relative" color="primary" className={classes.footer}>
        <Toolbar>
          <div>
            <Typography variant="body1" color="black" noWrap>
                <CurrentYear />
              </Typography>
          </div>
          <div className={classes.grow} />
          <IconButton className={classes.icon} href="mailto:mso872@gmail.com">
            <MailOutlineIcon />
          </IconButton>
          <IconButton className={classes.icon} href="https://github.com/markohanesian">
            <GitHubIcon />
          </IconButton>
          <IconButton className={classes.icon} href="https://www.linkedin.com/in/mark-ohanesian/">
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </Grid>
    </React.Fragment>
  );
}