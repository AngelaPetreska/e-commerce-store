import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import NavigationCheckoutBar from './NavigationCheckoutBar';
import ContactForm from '../components/ContactForm';
import ShippingAddressForm from './ShippingAddressForm';
import PaymentMethod from './PaymentMethod';
import OrderSummary from './OrderSummary';

function CheckoutDetailsPage() {
  const navigate = useNavigate();
  const activeStep = 1;
  const steps = [
    { title: 'Shopping Cart', link: '/checkout' },
    { title: 'Checkout Details', link: '/checkout-details' },
    { title: 'Order Complete', link: '/order-complete' },
  ];

  const handlePlaceOrder = () => {
    navigate('/order-complete');
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentMethodSelect = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
    const paymentMethodObject = { name: paymentMethod }; // Create an object with a name property
    localStorage.setItem('selectedPaymentMethod', JSON.stringify(paymentMethodObject));
  };

  return (
    <div>
      <div className="flex flex-col">
        <NavigationBar />
        <p className="font-poppins text-4xl font-medium leading-tight tracking-tighter text-center">
          Check Out
        </p>
        <NavigationCheckoutBar activeStep={activeStep} steps={steps} />

        <div className="flex flex-col lg:flex-row mt-8 gap-6">
          {/* Mobile View: Order Summary first */}
          <div className="lg:hidden">
            <OrderSummary />
          </div>

          {/* Left Section - Contact Form, Payment Method, Shipping Address */}
          <div className="flex-1 lg:mr-8">
            <ContactForm />
            <div className="mt-8">
              <PaymentMethod onSelect={handlePaymentMethodSelect} />
              <div className="mt-8">
                <ShippingAddressForm />
                <button
                  className="items-center bg-custom-blue hover:bg-blue-700 text-white w-full h-12 rounded-md mt-4 mb-8"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary (for larger screens) */}
          <div className="lg:w-[350px] hidden lg:block">
            <OrderSummary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutDetailsPage;