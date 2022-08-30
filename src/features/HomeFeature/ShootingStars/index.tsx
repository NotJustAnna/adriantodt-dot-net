import Box from '@mui/material/Box';
import styles from './index.module.scss';
import Canvas from './Canvas';
import { useContext, useEffect, useRef } from 'react';
import { ShootingStarsScene } from './gfx/ShootingStarsScene';
import { HomeContext } from '../context';

export default function ShootingStars() {
  const { disableShootingStars } = useContext(HomeContext);

  const sceneRef = useRef<ShootingStarsScene>();
  if (!sceneRef.current) {
    sceneRef.current = new ShootingStarsScene('/adriantodt.pixelated.png');
  }

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

  return <Box sx={{ bgcolor: '#000000' }}>
    <Canvas draw={(ctx) => sceneRef.current!.loop(ctx)} className={styles.canvas}/>
  </Box>;
}
