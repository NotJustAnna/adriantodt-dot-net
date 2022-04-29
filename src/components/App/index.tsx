import * as React from 'react';
import AppNavbar from '../AppNavbar';
import styled from '@mui/material/styles/styled';
import AppContent from '../AppContent';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function App() {
  return <>
    <AppNavbar/>
    <Offset/>
    <AppContent/>
  </>;
}
