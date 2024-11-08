import React, { useState } from 'react';

function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="bg-gray-200 p-8 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>

      <div className="mb-4">
        <input
          type="radio"
          id="card"
          name="paymentMethod"
          value="card"
          checked={paymentMethod === 'card'}
          onChange={handlePaymentMethodChange}
        />
        <label htmlFor="card">Pay by Card Credit</label>

        <input
          type="radio"
          id="paypal"
          name="paymentMethod"
          value="paypal"
          checked={paymentMethod === 'paypal'}
          onChange={handlePaymentMethodChange}
        />
        <label htmlFor="paypal">Paypal</label>
      </div>

      {paymentMethod === 'card' && (
        <div>
          <div className="mb-4">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 1234 1234 1234"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" />
          </div>

          <div>
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" name="cvc" placeholder="CVC code" />
          </div>
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div>
          <div className="mb-4">
            <label htmlFor="paypalEmail">PayPal Email</label>
            <input type="email" id="paypalEmail" name="paypalEmail" placeholder="Your PayPal Email" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;