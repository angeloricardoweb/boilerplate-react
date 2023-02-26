import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='flex-1 flex flex-col'>
      <Header />
      <main className='flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
