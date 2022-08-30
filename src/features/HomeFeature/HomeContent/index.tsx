import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../../../components/Copyright';
import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, StepContent, StepLabel } from '@mui/material';
import { ActiveStep } from './hacks';
import ifsp from '../../../assets/ifsp.logo.min.jpg';
import ufscar from '../../../assets/ufscar.logo.min.jpg';
import tokenlab from '../../../assets/tokenlab.logo.min.jpg';

function Journey() {
  return <>
    <Typography variant="h4" component="h1" gutterBottom>
      My Journey
    </Typography>
    <Stepper orientation="vertical"
             connector={<></>}
             sx={{
               '& .MuiStepIcon-root.Mui-active': { color: '#e85900' },
               '& .MuiStepIcon-text': { fill: '#ffffff' },
             }}>
      <ActiveStep>
        <StepLabel>Self-taught Programmer</StepLabel>
        <StepContent sx={{ pb: '0.5em' }}>
          Started learning programming since 2013.
        </StepContent>
      </ActiveStep>
      <ActiveStep>
        <StepLabel>Computer System Technician & Computer Science Bachelor Student</StepLabel>
        <StepContent sx={{ pb: '0.5em' }}>
          <List sx={{ pt: 0, pb: 0, pl: '0.25em' }}>
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar alt="Federal Institute of São Paulo" src={ifsp}/>
              </ListItemAvatar>
              <ListItemText
                primary="Federal Institute of São Paulo"
                secondary="Graduated in 2017 as a Computer System Technician"
              />
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar alt="Federal University of São Carlos" src={ufscar}/>
              </ListItemAvatar>
              <ListItemText
                primary="Federal University of São Carlos"
                secondary="Computer Science Bachelor Student since 2018"
              />
            </ListItem>
          </List>
        </StepContent>
      </ActiveStep>
      <ActiveStep>
        <StepLabel>Mid Software Programmer</StepLabel>
        <StepContent sx={{ pb: '0.5em' }}>
          <List sx={{ pt: 0, pb: 0, pl: '0.25em' }}>
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar alt="Tokenlab" src={tokenlab}/>
              </ListItemAvatar>
              <ListItemText
                primary="Tokenlab"
                secondary="Working since 2020 in development of back-end systems with TypeScript and Node.js"
              />
            </ListItem>
          </List>
        </StepContent>
      </ActiveStep>
    </Stepper>
  </>;
}

export default function HomeContent() {
  return <Container maxWidth="lg">
    <Box sx={{ my: 4 }}>
      <Journey/>
      <Copyright/>
    </Box>
  </Container>;
}
