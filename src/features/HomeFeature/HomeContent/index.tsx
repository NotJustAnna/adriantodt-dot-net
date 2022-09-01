import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Copyright from '../../../components/Copyright';
import * as React from 'react';
import tokenlab from '../../../assets/tokenlab.logo.min.jpg';
import HomeJourney from '../HomeJourney';

export function Things() {
  return <>
    <Typography variant="h4" component="h2" gutterBottom>
      Things I've done
    </Typography>
    <List sx={{ pt: 0, pb: 0, pl: '0.25em' }}>
      <ListItem alignItems="flex-start" sx={{ p: 0 }}>
        <ListItemAvatar>
          <Avatar alt="Lin" src={tokenlab}/>
        </ListItemAvatar>
        <ListItemText
          primary="Lin"
          secondary="Graduated in 2017 as a Computer System Technician"
        />
      </ListItem>
      <ListItem alignItems="flex-start" sx={{ p: 0 }}>
        <ListItemAvatar>
          <Avatar alt="Federal University of São Carlos" src={tokenlab}/>
        </ListItemAvatar>
        <ListItemText
          primary="Federal University of São Carlos"
          secondary="Computer Science Bachelor Student since 2018"
        />
      </ListItem>
    </List>
  </>;
}

export default function HomeContent() {
  return <Container maxWidth="lg">
    <Box sx={{ my: 4 }}>
      <HomeJourney/>
      <Divider sx={{ my: 2.5 }}/>
      <Things/>
      <Copyright/>
    </Box>
  </Container>;
}
