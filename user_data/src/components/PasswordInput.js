import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const PasswordInput = ({ name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className="mb-4 w-full relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md pr-10"
          placeholder="Enter Password"
        />
        <span
          className="absolute right-3 top-5 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }; 