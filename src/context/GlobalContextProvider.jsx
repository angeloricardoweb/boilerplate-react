import React, { useState, createContext, useContext } from 'react'

export const GlobalContext = createContext()

export function GlobalContextProvider({ children }) {
  const [swiperNoticiaInstance, setSwiperNoticiaInstance] = useState()

  const data = {
    swiperNoticiaInstance,
    setSwiperNoticiaInstance,
  }

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext(GlobalContext)
}
