import React from 'react';
import { makeStyles } from '@mui/core/styles';
import BottomNavigation from '@mui/core/BottomNavigation';
import BottomNavigationAction from '@mui/core/BottomNavigationAction';
import CodeIcon from '@mui/icons/Code';
import BrushIcon from '@mui/icons/Brush';
import CameraAlt from '@mui/icons/CameraAlt';
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
