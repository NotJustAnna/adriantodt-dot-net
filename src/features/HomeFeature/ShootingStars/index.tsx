import Box, { BoxProps } from '@mui/material/Box';
import styles from './index.module.scss';
import Canvas from './Canvas';
import React, { useContext, useEffect, useRef } from 'react';
import { ShootingStarsScene } from './gfx/ShootingStarsScene';
import { HomeContext } from '../context';
import adriantodtPixelated from '../../../assets/adriantodt.pixelated.png';
import { Fab, FabProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand';
import { faCompress } from '@fortawesome/free-solid-svg-icons/faCompress';

const fabBlue: FabProps['sx'] = { bgcolor: '#3680f4', ':hover': { bgcolor: '#2f6ed4' } };
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

  const [fullscreen, setFullscreen] = React.useState(false);
  const windowRef = useRef<HTMLDivElement>();
  const sceneRef = useRef<ShootingStarsScene>();
  if (!sceneRef.current) {
    sceneRef.current = new ShootingStarsScene(adriantodtPixelated);
  }

  const changeFullscreen = () => {
    if (fullscreen) {
      document.exitFullscreen().then(() => setFullscreen(false), console.error);
    } else {
      let window = windowRef.current;
      if (!window) {
        return;
      }
      window.requestFullscreen().then(() => setFullscreen(true), console.error);
    }
  };

  useEffect(() => {
    let listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        disableShootingStars();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    }
  }, [disableShootingStars]);

  return <Box ref={windowRef} sx={{ bgcolor: '#000000' }}>
    <Canvas draw={(ctx) => sceneRef.current!.loop(ctx)}
            className={fullscreen ? styles.canvasFullscreen : styles.canvas}/>
    <Box sx={fullscreen ? fabBoxSxFS : fabBoxSxW}>
      <Fab size="small" color="inherit" aria-label="help" sx={fabBlue}>
        <FontAwesomeIcon icon={faQuestion} transform="grow-2"/>
      </Fab>
      <Fab size="small" color="inherit" aria-label={fullscreen ? 'compress' : 'expand'} sx={fabBlue} onClick={changeFullscreen}>
        <FontAwesomeIcon icon={fullscreen ? faCompress : faExpand} transform="grow-2"/>
      </Fab>
      <Fab size="small" color="error" aria-label="close" onClick={disableShootingStars}>
        <FontAwesomeIcon icon={faXmark} transform="grow-6"/>
      </Fab>
    </Box>
  </Box>;
}
