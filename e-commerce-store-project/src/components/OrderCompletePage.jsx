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

  const { cartItems } = useCartStore();

  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const total = calculateTotal(cartItems);

  const [orderCode, setOrderCode] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isLoadingPaymentMethod, setIsLoadingPaymentMethod] = useState(true);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    setOrderDate(currentDate);
    setOrderCode(generateRandomOrderCode());

    const storedPaymentMethod = localStorage.getItem('selectedPaymentMethod');
    if (storedPaymentMethod) {
      setSelectedPaymentMethod(JSON.parse(storedPaymentMethod));
      console.log(storedPaymentMethod)
    }
    setIsLoadingPaymentMethod(false);
  }, []);

  const generateRandomOrderCode = () => {
    return Math.floor(Math.random() * 10000000);
  };

  return (
    <div>
      <NavigationBar />
      <p className="font-poppins text-4xl font-medium leading-tight tracking-tighter text-center"> Complete! </p>
      <NavigationCheckoutBar
        activeStep={activeStep}
        steps={steps}
        stepThreeIcon={stepThreeDone}
      />
      
      <div className='flex justify-center'>
      <div className="py-16 w-3/5 mx-14 my-14 shadow-[0px_20px_20px_10px_#00000024]">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter text-center text-custom-grey"> Thank you! 🎉 </h1>
        <div className="mt-8">
          <p className="font-poppins text-3xl font-medium leading-tight tracking-normal text-center text-[#22637E]">Your order has been received</p>
          <div className="mt-8 bg-white  flex flex-row justify-center gap-4">
  <ul className="flex flex-col items-center gap-2 list-none font-inter text-sm font-semibold leading-7 text-left text-custom-grey">
    <li>Order</li>
    <li>Date:</li>
    <li>Total:</li>
    <li>Payment Method:</li>
  </ul>
  <ul className="flex flex-col items-center gap-2 list-none text-custom-black font-inter text-sm font-semibold leading-7 text-left ">
    <li>{orderCode}</li>
    <li>{orderDate}</li>
    <li>${total.toFixed(2)}</li>
    <li>{isLoadingPaymentMethod ? 'Loading...' : selectedPaymentMethod?.name ? selectedPaymentMethod.name : 'Credit Card / PayPal'}</li>
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