import React from "react";

const Tasklist = () => {
  return (
    <div
      id="tasklist"
      className="no-scrollbar p-3 justify-evenly  h-[50vh] scroll-smooth m-5 flex flex-nowrap gap-6 overflow-auto [&::-webkit-scrollbar]:hidden"
    >
      <div className="h-full flex-shrink-0 bg-yellow-500 w-[300px] p-5 rounded-xl text-white ">
        <div className="flex justify-between  items-center ">
          <h3 className="bg-red-600 px-2 py-1 rounded-lg font-bold">High</h3>
          <h4 className="font-bold text-sm">26/03/2025</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eligendi et similique provident consequuntur officia.
        </p>
      </div>
      <div className="h-full flex-shrink-0 bg-blue-500 w-[300px] p-5 rounded-xl text-white ">
        <div className="flex justify-between  items-center ">
          <h3 className="bg-red-600 px-2 py-1 rounded-lg font-bold">High</h3>
          <h4 className="font-bold text-sm">26/03/2025</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eligendi et similique provident consequuntur officia.
        </p>
      </div>
      <div className="h-full flex-shrink-0 bg-green-300 w-[300px] p-5 rounded-xl text-white ">
        <div className="flex justify-between  items-center ">
          <h3 className="bg-red-600 px-2 py-1 rounded-lg font-bold">High</h3>
          <h4 className="font-bold text-sm">26/03/2025</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eligendi et similique provident consequuntur officia.
        </p>
      </div>
      <div className="h-full flex-shrink-0 bg-red-400 w-[300px] p-5 rounded-xl text-white ">
        <div className="flex justify-between  items-center ">
          <h3 className="bg-red-600 px-2 py-1 rounded-lg font-bold">High</h3>
          <h4 className="font-bold text-sm">26/03/2025</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eligendi et similique provident consequuntur officia.
        </p>
      </div>
      <div className="h-full flex-shrink-0 bg-yellow-500 w-[300px] p-5 rounded-xl text-white ">
        <div className="flex justify-between  items-center ">
          <h3 className="bg-red-600 px-2 py-1 rounded-lg font-bold">High</h3>
          <h4 className="font-bold text-sm">26/03/2025</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eligendi et similique provident consequuntur officia.
        </p>
      </div>
    </div>
  );
};

export default Tasklist;
