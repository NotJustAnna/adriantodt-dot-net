import Box, { BoxProps } from '@mui/material/Box';
import styles from './index.module.css';
import Canvas from './Canvas';
import React, { useContext, useEffect, useRef } from 'react';
import { ShootingStarsScene } from './gfx/ShootingStarsScene';
import { HomeContext } from '../context';
import adriantodtPixelated from '../../../../public/assets/adriantodt.pixelated.png';
import pausedImage from '../../../../public/assets/paused.png';
import { Card, CardContent, Fab, FabProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons/faRotateRight';
import { faCompress } from '@fortawesome/free-solid-svg-icons/faCompress';
import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import Typography from '@mui/material/Typography';

const fabBlue: FabProps['sx'] = { bgcolor: '#3680f4', ':hover': { bgcolor: '#2f6ed4' } };
const fabGreen: FabProps['sx'] = { bgcolor: '#00ad3a', ':hover': { bgcolor: '#009c34' } };
const fabGrey: FabProps['sx'] = { bgcolor: '#777777', ':hover': { bgcolor: '#666666' } };
const fabBoxSxFS: BoxProps['sx'] = {
  display: 'flex', gap: 1,
  float: 'right', position: 'relative', right: 6, bottom: 52,
};
const fabBoxSxW: BoxProps['sx'] = {
  display: 'flex', gap: 1.5,
  float: 'right', position: 'relative', right: 16, bottom: 20,
};

export default function ShootingStars() {
  const { disableShootingStars } = useContext(HomeContext);
  const [paused, setPaused] = React.useState(false);
  const [fullscreen, setFullscreen] = React.useState(false);
  const windowRef = useRef<HTMLDivElement>();
  const sceneRef = useRef<ShootingStarsScene>();
  const mqRef = useRef<MediaQueryList>();
  if (!mqRef.current && typeof window !== 'undefined') {
    mqRef.current = window.matchMedia('(min-width: 1771px)');
  }
  const [floatingCard, setFloatingCard] = React.useState(() => !!mqRef.current?.matches);

  if (typeof window !== 'undefined') {
    if (!sceneRef.current) {
      const scene = new ShootingStarsScene(adriantodtPixelated.src);
      scene.pausedImageUrl = pausedImage.src;
      sceneRef.current = scene;
    } else {
      sceneRef.current!.paused = paused;
    }
  }

  const reset = () => {
    const scene = new ShootingStarsScene(adriantodtPixelated.src);
    scene.pausedImageUrl = pausedImage.src;
    sceneRef.current = scene;
  }

  const changeFullscreen = () => {
    if (fullscreen) {
      document.exitFullscreen().catch(console.error);
    } else {
      let window = windowRef.current;
      if (!window) {
        return;
      }
      window.requestFullscreen().catch(console.error);
    }
  };

  useEffect(() => {
    let keyboardListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        disableShootingStars();
      } else if (e.key === 'Pause') {
        setPaused(p => !p);
      }
    };
    let mediaQueryListener = (e: MediaQueryListEvent) => {
      setFloatingCard(e.matches);
    };
    mqRef.current!.addEventListener('change', mediaQueryListener);
    document.addEventListener('keydown', keyboardListener);
    let fullscreenListener = () => {
      if (!document.fullscreenElement) {
        setFullscreen(false);
      } else if (document.fullscreenElement === windowRef.current) {
        setFullscreen(true);
      }
    }
    document.addEventListener('fullscreenchange', fullscreenListener);
    return () => {
      document.removeEventListener('keydown', keyboardListener);
      document.removeEventListener('fullscreenchange', fullscreenListener);
      mqRef.current!.removeEventListener('change', mediaQueryListener);
    }
  }, [disableShootingStars]);

  return <Box ref={windowRef} sx={{ bgcolor: '#000000' }}>
    <Canvas draw={(ctx) => sceneRef.current!.loop(ctx)}
            className={fullscreen ? styles.canvasFullscreen : styles.canvas}/>
    {
      !fullscreen && (
        <Box sx={floatingCard ? { position: 'relative', left: 16, bottom: 40, float: 'left' } : {}}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Easter-egg
              </Typography>
              <Typography variant="h5" component="div">
                Shooting Stars
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Canvas-based animation
              </Typography>
              <Typography variant="body2">
                Procedurally generated shooting stars,
                {floatingCard ? <br/> : ' '}
                inspired by old-school screensavers and
                {floatingCard ? <br/> : ' '}
                old console games.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )
    }
    <Box sx={fullscreen ? fabBoxSxFS : fabBoxSxW}>
      {
        !fullscreen && (<>
          <Fab size="small" color="inherit" sx={fabGreen} onClick={() => setPaused(p => !p)}>
            <FontAwesomeIcon icon={paused ? faPlay : faPause}/>
          </Fab>
          <Fab size="small" color="inherit" sx={fabGreen} onClick={reset}>
            <FontAwesomeIcon icon={faRotateRight}/>
          </Fab>
        </>)
      }
      <Fab size="small" color="inherit" aria-label={fullscreen ? 'compress' : 'expand'}
           sx={fullscreen ? fabGrey : fabBlue} onClick={changeFullscreen}>
        <FontAwesomeIcon icon={fullscreen ? faCompress : faExpand} transform="grow-2"/>
      </Fab>
      {!fullscreen && (
        <Fab size="small" color="error" aria-label="close" onClick={disableShootingStars}>
          <FontAwesomeIcon icon={faXmark} transform="grow-6"/>
        </Fab>
      )}
    </Box>
  </Box>;
}
