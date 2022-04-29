import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Introduction from '../Introduction';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function DefaultContent() {
  return <Container maxWidth="xl">
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App example with TypeScript
      </Typography>
      <Copyright/>
    </Box>
  </Container>;
}

export default function AppContent() {
  return <>
    <Introduction/>
    <DefaultContent/>
  </>;
}
