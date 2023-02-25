import { useEffect, useState } from 'react';
import { useGlobal } from '../context/GlobalContextProvider';

export function useEffectOnScroll() {
  const [scroll, setScroll] = useState(0);
  const { drawerMenuRef } = useGlobal();

  useEffect(() => {
    if (drawerMenuRef?.current) {
      const onScroll = () => setScroll(drawerMenuRef.current.scrollTop);

      drawerMenuRef?.current?.removeEventListener('scroll', onScroll);
      drawerMenuRef.current.addEventListener('scroll', onScroll);
    }
  }, []);

  return scroll;
}
