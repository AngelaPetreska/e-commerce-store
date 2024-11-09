import React, { useState, useEffect } from 'react';
import NavigationCheckoutBar from './NavigationCheckoutBar';
import stepThreeDone from '../assets/stepThreeDone.svg';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import useCartStore from '../store/cartStore'; 

function OrderCompletePage({}) {
  const activeStep = 2;

  const steps = [
    { title: 'Shopping Cart', link: '/checkout' },
    { title: 'Checkout Details', link: '/checkout-details' },
    { title: 'Order Complete', link: '/order-complete' },
  ];

  const cartStore = useCartStore(); // Access cart data from the store

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async (productId) => {
      // Replace with your actual API call or data fetching logic
      const response = await fetch(`/api/products/${productId}`);
      const productData = await response.json();
      return productData;
    };

    const fetchData = async () => {
      const details = [];
      for (const item of cartStore.cartItems) {
        const productData = await fetchProductDetails(item.id);
        details.push({ ...item, ...productData });
      }
      setProductDetails(details);
    };

    fetchData();
  }, [cartStore.cartItems]); // Re-run effect when cart changes

  return (
    <div>
      <NavigationBar />
      <p className='font-poppins text-4xl font-medium leading-tight tracking-tighter text-center'> Complete! </p>
      <NavigationCheckoutBar
        activeStep={activeStep}
        steps={steps}
        stepThreeIcon={stepThreeDone}
      />
      <div className="flex flex-col mx-16">


        <div className="container mx-auto mt-8">
          <p className="text-gray-600 mb-4"> Thank you! 🎉</p>
          <h1 className="text-2xl font-bold mb-4">Your order has been received</h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-gray-100 p-4 rounded-md shadow-sm">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <ul>
                {productDetails.map((item) => (
                  <li key={item.id}>
                    {item.quantity} x {item.title} - ${item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <p className="font-bold">Total: ${cartStore.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p>
            </div>

            <div className="flex-1 bg-gray-100 p-4 rounded-md shadow-sm">
              <h2 className="text-lg font-bold mb-4">Contact Information</h2>
              {/* Access contact information from CheckoutDetailsPage (implementation needed) */}
              <p>Name: {/* Display contact name from CheckoutDetailsPage */}</p>
              <p>Phone: {/* Display contact phone number from CheckoutDetailsPage */}</p>
              <p>Email: {/* Display contact email from CheckoutDetailsPage */}</p>
            </div>

            <div className="flex-1 bg-gray-100 p-4 rounded-md shadow-sm">
              <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
              {/* Access shipping address from CheckoutDetailsPage (implementation needed) */}
              <p>Street: {/* Display shipping street address from CheckoutDetailsPage */}</p>
              <p>City, State, Zip: {/* Display shipping city, state, and zip from CheckoutDetailsPage */}</p>
              <p>Country: {/* Display shipping country from CheckoutDetailsPage */}</p>
            </div>

            <div className="flex-1 bg-gray-100 p-4 rounded-md shadow-sm">
              <h2 className="text-lg font-bold mb-4">Payment Method</h2>
              {/* Access payment method from CheckoutDetailsPage (implementation needed) */}
              <p>Credit Card (Replace with actual payment method)</p>
            </div>
          </div>
        </div>

        <Footer/>
    </div>
    </div>
  );
}

export default OrderCompletePage;