import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border-2 border-gray-300 rounded-md flex flex-col space-y-4 bg-white p-8">
      <h2 className="font-poppins text-2xl font-medium leading-7 text-left">Contact Information</h2>

      <div className="flex flex-col space-y-2 ">
        <label htmlFor="firstName" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="First name"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="lastName" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Last name"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="phoneNumber" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Phone number"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Your Email"
        />
      </div>
    </form>
  );
}

export default ContactForm;