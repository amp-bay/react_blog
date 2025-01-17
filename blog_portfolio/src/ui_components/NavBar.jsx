import { FaHamburger } from "react-icons/fa";
import { Switch } from "@/components/ui/switch"
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MobileNavBar from "./MobileNavBar";


function NavBar({darkMode,handleDarkMode} ) {
  const [showNavBar, setShowNavBar]=useState(false)

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
          
            <li>
              <NavLink to='/detail' className={({isActive})=> isActive? "active": ""}>
                Hey B,
              </NavLink>
            </li>
          
          
          <li>Logout</li>
          <li>Login</li>
          <li>Register</li>
          <li  className="font-semibold">post Something</li>
        </ul>

        
        
        <Switch className='border-2 border-gray-300' onCheckedChange={handleDarkMode}  checked={darkMode}/>

        <FaHamburger className=" text-2xl cursor-pointer hidden max-md:block dark:text-white" 
        onClick={()=>setShowNavBar((curr)=>!curr)}/>
        
    </nav>

    {showNavBar && <MobileNavBar/>}
  </>
  )
}

export default NavBar