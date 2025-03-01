import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/userService";
import TextInput from "../components/TextInput";
import { PasswordInput } from "../components/PasswordInput";
import { validateForm } from "../components/validateForm";
import PhoneNumberInput from "../components/PhoneNumberInput";  

const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "", email: "", password: "",
    first_name: "", last_name: "", address: "",
    phone_number: "", country_code: "+1", 
    role: "", salary: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate phone number length here
    const phoneNumberLength = formData.phone_number.replace(/\D/g, '').length; 
    if (phoneNumberLength !== 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone_number: "Please enter valid number."
      }));
      return;
    }

    const { errors, isValid } = validateForm(formData);
    setErrors(errors);

    if (isValid) {
      try {
        await addUser(formData);
        alert("User added successfully!");
        setFormData({
          username: "", email: "", password: "",
          first_name: "", last_name: "", address: "",
          phone_number: "", country_code: "+1", // Reset to default country code
          role: "", salary: ""
        });
        navigate("/users");
      } catch (error) {
        alert("Failed to add user.");
      }
    }
  };

  // List of country codes (you can expand this list)
  const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    // Add more countries as needed
  ];

  return (
    <div className="min-h-screen md:p-20 bg-[#131010]">
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
              {/* Use the PhoneNumberInput component here */}
              <PhoneNumberInput
                value={formData.phone_number}
                onChange={handleChange}
                countryCode={formData.country_code}
                onCountryCodeChange={handleChange}
                error={errors.phone_number}
                countryCodes={countryCodes}
              />
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
