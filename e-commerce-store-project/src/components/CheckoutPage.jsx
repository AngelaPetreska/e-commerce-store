import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function CheckoutPage() {
  const location = useLocation();
  const product = location.state?.product; // Access product data passed from ProductPage

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleInputChange = (event) => {
    setShippingInfo({
      ...shippingInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement checkout logic here
    // e.g., send shipping info and product data to server
    console.log('Submitting checkout form:', shippingInfo, product);

    // Optionally redirect to success page or confirmation
  };

  return (
    <div className="checkout-page px-20">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="shipping-info">
          <h3>Shipping Information</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={shippingInfo.name} onChange={handleInputChange} required />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={shippingInfo.address} onChange={handleInputChange} required />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={shippingInfo.city} onChange={handleInputChange} required />

          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={shippingInfo.state} onChange={handleInputChange} required />

          <label htmlFor="zip">Zip Code:</label>
          <input type="text" id="zip" name="zip" value={shippingInfo.zip} onChange={handleInputChange} required />
        </div>

        <div className="product-summary">
          <h3>Product Summary</h3>
          {/* Display product details using product data from `location.state` */}
          {product && (
            <div>
              <p>Product Name: {product.title}</p>
              <p>Price: ${product.price}</p>
            </div>
          )}
        </div>

        <button type="submit" className="w-48 h-15 px-4 py-2 bg-custom-blue text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;