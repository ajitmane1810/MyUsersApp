export const validateForm = (formData) => {
  let errors = {};
  let isValid = true;

  // Check for required fields
  if (!formData.username) errors.username = "Username is required";
  if (!formData.email) errors.email = "Email is required";
  if (!formData.password) errors.password = "Password is required";
  if (!formData.first_name) errors.first_name = "First name is required";
  if (!formData.last_name) errors.last_name = "Last name is required";
  if (!formData.address) errors.address = "Address is required";
  if (!formData.phone_number) errors.phone_number = "Phone number is required";
  if (!formData.role) errors.role = "Role is required";
  if (!formData.salary) errors.salary = "Salary is required";
  else if (formData.salary < 0) errors.salary = "Salary must be positive";

  // Phone number validation (10 digits only)
  const fullPhoneNumber = formData.country_code + formData.phone_number; // Combine country code and phone number
  const phoneRegex = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/; // Modify regex to allow international format
  if (formData.phone_number && !phoneRegex.test(fullPhoneNumber)) {
    errors.phone_number = "Please enter a valid phone number with country code";
  }

  // If there are errors, the form is invalid
  if (Object.keys(errors).length > 0) isValid = false;

  return { errors, isValid };
};
