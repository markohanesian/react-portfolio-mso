import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
// import CameraAlt from '@mui/icons-material/CameraAlt';
import { useHistory, useLocation } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState('home');
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/design') {
      setValue('design');
    } else {
      setValue('home');
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    history.push(`/${newValue}`);
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{background: 'none'}}
    >
      <BottomNavigationAction value="home" label="Development" icon={<CodeIcon />} />
      <BottomNavigationAction value="design" label="Design" icon={<BrushIcon />} />
      {/* <BottomNavigationAction className={classes.NavButtons} value="photography" label="Photography" icon={<CameraAlt />} /> */}
    </BottomNavigation>
  );
}
