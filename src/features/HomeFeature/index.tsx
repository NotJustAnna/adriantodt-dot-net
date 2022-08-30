import Navbar from '../../components/Navbar';
import * as React from 'react';
import styled from '@mui/material/styles/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Jumbotron from './Jumbotron';
import Copyright from '../../components/Copyright';
import { HomeContext } from './context';
import Terminal from './Terminal';
import ShootingStars from './ShootingStars';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function DefaultContent() {
  return <Container maxWidth="lg">
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App example with TypeScript
      </Typography>
      <Copyright/>
    </Box>
  </Container>;
}

export default function HomeFeature() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [shootingStars, setShootingStars] = React.useState(false);
  const enableShootingStars = () => setShootingStars(true);
  const disableShootingStars = () => setShootingStars(false);

  return <HomeContext.Provider value={{ openTerminal: handleOpen, disableShootingStars }}>
    <Navbar/>
    <Offset/>
    {shootingStars ? <ShootingStars/> : <Jumbotron/>}
    <DefaultContent/>
    <Terminal open={open} handleClose={handleClose} enableShootingStars={enableShootingStars}/>
  </HomeContext.Provider>;
}
