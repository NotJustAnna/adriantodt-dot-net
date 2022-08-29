import Navbar from '../../components/Navbar';
import * as React from 'react';
import styled from '@mui/material/styles/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Jumbotron from './Jumbotron';
import Copyright from '../../components/Copyright';
import ShootingStars from './ShootingStars';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

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

export default function HomeFeature() {
  return <>
    <Navbar/>
    <Offset/>
    <ShootingStars/>
    <DefaultContent/>
  </>;
}
