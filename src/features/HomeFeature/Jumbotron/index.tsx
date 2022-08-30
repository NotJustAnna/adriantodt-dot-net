import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import JumbotronGreeting from './JumbotronGreeting';
import JumbotronIcons from './JumbotronIcons';

export default function Index() {
  return <Box sx={{ py: 4, bgcolor: '#a13e00' }}>
    <Container maxWidth="md">
      <Box sx={{ mt: 3 }}>
        <JumbotronGreeting/>
        <JumbotronIcons/>
      </Box>
    </Container>
  </Box>;
}
