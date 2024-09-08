import React from 'react';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

// Styled component for the ButtonLink
const ProductLinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  width: "50vw",
  borderRadius: '12px',
  gridColumnGap: '.5rem',
  gridRowGap: '.5rem',
  margin: ".5rem 0",
  padding: '.5rem',
  fontSize: '18px',
  border: theme.palette.mode === 'dark' ? '1px solid white' : '1px solid black',  
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#444' : theme.palette.grey[600], // Optional hover effect
    color: theme.palette.mode === 'dark' ? 'white' : theme.palette.grey[100], // Optional hover effect

  },
}));


export default function ProductLink({ href, className, ...props }) {
  const theme = useTheme(); // Access the current theme

  return (
    <ProductLinkStyled target="_blank" rel="noopener" theme={theme} href={href} className={className} {...props} />
  );
};

