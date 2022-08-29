import Box from '@mui/material/Box';
import styles from './index.module.scss';
import Canvas from './Canvas';
import { useRef } from 'react';
import { ShootingStarsScene } from './gfx/ShootingStarsScene';

export default function ShootingStars() {
  const sceneRef = useRef<ShootingStarsScene>();
  if (!sceneRef.current) {
    sceneRef.current = new ShootingStarsScene();
  }

  return <Box sx={{ bgcolor: '#000000' }}>
    <Canvas draw={(ctx) => sceneRef.current!.loop(ctx)} className={styles.canvas}/>
  </Box>;
}
