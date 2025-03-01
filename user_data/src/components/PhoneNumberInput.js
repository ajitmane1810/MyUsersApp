import React from 'react';

const PhoneNumberInput = ({ value, onChange, countryCode, onCountryCodeChange, error, countryCodes }) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
      <div className="flex gap-2 mt-2">
        {/* Country Code Dropdown */}
        <select
          name="country_code"
          value={countryCode}
          onChange={onCountryCodeChange}
          className="w-20 px-4 py-2 border border-gray-300 rounded-md"
        >
          {countryCodes.map((item) => (
            <option key={item.code} value={item.code}>
              {item.code} ({item.country})
            </option>
          ))}
        </select>
        {/* Phone Number Input */}
        <input
          type="number"
          name="phone_number"
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Enter Phone Number"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
