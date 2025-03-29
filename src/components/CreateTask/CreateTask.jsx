import React, { useEffect, useState } from "react";
const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    date: "",
    assignTo: "",
    category: "",
    description: "",
  });
  let getTaskData = [];
  useEffect(()=>{
    
  const tasklocalStorage = localStorage.getItem('taskData');
  console.log("tasklocalStorage",JSON.parse(tasklocalStorage));
  
  },[getTaskData])


  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    console.log("task data", taskData);
    setTaskData({
      title: "",
      date: "",
      assignTo: "",
      category: "",
      description: "",
    });
    getTaskData.push({taskData});
    localStorage.setItem('taskData',JSON.stringify(getTaskData));
    alert("Task Created Successfully");
  };

  return (
    <div>
      <div className="flex justify-center items-center p-6">
        <form
          className="
        w-full max-w-2xl 
        bg-gray-900 text-white 
        p-8 rounded-3xl 
        mt-6 shadow-lg
      "
      onSubmit={handleTaskSubmit}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column: Inputs */}
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium">Task Title</label>
                <input
                  className="
                w-full p-2 
                bg-gray-800 border border-gray-700 
                rounded-md text-white 
                focus:outline-none focus:ring-2 focus:ring-green-500
              "   name="title"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter task title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  className="
                w-full p-2 
                bg-gray-800 border border-gray-700 
                rounded-md text-white 
                focus:outline-none focus:ring-2 focus:ring-green-500
              "   name="date"
                  onChange={handleChange}
                  type="date"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Assign To</label>
                <input
                  className="
                w-full p-2 
                bg-gray-800 border border-gray-700 
                rounded-md text-white 
                focus:outline-none focus:ring-2 focus:ring-green-500
              "   name="assignTo"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter assignee"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Category</label>
                <input
                  className="
                w-full p-2 
                bg-gray-800 border border-gray-700 
                rounded-md text-white 
                focus:outline-none focus:ring-2 focus:ring-green-500
              "   name="category"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter category"
                />
              </div>
            </div>

            {/* Right Column: Textarea */}
            <div className="flex-1">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                className="
              w-full p-3 
              bg-gray-800 border border-gray-700 
              rounded-xl text-white 
              focus:outline-none focus:ring-2 focus:ring-green-500
              resize-y
            "   name="description"
                onChange={handleChange}
                rows="8"
                placeholder="Enter task description"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              className="
            px-6 py-3 
            bg-green-500 text-white 
            rounded-md 
            hover:bg-green-600 
            hover:cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-green-400
            transition duration-200
          "
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
