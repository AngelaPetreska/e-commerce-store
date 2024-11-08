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
    <form onSubmit={handleSubmit} className="bg-gray-200 p-8 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Shipping Address</h2>

      <div>
        <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
          Street Address*
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          Country*
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        >
          <option value="">Select a country</option>
          {/* Add country options here */}
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          {/* ... */}
        </select>
      </div>

      <div>
        <label htmlFor="townCity" className="block text-sm font-medium text-gray-700">
          Town / City*
        </label>
        <input
          type="text"
          id="townCity"
          name="townCity"
          value={formData.townCity}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
          Zip Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default ShippingAddressForm;