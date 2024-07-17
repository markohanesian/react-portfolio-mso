import React from 'react';
import { makeStyles } from '@mui/styles';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import specific icons from react-icons
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

const useStyles = makeStyles({
  icon: {
    margin: '0.2rem',
    fontSize: '1rem', 
  },
});

const iconMap = {
  react: FaReact,
  nodejs: FaNodeJs,
  mongodb: FaDatabase,
  // Add more icons as needed
};

export default function TechIcon({ iconName, tooltip, badgeContent, badgeColor }) {
  const classes = useStyles();
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" is not supported.`);
    return null;
  }

  return (
    <Tooltip title={tooltip} arrow>
      <Badge badgeContent={badgeContent}>
        <IconComponent className={classes.icon} />
      </Badge>
    </Tooltip>
  );
}
