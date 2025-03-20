import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import { Navigate, useLocation } from "react-router-dom"
import api from "@/api"
// import LoginPage from "@/pages/LoginPage"
// import HomePage from "@/pages/Homepages"

const ProtectedRoute = ({children}) => {
    const[isAuthorized,setIsAuthorized]=useState(null)
    const location =useLocation()

    useEffect(()=>{
        // authorize()
        // .catch(()=>setIsAuthorized(false))

        async function checkAuthorization(){
            try{
                await authorize()

            }catch(error){
                setIsAuthorized(false)
                console.log(error)
                
            }
        }

        checkAuthorization()

    },[])
    
    async function refreshToken(){
        const refresh =localStorage.getItem('refresh')

        try{
            const response= await api.post('token_refresh/',refresh)
            if(response.status===200){
                localStorage.setItem('access',response.data.access)
                setIsAuthorized(true)
            }
            else{
                setIsAuthorized(false)
            }

        }
        catch(error){
            console.log(error)
            throw new Error(error.messsage)

        }
    }




    async function authorize(){
        const token=localStorage.getItem('access')
        if(!token){
            setIsAuthorized(false)
            return
            // return <LoginPage/>
        }

        const decodedToken=jwtDecode(token)
        const expiry_date=decodedToken.exp
        const current_time=Date.now()/10000

        if(current_time>expiry_date){
            await refreshToken()
        }
        else{
            setIsAuthorized(true)
            
        }
 
    }

    if (isAuthorized === null){
        return (<Spinner/>)
    }

  return (
    <>
    {/* {isAuthorized ? children : <Navigate to='/login' state={{from:location}} replace/>} */}
    {isAuthorized ? children : <Navigate to="/login" state={{from:location}} replace />}
    </>
    
  )
}

export default ProtectedRoute