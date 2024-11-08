import React, { useState } from 'react';

function ShippingAddressForm() {
  const [formData, setFormData] = useState({
    streetAddress: '',
    country: '',
    townCity: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log('Form submitted:', formData);
    // Reset form after submission (optional)
    setFormData({
      streetAddress: '',
      country: '',
      townCity: '',
      zipCode: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border-2 border-gray-300 rounded-md flex flex-col space-y-4 bg-white p-8">
      <h2 className="mb-4 font-poppins text-2xl font-medium leading-7 text-left">Shipping Address</h2>

      <div className="flex flex-col space-y-2">
        <label htmlFor="streetAddress" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
          Street Address*
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          placeholder="Enter your street address"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="country" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
          Country*
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        >
          <option value="">Select a country</option>
          {/* Add country options here */}
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          {/* ... */}
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="townCity" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
          Town / City*
        </label>
        <input
          type="text"
          id="townCity"
          name="townCity"
          value={formData.townCity}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          placeholder="Enter your town or city"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="zipCode" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
          Zip Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your zip code"
        />
      </div>
    </form>
  );
}

export default ShippingAddressForm;