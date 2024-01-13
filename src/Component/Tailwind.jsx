import React from "react";

function Tailwind() {
  return (
    <>
      <div className="h-1 bg-blue-900" />
      <nav className="bg-red-400 p-4 flex items-center">
        <h1 className="text-white text-3xl  ml-6 font-semibold">Kalvium</h1>
        <div className="container ml-9 mx-auto flex justify-between items-center">
          <div className="ml-5 space-x-5 text-lg">
            <a href="#" className="text-gray-300 font-meduim">
              About Us
            </a>
            <a href="#" className="text-gray-300 ">
              Contacts  
            </a>
            <a href="#" className="text-gray-300 ">
              Courses
            </a>
          </div>
          <button className="border text-white rounded-lg px-4 py-2 mr-5">
            Sign in
          </button>
        </div>
      </nav>
      <div className="w-5/5 flex justify-center mt-7">
        <div className="w-4/5">
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold">
            Button One
          </button>
          <div className="mt-6 flex  items-center border-red-600 border bg-red-200  py-3 px-3 rounded ">
            <p className="text-red-700 font-bold">Alert!</p>{" "}
            <p className="ml-2 text-red-700 font-semibold">This is awesome!</p>
          </div>
        </div>
      </div>
      <div className="grid justify-center">
        <div className="flex justify-center items-center mt-12 shadow-lg p-5 rounded-md">
          <img
            className="h-10 w-20"
            src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
            alt="kalvium Image"
          />
          <div className="ml-5">
            <h2 className="font-semibold">Kalvium Store</h2>
            <h3 className="text-gray-600">You have a new course!</h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 w-5/5 bg-gray-200 mt-72">
        <p className="font-medium text-gray-700">&copy; 2021 Copyright:</p>
        <p className="font-semibold">Kalvium</p>
      </div>
    </>
  );
}

export default Tailwind;
