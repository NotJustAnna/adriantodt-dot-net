import Typography from '@mui/material/Typography';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import Paper from '@mui/material/Paper';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ifsp from '../../../assets/ifsp.logo.min.jpg';
import ufscar from '../../../assets/ufscar.logo.min.jpg';
import tokenlab from '../../../assets/tokenlab.logo.min.jpg';
import * as React from 'react';

export default function HomeJourney() {
  return <>
    <Typography variant="h4" component="h2" gutterBottom>My Journey</Typography>
    <Paper sx={{ pt: 2, pb: 1.5, px: 2.5 }}>
      <Stepper orientation="vertical" connector={<></>} sx={{
        '& .MuiStepIcon-root.Mui-active': { color: '#e85900' },
        '& .MuiStepIcon-text': { fill: '#ffffff' },
      }}>
        <Step active>
          <StepLabel>Self-taught Programmer</StepLabel>
          <StepContent sx={{ pb: 1 }}>
            <Typography>
              Started learning programming since 2013, with my first programming language being Lua, then batch files.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              After that, I started learning HTML and PHP, then C#, Java and Kotlin.
            </Typography>
          </StepContent>
        </Step>
        <Step active>
          <StepLabel>Computer System Technician & Computer Science Bachelor Student</StepLabel>
          <StepContent sx={{ pb: 1 }}>
            <List sx={{ pt: 0, pb: 0, pl: 0.5 }}>
              <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar alt="Federal Institute of São Paulo" src={ifsp}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Federal Institute of São Paulo"
                  secondary="Graduated in 2017 as a Computer System Technician."
                />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar alt="Federal University of São Carlos" src={ufscar}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Federal University of São Carlos"
                  secondary="Entered in 2018 as a Computer Science Bachelor Student."
                />
              </ListItem>
            </List>
          </StepContent>
        </Step>
        <Step active>
          <StepLabel>Mid Software Programmer</StepLabel>
          <StepContent sx={{ pb: 1 }}>
            <List sx={{ pt: 0, pb: 0, pl: 0.5 }}>
              <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar alt="Tokenlab" src={tokenlab}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Tokenlab"
                  secondary="Working since 2020 in development of back-end systems with Node.js and TypeScript."
                />
              </ListItem>
            </List>
          </StepContent>
        </Step>
      </Stepper>
    </Paper>
  </>;
}
