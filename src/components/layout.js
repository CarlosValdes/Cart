import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartSection from './cartSection'

const Layout = () => {
  return (
    <div className='bg-zinc-200'>
        <main className='w-[1200px] max-w-full m-auto p-5'>
            <Header/>
            <Outlet/>
        </main>
        <CartSection/>
    </div>
  )
}

export default Layout