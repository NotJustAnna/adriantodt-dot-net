import { createContext } from 'react';

export const HomeContext = createContext({
  openTerminal: () => {},
  disableShootingStars: () => {},
});
