import React, { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    employeeNumber: "20-1642",
    email: "petrovakm@sysad.national-u.edu",
    firstName: "Katherine",
    lastName: "Petrova",
    middleName: "Mendoza",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile: ", formData);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="/avatar-placeholder.png" alt="Avatar" className="w-20 h-20 rounded-full" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-blue-900 text-white p-2 rounded-t-md font-semibold">Edit Profile</div>
          <div className="p-4 space-y-3">
            <input type="text" name="employeeNumber" value={formData.employeeNumber} disabled className="w-full p-2 border rounded-md" />
            <input type="email" name="email" value={formData.email} disabled className="w-full p-2 border rounded-md" />
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded-md" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded-md" />
            <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
        </form>
      </div>
      
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md mt-6">
        <div className="bg-blue-900 text-white p-2 rounded-t-md font-semibold">Password</div>
        <div className="p-4 space-y-3">
          <input type="password" name="currentPassword" placeholder="Current Password" onChange={handleChange} className="w-full p-2 border rounded-md" />
          <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} className="w-full p-2 border rounded-md" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
      </div>
      
      <button onClick={handleSubmit} className="bg-blue-900 text-white py-2 px-4 rounded-md mt-4">Save Changes</button>
    </div>
  );
};

export default Settings;
