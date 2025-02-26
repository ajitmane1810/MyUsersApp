import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { getAllUsers, updateUser, deleteUserById } from "../services/userService.js"; 
import { useNavigate } from "react-router-dom";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getAllUsers();
      setUsers(usersData);
    } catch (error) {
      console.error("Failed to load users");
    }
  };

  // Handle edit (update user)
  const handleEdit = async (id) => {
    const updatedUser = users.find((user) => user.id === id);
    if (!updatedUser) return;

    const newEmail = prompt("Enter new email:", updatedUser.email);
    if (!newEmail) return;

    try {
      await updateUser(id, { ...updatedUser, email: newEmail });
      alert("User updated successfully!");
      fetchUsers();
    } catch (error) {
      console.error("Failed to update user");
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUserById(id);
        alert("User deleted successfully!");
        fetchUsers();
      } catch (error) {
        console.error("Failed to delete user");
      }
    }
  };

  const navigate = useNavigate();

  return (
    <div className="md:p-20 min-h-screen bg-[#131010] ">

       {/* Go Back Button */}
       <button
        onClick={() => navigate(-1)}
        className="m-4 px-4 py-2  bg-gray-500 text-white rounded-md hover:bg-gray-700 transition"
      >
        Go Back
      </button>

      <div className="flex items-center justify-center">


      <div className="bg-white rounded-lg overflow-hidden w-full max-w-[90%] shadow-[0px_0px_30px_2px_#0000ff] md:shadow-[0px_0px_120px_5px_#0000ff]">
        <div className="flex justify-between items-center bg-gray-300 text-white px-4 py-3">
          <h2 className="text-lg font-semibold text-black">Users Table</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">First Name</th>
                <th className="px-4 py-2">Last Name</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Number</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Salary</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2 text-blue-600">{user.email}</td>
                  <td className="px-4 py-2">{user.first_name}</td>
                  <td className="px-4 py-2">{user.last_name}</td>
                  <td className="px-4 py-2">{user.address}</td>
                  <td className="px-4 py-2">{user.phone_number}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 font-medium">{user.salary}</td>
                  <td className="px-4 py-2 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      </div>
    </div>
  );
};

export default UsersTable;
