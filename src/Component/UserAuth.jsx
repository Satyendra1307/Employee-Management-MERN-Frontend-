import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContaxt = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token) {
      setIsLoggedIn(true);
      navigate("/Home");
        }
    },[])

    // login Function
    const login = (token) =>{
        setIsLoggedIn(true)
        localStorage.setItem('token',token)
    }

    //logout function
    const logOut = () =>{
        setIsLoggedIn(false)
        localStorage.removeItem('token')
    }

    return(
       <AuthContaxt.Provider value = {{isLoggedIn,login,logOut}}>
            {children}
        </AuthContaxt.Provider>
    )
}
export const useAuth = () => useContext(AuthContaxt)