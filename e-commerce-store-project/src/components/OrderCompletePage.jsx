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

  const { cartItems} = useCartStore();

  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };
  
  const total = calculateTotal(cartItems);
  
  // Generate order code and date
  const [orderCode, setOrderCode] = useState('');
  const [orderDate, setOrderDate] = useState('');

  useEffect(() => {
    // Generate locally:
    const currentDate = new Date().toLocaleDateString();
    setOrderDate(currentDate);
    setOrderCode(generateRandomOrderCode());
  }, []);

  // Implement your order code generation logic here
  const generateRandomOrderCode = () => {
    // For example, a random 8-digit code:
    return Math.floor(Math.random() * 10000000);
  };

  return (
    <div>
      <NavigationBar />
      <p className='font-poppins text-4xl font-medium leading-tight tracking-tighter text-center'> Complete! </p>
      <NavigationCheckoutBar
        activeStep={activeStep}
        steps={steps}
        stepThreeIcon={stepThreeDone}
      />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter text-center">Order Complete</h1>
        <div className="mt-8 border rounded-lg p-4">
          <p className="text-lg font-medium">Order Details</p>
          <ul className="list-disc mt-4 ml-4">
            <li>Order Code: {orderCode}</li>
            <li>Date: {orderDate}</li>
            <li>Total: ${total.toFixed(2)}</li>
          </ul>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default OrderCompletePage;