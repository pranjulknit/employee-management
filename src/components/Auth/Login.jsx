import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    handleLogin(email,password);
    setemail('');
    setpassword('');
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className=" p-20  rounded-2xl bg-gray-200 z-50">
        <form
          className="flex flex-col gap-2 items-center"
          onSubmit={handleSubmit}
        >
          <input
            required
            onChange={(e) => setemail(e.target.value)}
            value={email}
            className=" text-black p-3 mt-3 outline-none border rounded-2xl border-gray-600 placeholder:text-gray "
            placeholder="enter your email"
            type="email"
          />
          <input
            required
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            className=" text-black p-3 mt-3 outline-none border rounded-2xl border-gray-600 placeholder:text-gray "
            placeholder="enter your password"
            type="password"
          />
          <button
            type="submit"
            className=" text-black p-3 w-full mt-3 bg-blue-300 outline-none border rounded-2xl border-gray-100 placeholder:text-black "
          >
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
