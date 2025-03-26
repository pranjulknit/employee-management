import React, { useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  const [count, setCount] = useState(0);

  function increaseHandler() {
    setInterval(() => setCount((count) => count + 1), 1000);
  }
  function decreaseHandler() {
    setInterval(() => setCount((count) => count - 1), 1000);
  }
  return (
    <div>
     {/* <Login/> */}
     {/* <EmployeeDashboard/> */}
     <AdminDashboard/>
    </div>
  );
};

export default App;
