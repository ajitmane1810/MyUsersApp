import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { addUser } from "../services/userService";
import TextInput from "../components/TextInput";
import { PasswordInput } from "../components/PasswordInput";
import { validateForm } from "../components/validateForm";



const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "", email: "", password: "",
    first_name: "", last_name: "", address: "",
    phone_number: "", role: "", salary: ""
  });
  const [errors, setErrors] = useState({});

// console.log("formData:", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, isValid } = validateForm(formData);
    setErrors(errors);
    if (isValid) {
      try {
        await addUser(formData);
        alert("User added successfully!");
        setFormData({
          username: "", email: "", password: "",
          first_name: "", last_name: "", address: "",
          phone_number: "", role: "", salary: ""
        });
        navigate("/users");
      } catch (error) {
        alert("Failed to add user.");
      }
    }
  };

  return (
    <div className="min-h-screen  md:p-20 bg-[#131010]">
      <button onClick={() => navigate(-1)} className="m-4 px-4 py-2 bg-gray-500 text-white rounded-md">Go Back</button>
      <div className="flex items-center justify-center">
        <div className="m-5 p-5 bg-gray-100 w-full max-w-4xl rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">User Registration</h2>
          <form onSubmit={handleSubmit}>
            <TextInput label="Username" name="username" value={formData.username} onChange={handleChange} error={errors.username} />
            <div className="flex gap-2">
              <TextInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
              <PasswordInput name="password" value={formData.password} onChange={handleChange} error={errors.password} />
            </div>
            <div className="flex gap-2">
              <TextInput label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} error={errors.first_name} />
              <TextInput label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} error={errors.last_name} />
            </div>
            <div className="flex gap-2">
              <TextInput label="Address" name="address" value={formData.address} onChange={handleChange} error={errors.address} />
              <TextInput label="Phone Number" type="number" name="phone_number" value={formData.phone_number} onChange={handleChange} error={errors.phone_number} />
            </div>
            <div className="flex gap-2">
              <TextInput label="Role" name="role" value={formData.role} onChange={handleChange} error={errors.role} />
              <TextInput label="Salary" type="number" name="salary" value={formData.salary} onChange={handleChange} error={errors.salary} />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
