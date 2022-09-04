import Navbar from '../../components/Navbar';
import * as React from 'react';
import styled from '@mui/material/styles/styled';
import HomeJumbotron from './HomeJumbotron';
import { HomeContext } from './context';
import Terminal from './Terminal';
import ShootingStars from './ShootingStars';
import HomeContent from './HomeContent';
import Footer from '../../components/Footer';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function HomeFeature() {
  const [open, setOpen] = React.useState(false);
  const [shootingStars, setShootingStars] = React.useState(false);
  const enableShootingStars = () => setShootingStars(true);
  const disableShootingStars = () => setShootingStars(false);
  const handleOpen = () => {
    localStorage.setItem('__terminal_known', 'true');
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  return <HomeContext.Provider value={{ openTerminal: handleOpen, disableShootingStars }}>
    <Navbar/>
    <Offset/>
    {shootingStars ? <ShootingStars/> : <HomeJumbotron/>}
    <HomeContent/>
    <Footer/>
    <Terminal open={open} handleClose={handleClose} enableShootingStars={enableShootingStars}/>
  </HomeContext.Provider>;
}
