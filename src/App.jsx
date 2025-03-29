import React, { useState,useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    setLocalStorage()
  
   
  },)
  
  const authData = useContext(AuthContext);

  const handleLogin = (email,password)=>{

      if(email === 'admin@me.com' && password === '123'){
        setuser('admin');
      }
      else if(authData && authData.data.find((e)=> e.email === email && e.password === password)){
        setuser('employee');
      }
      else{
        alert('invalid credentials');
      }
  }
  
  
  return (
   
    <div>
     { !user ? <Login handleLogin={handleLogin}/> :''}  
     {user == 'admin' ? <AdminDashboard/>: ( <EmployeeDashboard/> }
     
    </div>
  );
};

export default App;
