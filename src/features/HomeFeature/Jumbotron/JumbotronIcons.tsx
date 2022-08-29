import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab';
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import React from 'react';

export default function JumbotronIcons() {
  return <>
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
  </>;
}
