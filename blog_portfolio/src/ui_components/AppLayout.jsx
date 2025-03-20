import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { ToastContainer} from 'react-toastify';   

import { Outlet } from 'react-router-dom'

function AppLayout({isAuthenticated ,username,setUsername,setIsAuthenticated}) {

  useEffect(()=>{
    if(localStorage.getItem('dark')=== null){
      localStorage.setItem('dark','false')
    }

  },[])
    const [darkMode,setDarkMode]=useState(localStorage.getItem('dark')==='true')

    const handleDarkMode=()=>{
      const updatedDarkMode=!darkMode
      setDarkMode(updatedDarkMode)
      localStorage.setItem('dark',updatedDarkMode? 'true':'false')
    }
  return (

    <div className={darkMode?' dark' : ''}>
        <main className='w-full bg-[#FFFFFF] dark:bg-[#181A2A]'>
            <NavBar setUsername={setUsername} username={username} isAuthenticated={isAuthenticated} darkMode={darkMode} handleDarkMode={handleDarkMode}/>
            <Outlet/>
            <Footer/>
            <ToastContainer />
        </main>
    </div>
  )
}

export default AppLayout