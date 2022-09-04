import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Copyright from '../../../components/Copyright';
import * as React from 'react';
import HomeJourney from '../HomeJourney';
import { ProjectList } from './ProjectList';

export default function HomeContent() {
  return <Container maxWidth="lg">
    <Box sx={{ my: 4 }}>
      <HomeJourney/>
      <Divider sx={{ my: 2.5 }}/>
      <ProjectList/>
      <Copyright/>
    </Box>
  </Container>;
}
