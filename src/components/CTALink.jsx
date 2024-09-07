import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

// Styled component for the ButtonLink
const CTALink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gridColumnGap: '.5rem',
  gridRowGap: '.5rem',
  padding: '1rem 4rem',
  fontSize: '18px',
  backgroundColor: theme.palette.mode === 'dark' ? '#333' : 'black',  // Adjusts based on theme mode
  color: theme.palette.mode === 'dark' ? 'var(--white)' : 'white',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#444' : theme.palette.grey[800], // Optional hover effect
  },
  width: 'fit-content'
}));

const ButtonLink = ({ to, children, className, ...props }) => {
  const theme = useTheme(); // Access the current theme

  return (
    <CTALink theme={theme} to={to} className={className} {...props}>
      {children}
    </CTALink>
  );
};

export default ButtonLink;
