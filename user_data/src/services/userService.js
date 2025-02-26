import axios from "axios";

const API_BASE_URL = "http://localhost:3001"; // Update if needed

// Get all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Get a single user by ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// Update user
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/updateUser/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Delete user
export const deleteUserById = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/deleteUser/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Add user
export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/adduser`, userData);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};
