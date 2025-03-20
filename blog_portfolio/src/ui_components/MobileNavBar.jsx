import {  NavLink } from "react-router-dom";



function MobileNavBar({isAuthenticated,username,handleLogout} ) {

  
  return (
    <nav className="  max-container padding-x py-6 max-md:block hidden  dark:text-white" >
        <ul className="flex flex-col justify-center items-center gap-6 text-[#0F0B2E] lg:flex-1  dark:text-[#FFFFFF]" >
          {isAuthenticated ? 
            (<>
              <li>
                <NavLink to='/detail' className={({isActive})=> isActive? "active": ""}>
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
    </nav>
    )
}

export default MobileNavBar