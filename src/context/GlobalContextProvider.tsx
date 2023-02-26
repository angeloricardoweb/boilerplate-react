import React, { useState, createContext, useContext, useRef } from 'react';

type GlobalContextData = {
  swiperNoticiaInstance: any;
  setSwiperNoticiaInstance: (swiper: any) => void;
  drawerMenuRef: any;
};

export const GlobalContext = createContext<GlobalContextData>(
  {} as GlobalContextData
);

export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [swiperNoticiaInstance, setSwiperNoticiaInstance] = useState();
  const drawerMenuRef = useRef();

  const data = {
    swiperNoticiaInstance,
    setSwiperNoticiaInstance,
    drawerMenuRef,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  return useContext(GlobalContext);
};

