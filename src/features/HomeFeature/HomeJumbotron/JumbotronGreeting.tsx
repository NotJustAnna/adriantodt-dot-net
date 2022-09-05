import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { AnimationDirector } from './AnimationDirector';
import { singleUse } from './singleUse';

const things = ['back-end', 'applications', 'AWS', 'Serverless', 'projects'];

function Over(props: { toggled: boolean }) {
  return <TextTransition inline springConfig={presets.wobbly}>{props.toggled ? 'over-' : ''}</TextTransition>;
}

function Things(props: { director: React.MutableRefObject<AnimationDirector> }) {
  const { director } = props;
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setTimeout(
      () => director.current
        .whenAvailable(() => setIndex(index => (index + 1) % things.length))
        .delaying(1500),
      3000,
    );
    return () => clearTimeout(id);
  }, [index, director]);

  return <TextTransition inline springConfig={presets.gentle}>{things[index % things.length]}</TextTransition>;
}

export default function JumbotronGreeting() {
  const animationDirector = React.useRef<AnimationDirector>() as React.MutableRefObject<AnimationDirector>;
  const [csr, setCsr] = React.useState(false);
  useEffect(() => {
    setCsr(true);
  });
  if (!animationDirector.current) {
    animationDirector.current = new AnimationDirector();
  }

  const [toggled, setToggled] = React.useState(false);
  const toggle = singleUse(() => animationDirector.current
    .whenAvailable(() => setToggled(toggled => !toggled))
    .delaying(1000));

  return <div>
    <Typography variant="h6" component="div" fontWeight={400}>Hi, my name is</Typography>
    <Typography variant="h1" component="div" fontWeight={500}>Adrian Todt.</Typography>
    <Typography variant="h4" component="div" fontWeight={300} lineHeight={1.5} onClick={toggle}>
      I {csr && <Over toggled={toggled}/>}engineer solutions for{csr && ' '}{csr ? <Things director={animationDirector}/> : '..'}.
    </Typography>
    <Typography>I'm a back-end focused full-stack software engineer based in Brazil.</Typography>
  </div>;
}
