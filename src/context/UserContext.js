import { createContext, useState } from "react";


export const UserContext=createContext();


export const UserContextProvider=({children})=>{

    const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem('auth-user')))

    return(
        <UserContext.Provider value={{
             authUser,
             setAuthUser
        }}>
           {children}
        </UserContext.Provider>
    )
}
