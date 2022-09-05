import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab';
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
import React from 'react';
import { HomeContext } from '../context';
import { TransitionProps } from '@mui/material/transitions';
import { Tooltip } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any>; },
  ref: React.Ref<unknown>,
) {
  // noinspection RequiredAttributes
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DiscordPortal(props: { open: boolean; onClose: () => void; }) {
  const { open, onClose } = props;
  const thing = 'gZWEuYQG99/gg.pprocsipp'
    .replaceAll('pp', 'd')
    .split('')
    .reverse()
    .join('');

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Contact me on Discord</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Join my "Gateway" Discord server and send me a message on DMs.
        </DialogContentText>
      </DialogContent>
      <DialogActions>{open && <Button href={`https://${thing}`}>Join</Button>}</DialogActions>
    </Dialog>
  );
}

export default function JumbotronIcons() {
  const isTerminalKnown = typeof window !== 'undefined' ?  window.localStorage.getItem('__terminal_known') === 'true' : false;
  const [open, setOpen] = React.useState(false);

  const [copied, setCopied] = React.useState(false);
  const copyToClipboard = () => {
    const thing = 'adriantodt.net'.replace(/^(\w+)(\.\w+)$/, '$1@$1$2')
    navigator.clipboard.writeText(thing).then(
      () => setCopied(true),
      () => setCopied(false),
    );
  }

  return <>
    <Tooltip title="LinkedIn">
      <IconButton aria-label="LinkedIn" href="https://linkedin.com/in/adriantodt">
        <FontAwesomeIcon icon={faLinkedinIn} mask={faCircle} transform="shrink-5 down-0.4"/>
      </IconButton>
    </Tooltip>
    <Tooltip title="Twitter">
      <IconButton aria-label="Twitter" href="https://twitter.com/adriantodt">
        <FontAwesomeIcon icon={faTwitter} mask={faCircle} transform="shrink-5 down-0.3 right-0.2"/>
      </IconButton>
    </Tooltip>
    <Tooltip title="Discord">
      <IconButton aria-label="Discord" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faDiscord} mask={faCircle} transform="shrink-5.5"/>
      </IconButton>
    </Tooltip>
    <DiscordPortal open={open} onClose={() => setOpen(false)}/>
    <Tooltip title="E-mail">
      <IconButton aria-label="E-mail" onClick={copyToClipboard}>
        <FontAwesomeIcon icon={faEnvelope} mask={faCircle} transform="shrink-5"/>
      </IconButton>
    </Tooltip>
    <Snackbar open={copied} autoHideDuration={2000} onClose={() => setCopied(false)}>
      <Alert onClose={() => setCopied(false)} severity="success">Copied to Clipboard!</Alert>
    </Snackbar>
    <Tooltip title="GitHub">
      <IconButton aria-label="GitHub" href="https://github.com/adriantodt">
        <FontAwesomeIcon icon={faGithub}/>
      </IconButton>
    </Tooltip>
    <Tooltip title="GitLab">
      <IconButton aria-label="GitLab" href="https://gitlab.com/adriantodt">
        <FontAwesomeIcon icon={faGitlab} mask={faCircle} transform="shrink-4 down-0.7"/>
      </IconButton>
    </Tooltip>
    <Tooltip title="Steam">
      <IconButton aria-label="Steam" href="https://steamcommunity.com/id/adriantodt/">
        <FontAwesomeIcon icon={faSteam}/>
      </IconButton>
    </Tooltip>
    <Tooltip title="Docker Hub">
      <IconButton aria-label="Docker Hub" href="https://hub.docker.com/u/adriantodt">
        <FontAwesomeIcon icon={faDocker} mask={faCircle} transform="shrink-6"/>
      </IconButton>
    </Tooltip>
    <Tooltip title="CodersRank">
      <IconButton aria-label="CodersRank" href="https://profile.codersrank.io/user/adriantodt">
        <FontAwesomeIcon icon={faChartSimple} mask={faCircle} transform="shrink-5"/>
      </IconButton>
    </Tooltip>
    <HomeContext.Consumer>
      {({ openTerminal }) =>
        <Tooltip title={isTerminalKnown ? 'Terminal' : '???'}>
          <IconButton aria-label="Terminal" onClick={openTerminal}>
            <FontAwesomeIcon icon={faTerminal} mask={faCircle} transform="shrink-8.5 down-0.1"/>
          </IconButton>
        </Tooltip>}
    </HomeContext.Consumer>
  </>;
}
