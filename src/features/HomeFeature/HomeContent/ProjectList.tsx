import List, { ListProps } from '@mui/material/List';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { blueGrey, grey } from '@mui/material/colors';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { Tooltip } from '@mui/material';

const projectListSx: ListProps['sx'] = {
  p: 0, pb: 1,
  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1,
  '& .MuiPaper-root': {
    p: 1, pl: 2,
    flexGrow: 1, width: '100%',
    '& .MuiListItem-root': {
      p: 0,
      '& .MuiListItemAvatar-root': {
        pr: 1.5, my: 1,
        '& .MuiAvatar-root': {
          width: 56, height: 56,
        },
      },
    },
  },
};

const subProjectListSx: ListProps['sx'] = {
  color: '#fff',
  py: 0,
  '& .MuiListItemAvatar-root': {
    pr: 1, my: 1,
    '& .MuiAvatar-root': {
      width: '40px !important', height: '40px !important',
    },
  },
};

const Logo = styled('img')({ margin: 3 });

function PaperListItem(props: ListItemProps<'div'>) {
  return <Paper component="li"><ListItem component="div" alignItems="flex-start" {...props} /></Paper>
}

export function ListItemTitle(props: { alignItems?: string, text: string, children: React.ReactNode }) {
  const { text, children, alignItems } = props;
  return <Box sx={{ display: 'flex', alignItems: alignItems ?? 'flex-end', pb: 0.5 }}>
    <Box sx={{ flexGrow: 1 }} children={text}/>
    <Box sx={{ mr: 0.5 }} children={children}/>
  </Box>;
}

function LinProject() {
  return <PaperListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: '#151515' }}>
        <Logo src="/assets/lin.min.svg" alt="Lin"/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <ListItemTitle text="Lin">
          <Tooltip title="Source Code">
            <IconButton size="small" aria-label="Source Code" href="https://github.com/adriantodt/Lin">
              <FontAwesomeIcon icon={faGithub}/>
            </IconButton>
          </Tooltip>
        </ListItemTitle>
      }
      secondaryTypographyProps={{ component: 'div' }}
      secondary={
        <>
          <Typography variant="body2" gutterBottom>
            Lin is a in-development lean programming language, designed from the ground up to be embedded into anything
            and everything.
          </Typography>
          <Typography variant="body2" gutterBottom>
            The language borrows heavily from Kotlin and JavaScript, and is designed to be a fast scripting language
            that
            can be embedded into other applications. Lin is being developed in Kotlin Multiplatform, and is designed to
            be
            compiled to JavaScript, JVM, and native code.
          </Typography>
          <List sx={subProjectListSx}>
            <TartarSubProject/>
            <LeanVMSubProject/>
          </List>
        </>
      }
    />
  </PaperListItem>;
}

function TartarSubProject() {
  return <ListItem component="div" alignItems="flex-start">
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: '#151515', color: grey[100] }}>
        Ta
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <ListItemTitle text="Tartar">
          <Tooltip title="Source Code">
            <IconButton size="small" aria-label="Source Code" href="https://github.com/adriantodt/tartar">
              <FontAwesomeIcon icon={faGithub}/>
            </IconButton>
          </Tooltip>
        </ListItemTitle>
      }
      secondaryTypographyProps={{ component: 'div' }}
      secondary={<>
        <Typography variant="body2" gutterBottom>
          Tartar is a Kotlin Multiplatform library for trie-based lexical analysis and pratt-parsing, with its API being
          exposed to developers as a DSL.
        </Typography>
        <Typography variant="body2">
          This library was created by packing most tools that I personally use in my programming language projects, and
          packing them into a single library. Tartar is currently being used in Lin and many other of my projects.
        </Typography>
      </>}
    />
  </ListItem>;
}

function LeanVMSubProject() {
  return <ListItem component="div" alignItems="flex-start">
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: '#151515' }}>
        <Logo src="/assets/leanvm.min.svg" alt="LeanVM"/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <ListItemTitle text="LeanVM">
          <Tooltip title="Source Code">
            <IconButton size="small" aria-label="Source Code" href="https://github.com/adriantodt/leanvm">
              <FontAwesomeIcon icon={faGithub}/>
            </IconButton>
          </Tooltip>
        </ListItemTitle>
      }
      secondaryTypographyProps={{ component: 'div' }}
      secondary={<>
        <Typography variant="body2">
          LeanVM is a lean and fast bytecode and virtual machine, originally designed for Lin, but separated into its
          own project for easier development and to isolate the bytecode from the language.
        </Typography>
      </>}
    />
  </ListItem>;
}

function LunarrProject() {
  return <PaperListItem>
    <ListItemAvatar>
      <Avatar alt="Lunarr" sx={{ bgcolor: blueGrey[200] }}>
        <FontAwesomeIcon icon={faMoon} mask={faCircle} transform="shrink-5 rotate-350 left-0.4 bottom-0.4"
                         size="2x"/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <ListItemTitle text="Lunarr">
          <Tooltip title="Source Code">
            <IconButton size="small" aria-label="Source Code" href="https://github.com/adriantodt/lunar">
              <FontAwesomeIcon icon={faGithub}/>
            </IconButton>
          </Tooltip>
        </ListItemTitle>
      }
      secondaryTypographyProps={{ component: 'div' }}
      secondary={<>
        <Typography variant="body2" gutterBottom>
          Lunarr is a in-development system which oversees and synchronizes many media automation, media players and
          content requesting services, such as Plex, Ombi, Sonarr, Radarr, and many others.
        </Typography>
        <Typography variant="body2">
          The system is designed to be a single point of control for all media-related services, and to be able to
          synchronize and automate many tasks, such as requesting new content, allowing or denying requests, and
          providing a unified feed of events. Lunarr is being developed in TypeScript with Node.js and React, and allows
          users to interact with the system through a web interface, a Discord bot, and a REST API.
        </Typography>
      </>}
    />
  </PaperListItem>;
}

function NanoflakesProject() {
  return <PaperListItem>
    <ListItemAvatar>
      <Avatar src="/assets/nanoflakes.min.png" alt="Nanoflakes"/>
    </ListItemAvatar>
    <ListItemText
      primary={
        <ListItemTitle text="Nanoflakes">
          <Tooltip title="Source Code">
            <IconButton size="small" aria-label="Source Code" href="https://github.com/nanoflakes">
              <FontAwesomeIcon icon={faGithub}/>
            </IconButton>
          </Tooltip>
        </ListItemTitle>
      }
      secondaryTypographyProps={{ component: 'div' }}
      secondary={<>
        <Typography variant="body2" gutterBottom>
          Nanoflakes is a standard for unique IDs, which are designed to be as small as possible, while still being
          unique. The standard is designed to fit in a 64-bit integer, and is backwards-compatible with Twitter's
          Snowflakes.
        </Typography>
        <Typography variant="body2">
          There are reference implementations of the Nanoflakes standard available in
          {' '}<Link href="https://github.com/nanoflakes/nanoflakes-java">Java</Link>{', '}
          <Link href="https://github.com/nanoflakes/nanoflakes-kotlin">Kotlin</Link>{' and '}
          <Link href="https://github.com/nanoflakes/nanoflakes-js">JavaScript</Link>.
        </Typography>
      </>}
    />
  </PaperListItem>;
}

function DiceBotProject() {
  return <PaperListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: '#151515', color: grey[100] }}>
        DB
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <ListItemTitle text="DiceBot">
          <Tooltip title="Source Code">
            <IconButton size="small" aria-label="Source Code" href="https://github.com/adriantodt/dicebot">
              <FontAwesomeIcon icon={faGithub}/>
            </IconButton>
          </Tooltip>
        </ListItemTitle>
      }
      secondaryTypographyProps={{ component: 'div' }}
      secondary={
        <>
          <Typography variant="body2" gutterBottom>
            DiceBot is a simple Discord bot which allows users to roll dice, using the <Link
            href="https://rollem.rocks/docs/v1-syntax">same syntax</Link>
            {' '}as the <Link href="https://rollem.rocks">Rollem</Link> discord bot.
          </Typography>
          <Typography variant="body2" gutterBottom>
            The bot is written in TypeScript with Node.js and Discord.js, and is currently being used in two different
            Discord bots.
          </Typography>
          <List sx={subProjectListSx}>
            <DragonDiceSubProject/>
            <AruSubProject/>
          </List>
        </>
      }
    />
  </PaperListItem>;
}

function DragonDiceSubProject() {
  return <ListItem component="div" alignItems="flex-start">
    <ListItemAvatar>
      <Avatar src="/assets/dragondice.min.jpg" alt="Dragon Dice"/>
    </ListItemAvatar>
    <ListItemText
      primary={
        <ListItemTitle text="Dragon Dice" alignItems="center">
          <Tooltip title="Invite to Server">
            <IconButton aria-label="Invite bot to Discord server"
                        href="https://discord.com/oauth2/authorize?client_id=746016492130402414&scope=bot&permissions=0">
              <FontAwesomeIcon icon={faDiscord} mask={faCircle} transform="shrink-5.5"/>
            </IconButton>
          </Tooltip>
        </ListItemTitle>
      }
    />
  </ListItem>;
}

function AruSubProject() {
  return <ListItem component="div">
    <ListItemAvatar>
      <Avatar src="/assets/aru.min.jpg" alt="Aru!"/>
    </ListItemAvatar>
    <ListItemText
      primary={
        <ListItemTitle text="Aru!" alignItems="center">
          <Tooltip title="Invite to Server">
            <IconButton aria-label="Invite bot to Discord server"
                        href="https://discord.com/oauth2/authorize?client_id=1010710730955313195&scope=bot&permissions=0">
              <FontAwesomeIcon icon={faDiscord} mask={faCircle} transform="shrink-5.5"/>
            </IconButton>
          </Tooltip>
        </ListItemTitle>
      }
    />
  </ListItem>;
}

export function ProjectList() {
  return <>
    <Typography variant="h4" component="h2" gutterBottom>Personal Projects</Typography>
    <List sx={projectListSx}>
      <LinProject/>
      <LunarrProject/>
      <NanoflakesProject/>
      <DiceBotProject/>
    </List>
  </>;
}
