import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

// Styled component for the ButtonLink
const ProductLinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  width: "50vw",
  borderRadius: '12px',
  gridColumnGap: '.5rem',
  gridRowGap: '.5rem',
  margin: "1rem 0",
  padding: '.75rem',
  fontSize: '18px',
  backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',  
  color: theme.palette.mode === 'dark' ? 'var(--white)' : 'white',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#444' : theme.palette.grey[800], // Optional hover effect
  },
}));


export default function ProductLink({ href, className, ...props }) {
  const theme = useTheme(); // Access the current theme

  return (
    <ProductLinkStyled theme={theme} href={href} className={className} {...props} />
  );
};

