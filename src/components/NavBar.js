import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import CameraAlt from '@material-ui/icons/CameraAlt';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  NavButtons: {
    margin: '.5rem'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleChange = (event, newValue) => {
      history.push(`/${newValue}`);
      setValue(newValue);
    };
    
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange} 
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.NavButtons} value="home"  label="Development" icon={<CodeIcon />} />
      <BottomNavigationAction className={classes.NavButtons} value="design"  label="Design" icon={<BrushIcon />} />
      <BottomNavigationAction className={classes.NavButtons} value="photography" label="Photography" icon={<CameraAlt />} />
    </BottomNavigation>
  );
}
