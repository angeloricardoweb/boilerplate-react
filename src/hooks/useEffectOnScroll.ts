import { useEffect, useState } from 'react';
import { useGlobalProvider } from '../context/GlobalContextProvider';

export function useEffectOnScroll() {
  const [scroll, setScroll] = useState(0);
  const { drawerMenuRef } = useGlobalProvider() as any;

  useEffect(() => {
    const onScroll = () => setScroll(drawerMenuRef.current.scrollTop);

    drawerMenuRef?.current?.removeEventListener('scroll', onScroll);
    drawerMenuRef.current.addEventListener('scroll', onScroll);
  }, []);

  return scroll;
}
