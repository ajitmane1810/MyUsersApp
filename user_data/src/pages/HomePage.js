import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#131010] flex items-center justify-center">
      {/* Card centered with enhanced shadow */}
      <div className="w-full md:h-96 max-w-4xl m-5 p-8 bg-black rounded-lg shadow-[0px_0px_30px_2px_#FFCFCF]  md:shadow-[0px_0px_120px_5px_#FFCFCF]">
        <h1 className="text-4xl text-white font-bold text-center">Welcome to MyUserApp</h1>
        <p className="mt-8 text-gray-400 text-sm md:text-lg text-center md:px-20">
        User Management System
        A React.js and Express.js based system for managing users. It allows admins to view, create, and manage users with a simple UI. The backend is powered by MySQL for data storage, with form validation ensuring accurate inputs. Features include a user list, user creation form, and navigation controls. Future improvements include authentication and role-based access. 🚀
        </p>

        {/* Buttons section */}
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 ">
          <button
            aria-label="Show users"
            className="uppercase px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition duration-300"
            onClick={() => navigate("/users")}
          >
            Show User
          </button>

          <button
            aria-label="Create a new user"

            className="uppercase px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-500 transition duration-300"
            onClick={() => navigate("/userform")}
         >
            Create User
          </button>
        </div>
      </div>


    </div>
  );
};

export default HomePage;
