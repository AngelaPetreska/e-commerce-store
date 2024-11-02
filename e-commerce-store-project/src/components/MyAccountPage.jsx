import React, { useState } from 'react';

function AccountPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API calls, validation)
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <img src="https://via.placeholder.com/150" alt="Profile Picture" className="w-24 h-24 rounded-full mr-4" />
              <h1 className="text-2xl font-bold">Sophia Collins</h1>
            </div>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-blue-500">Account</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-blue-500">Address</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:text-blue-500">Wishlist</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Log Out</a></li>
            </ul>
          </div>

          <div className="md:w-2/3 md:ml-8">
            <h2 className="text-xl font-bold mb-4">Account Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              {/* Similar input fields for last name, display name, email, old password, new password, and confirm password */}

              <div className="mb-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;