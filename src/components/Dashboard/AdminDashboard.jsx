import React from "react";
import Header from "../Header/Header";
import CreateTask from "../CreateTask/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />
      <CreateTask/>
    </div>
  );
};

export default AdminDashboard;