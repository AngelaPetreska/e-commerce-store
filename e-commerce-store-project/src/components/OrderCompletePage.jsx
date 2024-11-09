import React, { useState, useEffect } from 'react';

import NavigationCheckoutBar from './NavigationCheckoutBar';
import stepThreeDone from '../assets/stepThreeDone.svg';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import useCartStore from '../store/cartStore';

function OrderCompletePage() {
  const activeStep = 2;
  const steps = [
    { title: 'Shopping Cart', link: '/checkout' },
    { title: 'Checkout Details', link: '/checkout-details' },
    { title: 'Order Complete', link: '/order-complete' },
  ];

  const cartStore = useCartStore();
  const [productDetails, setProductDetails] = useState([]);
  const [orderData, setOrderData] = useState({
    orderCode: '',
    date: '',
    paymentMethod: '',
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProductDetails = async (productId) => {
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

      // Calculate the total price after setting productDetails
      const calculatedTotal = details.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(calculatedTotal);
    };

    fetchData();
  }, [cartStore.cartItems]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      // Simulate fetching order details from backend (replace with actual API call)
      const response = await new Promise((resolve) => resolve({
        orderCode: 'ABC123',
        date: new Date().toLocaleDateString(),
        paymentMethod: 'Credit Card', // Replace with actual payment method from CheckoutDetailsPage
      }));

      setOrderData(response);
    };

    fetchOrderDetails();
  }, []);

  return (
    <div>
      <NavigationBar />
      <p className="font-poppins text-4xl font-medium leading-tight tracking-tighter text-center">
        Complete!
      </p>
      <NavigationCheckoutBar activeStep={activeStep} steps={steps} stepThreeIcon={stepThreeDone} />
      <div className="flex flex-col mx-16">
        <div className="container mx-auto mt-8">
          <p className="text-gray-600 mb-4">Thank you! </p>
          <h1 className="text-2xl font-bold mb-4">Your order has been received</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-gray-100 p-4 rounded-md shadow-sm">
              <h2 className="text-lg font-bold mb-4">Order Information</h2>
              <ul>
                <li>Order Code: {orderData.orderCode}</li>
                <li>Date: {orderData.date}</li>
                <li>Payment Method: {orderData.paymentMethod}</li>
                <li>Total Price: ${total.toFixed(2)}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderCompletePage;