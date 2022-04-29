import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextTransition, { presets } from 'react-text-transition';
import React from 'react';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab';
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

const things = ['back-end', 'applications', 'AWS', 'Serverless', 'projects'];

function Over(props: { toggled: boolean }) {
  return <TextTransition inline text={props.toggled ? 'over-' : ''} springConfig={presets.wobbly}/>;
}

function Things() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIndex(index => (index + 1) % things.length), 3000);
    return () => clearTimeout(id);
  }, []);

  return <TextTransition inline text={things[index % things.length]} springConfig={presets.gentle}/>;
}

export default function Introduction() {
  const [toggled, setToggled] = React.useState(false);
  const toggle = () => setToggled(!toggled);

  return <Box sx={{ py: 4, bgcolor: '#943900' }}>
    <Container maxWidth="md">
      <Typography variant="h6" component="div" fontWeight={400}>Hi, my name is</Typography>
      <Typography variant="h1" component="div" fontWeight={500}>Adrian Todt.</Typography>
      <Typography variant="h4" component="div" fontWeight={300} lineHeight={1.5}>
        <div onClick={toggle}>I <Over toggled={toggled}/>engineer solutions for <Things/>.</div>
      </Typography>
      <Typography>I'm a back-end focused full-stack software engineer based in Brazil.</Typography>
      <Box sx={{ mt: 3 }}>
        <IconButton aria-label="LinkedIn" title="LinkedIn" href="https://linkedin.com/in/adriantodt">
          <FontAwesomeIcon icon={faLinkedinIn} mask={faCircle} transform="shrink-5"/>
        </IconButton>
        <IconButton aria-label="Twitter" title="Twitter" href="https://twitter.com/adriantodt">
          <FontAwesomeIcon icon={faTwitter} mask={faCircle} transform="shrink-5"/>
        </IconButton>
        <IconButton aria-label="Discord" href="https://twitter.com/adriantodt">
          <FontAwesomeIcon icon={faDiscord} mask={faCircle} transform="shrink-6"/>
        </IconButton>
        <IconButton aria-label="E-mail" href="https://twitter.com/adriantodt">
          <FontAwesomeIcon icon={faEnvelope} mask={faCircle} transform="shrink-5"/>
        </IconButton>
        <IconButton aria-label="GitHub" href="https://twitter.com/adriantodt">
          <FontAwesomeIcon icon={faGithub}/>
        </IconButton>
        <IconButton aria-label="Gitlab" href="https://twitter.com/adriantodt">
          <FontAwesomeIcon icon={faGitlab} mask={faCircle} transform="shrink-3 down-0.5"/>
        </IconButton>
        <IconButton aria-label="Steam" href="https://twitter.com/adriantodt">
          <FontAwesomeIcon icon={faSteam}/>
        </IconButton>
        <IconButton aria-label="Dockerhub" href="https://twitter.com/adriantodt">
          <FontAwesomeIcon icon={faDocker} mask={faCircle} transform="shrink-6"/>
        </IconButton>
      </Box>
    </Container>
  </Box>;
}
