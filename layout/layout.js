import React from 'react'
import styles from '../styles/Layout.module.css';
import Logo from '../public/assets/layout-image.gif';

const Layout = ({children}) => {
  return (
    <div className='flex h-screen bg-blue-400'>
      <div className='m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2 overflow-hidden'>
        <div className="relative">
          <img src={Logo.src} className="h-full w-full"/>
        </div>
        <div className='right flex flex-col justify-evenly h-auto'>
          <div className='text-center py-10'>
            {children}
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Layout