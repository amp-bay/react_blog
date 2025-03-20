import { FaHamburger } from "react-icons/fa";
import { Switch } from "@/components/ui/switch"
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MobileNavBar from "./MobileNavBar";


function NavBar({darkMode,handleDarkMode,isAuthenticated,username,setUsername,setIsAuthenticated} ) {
  const [showNavBar, setShowNavBar]=useState(false)

  function handleLogout(){
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    setUsername(false)
    setIsAuthenticated(false)
  }

  return (
    <>
      <nav className="max-container padding-x py-6 flex justify-between items-center  gap-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624]" >
        <Link to="/" className="text-[#141624] text-2xl dark:text-[#FFFFFF]" >
          G-Friends
        </Link>
        {/* <Link to="/" className="text-[#141624] text-2xl dark:text-[#FFFFFF]">
          DevFolio
        </Link> */}

        {/* <Link to='/detail'>
          <li>Hey B,</li>
        
        </Link> */}

        <ul className=" flex items-center  justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
          
            
          
      
          {isAuthenticated ? 
          (<>
            <li>
              <NavLink to={`/profile/${username}`} className={({isActive})=> isActive? "active": ""}>
                Hey {username} !
              </NavLink>
            </li>
            <li><NavLink to="/" onClick={handleLogout} className={({ isActive }) => (isActive ? "active" : "")}> LogOut</NavLink></li>
            
          </>)
           :
          (<> 
            <li><NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}> Login</NavLink></li>
            <li>
              <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>Register</NavLink> 
            </li>
          </>)
          }   
          

          <li  className="font-semibold">
            <NavLink to='/create'>
              Post Something
            </NavLink>
          </li>

        </ul>

        
        
        <Switch className='border-2 border-gray-300' onCheckedChange={handleDarkMode}  checked={darkMode}/>

        <FaHamburger className=" text-2xl cursor-pointer hidden max-md:block dark:text-white" 
        onClick={()=>setShowNavBar((curr)=>!curr)}/>
        
    </nav>

    {showNavBar && <MobileNavBar isAuthenticated={isAuthenticated} username={username} setUsername={setUsername} setIsAuthenticated={setIsAuthenticated} handleLogout={handleLogout}  />}
  </>
  )
}

export default NavBar