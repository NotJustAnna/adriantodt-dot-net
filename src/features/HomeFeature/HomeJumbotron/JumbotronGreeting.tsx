import Typography from '@mui/material/Typography';
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const things = ['back-end', 'applications', 'AWS', 'Serverless', 'projects'];

function Over(props: { toggled: boolean }) {
  return <TextTransition inline springConfig={presets.wobbly}>{props.toggled ? 'over-' : ''}</TextTransition>;
}

function Things() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIndex(index => (index + 1) % things.length), 3000);
    return () => clearTimeout(id);
  }, []);

  return <TextTransition inline springConfig={presets.gentle}>{things[index % things.length]}</TextTransition>;
}

export default function JumbotronGreeting() {
  const [toggled, setToggled] = React.useState(false);
  const toggle = () => setToggled(!toggled);

  return <>
    <Typography variant="h6" component="div" fontWeight={400}>Hi, my name is</Typography>
    <Typography variant="h1" component="div" fontWeight={500}>Adrian Todt.</Typography>
    <Typography variant="h4" component="div" fontWeight={300} lineHeight={1.5}>
      <div onClick={toggle}>I <Over toggled={toggled}/>engineer solutions for <Things/>.</div>
    </Typography>
    <Typography>I'm a back-end focused full-stack software engineer based in Brazil.</Typography>
  </>;
}
