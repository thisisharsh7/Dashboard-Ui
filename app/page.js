"use client";
import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Mainbar from './components/Mainbar'
import { createContext, useRef } from 'react'

export const GlobalInfo = createContext();

export default function Home() {
  const sliderRef = useRef(null);

  return (
    <GlobalInfo.Provider value={{ sliderRef }}>
      <main className='flex  max-w-[1920px] mx-auto'>
        <Sidebar />
        <Mainbar />
      </main>
    </GlobalInfo.Provider>
  )
}
