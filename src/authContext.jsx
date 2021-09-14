import React, { useContext, useState } from "react";

const userContext =React.createContext()
const loginContext =React.createContext()

export function useUser(){
    return useContext(userContext)
}

export function useLogin(){
    return useContext(loginContext)
}

export function UserProvider({children}){
const [user,setUser]=useState({
    username:'',
    accesToken:''
})

function userHandler(userInfo){
    setUser({
        username:userInfo.username,
        accesToken:userInfo.accessToken
    })
}
return(
    <userContext.Provider value={user}>
        <loginContext.Provider value={userHandler}>
            {children}
        </loginContext.Provider>
    </userContext.Provider>
)
}
