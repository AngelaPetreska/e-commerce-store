import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import useCartStore from '../store/cartStore';
import trash from '../assets/trash.svg';
import CheckoutIcon from '../assets/CheckoutIcon.svg';
import VisaLogo from '../assets/VisaLogo.svg';
import MasterCardLogo from '../assets/MasterCardLogo.svg';
import PayPalLogo from '../assets/PayPalLogo.svg';
import OrderSummary from './OrderSummary';

function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCartStore();

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId, quantityChange) => {
    updateCartItemQuantity(itemId, Math.max(1, quantities[itemId] + quantityChange)); // Ensure minimum quantity of 1
  };

  return (
    <div className="checkout-page">
      <NavigationBar />

      {/* Checkout Content */}
      <div className="container mx-auto mt-4 mb-8">
        <h1 className="text-2xl font-bold mb-4">
          Card <span className="text-custom-blue">{cartItems.length}</span>
        </h1>

        <div className="flex">
          <div className="flex-grow">
            <div className="grid grid-cols-1 gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center py-4 gap-3">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="border border-white rounded-[10px] w-24 h-24 mr-4 object-contain object-center"
                  />
                  <div className="flex-1">
                    <h2 className="font-lato text-[14px] font-semibold leading-[20px] text-left">
                      {item.product.title}
                    </h2>
                    <p className="font-lato text-[14px] font-bold leading-[30px] text-gray-600">
                      Size: {item.size}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pr-8 ">
                    <p className="font-lato text-[14px] font-normal leading-[20px] text-left text-[#555555]">
                      ${(item.product.price).toFixed(2)}
                    </p>
                    <div className="py-3 px-3 w-20 h-10 border-2 border-gray-300 rounded-md flex items-center justify-between">
                      <button
                        className="text-2xl text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="text-lg font-4xl">{item.quantity}</span>
                      <button
                        className="text-2xl text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className=" font-lato text-[14px] font-normal leading-[20px] text-left text-[#555555] ">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 ml-4"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <img src={trash} alt="Remove" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <OrderSummary />
        </div>

        <div className='flex justify-end pr-6'> 
        <button
  className="w-[180px] flex justify-center bg-custom-blue hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 mr-10 text-sm font-medium uppercase text-right font-lato"
  onClick={() => navigate('/checkout-details')} // Navigate to CheckoutDetailsPage
>
  <img src={CheckoutIcon} alt="Checkout Icon" className="mr-2" />
  Checkout
</button>
        </div>

        <div className="flex justify-end pr-6 border-b border-gray-300 gap-6 mt-8 mb-12 pb-4 ">
          <img src={VisaLogo} alt="Visa Icon" className="mr-2" />
          <img src={MasterCardLogo} alt="MasterCard Icon" className="mr-2" />
          <img src={PayPalLogo} alt="PayPal Icon" className="mr-2" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CheckoutPage;