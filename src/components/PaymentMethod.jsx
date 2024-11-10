import React, { useState } from 'react';

function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState('card'); // Initial payment method

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    onSelect(event.target.value); // Pass the selected value to the parent component
  };


  return (
    <div className="border-2 border-gray-300 rounded-md flex flex-col space-y-4 bg-white p-8">
      <h2 className="mb-4 font-poppins text-2xl font-medium leading-7 text-left">Payment Method</h2>

      <div className="flex flex-col space-y-2 ">
        <div className="flex items-center">
          <div className="flex items-center cursor-pointer">
          <div className={paymentMethod === 'card' ? 'bg-gray-100 px-4 py-2 text-custom-black' : 'bg-white px-4 py-2 text-custom-black'}>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={handlePaymentMethodChange}
              className="mb-4 w-4 h-4 border-gray-300 rounded-full bg-white focus:ring-black"
            />
            <label htmlFor="card" className="ml-2 mb-4 font-poppins text-sm font-medium leading-7 text-left text-custom-black">
              Pay by Credit Card 
            </label>
            </div>
          </div>
          <div className={paymentMethod === 'paypal' ? 'bg-gray-100 px-4 py-2 text-custom-black ' : 'bg-white px-4 py-2 text-custom-black '}>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={handlePaymentMethodChange}
              className="mb-4 w-4 h-4 border-gray-300 rounded-full bg-white focus:ring-black"
            />
            <label htmlFor="paypal" className=" ml-2 mb-4 px-4 py-2 font-poppins text-sm font-medium leading-7 text-left text-custom-black ">
              Paypal
            </label>
          </div>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <div className="mt-6">
          <div className="mb-4">
            <label htmlFor="cardNumber" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 1234 1234 1234"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-2"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="expirationDate" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
                Expiration Date
              </label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                placeholder="MM/YY"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="cvc" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                placeholder="CVC code"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-2"
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div className="mt-6">
          <div className="mb-4">
            <label htmlFor="paypalEmail" className="uppercase font-inter text-xs font-bold leading-3 text-[#6C7275]">
              PayPal Email
            </label>
            <input
              type="email"
              id="paypalEmail"
              name="paypalEmail"
              placeholder="Your PayPal Email"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-2"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;