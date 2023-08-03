import { useEffect, useState } from 'react';

export const useScreenDimensions = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    });
  }, []);

  return ({
    screenWidth,
    screenHeight,
  });
};
