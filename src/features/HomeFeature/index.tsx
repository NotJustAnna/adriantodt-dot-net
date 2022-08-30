import Navbar from '../../components/Navbar';
import * as React from 'react';
import styled from '@mui/material/styles/styled';
import Jumbotron from './Jumbotron';
import { HomeContext } from './context';
import Terminal from './Terminal';
import ShootingStars from './ShootingStars';
import HomeContent from './HomeContent';
import { Alert, Snackbar } from '@mui/material';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function HomeFeature() {
  const [open, setOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [shootingStars, setShootingStars] = React.useState(false);
  const enableShootingStars = () => setShootingStars(true);
  const disableShootingStars = () => setShootingStars(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (text?: string) => {
    setOpen(false);
    if (text) {
      setSnackbarMessage(text);
    }
  };

  return <HomeContext.Provider value={{ openTerminal: handleOpen, disableShootingStars }}>
    <Navbar/>
    <Offset/>
    {shootingStars ? <ShootingStars/> : <Jumbotron/>}
    <HomeContent/>
    <Terminal open={open} handleClose={handleClose} enableShootingStars={enableShootingStars}/>
    <Snackbar open={snackbarMessage.length > 0} autoHideDuration={2000} onClose={() => setSnackbarMessage('')}>
      <Alert onClose={() => setSnackbarMessage('')} severity="error">
        {snackbarMessage}
      </Alert>
    </Snackbar>
  </HomeContext.Provider>;
}
