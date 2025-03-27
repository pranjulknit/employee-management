import React from "react";
import Header from "../Header/Header";
import CreateTask from "../CreateTask/CreateTask";
import Alltask from "../Alltask/Alltask";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />
      <div className="flex  justify-around max-h-4xl ">
      <CreateTask/>
      <Alltask/>
      </div>
      
    </div>
  );
};

export default AdminDashboard;