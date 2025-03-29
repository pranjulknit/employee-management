import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
   const [userdata,setUserdata]=useState({});
  

    useEffect(()=>{
      const {data,admin} = getLocalStorage();
        //  console.log("data from auth storage",data);
      setUserdata({data,admin});
    },[])
  return <div>
    <AuthContext.Provider value={userdata}>
    {children}
    </AuthContext.Provider>
    </div>;
};

export default AuthProvider;
