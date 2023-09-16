import Image from 'next/image'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'

export default function Home() {

  return (
    <main className='flex  max-w-[1920px] mx-auto'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />
        <Hero />
      </div>


    </main>
  )
}
