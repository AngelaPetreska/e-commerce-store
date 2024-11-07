import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import useCartStore from '../store/cartStore';
import trash from '../assets/trash.svg';

function CheckoutPage() {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCartStore();

  // Local state to manage quantity for each item
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
    setQuantities((prevQuantities) => ({ ...prevQuantities, [itemId]: undefined })); // Remove quantity from state
  };

  const handleQuantityChange = (itemId, quantityChange) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(1, prevQuantities[itemId] + quantityChange), // Ensure minimum quantity of 1
    }));
    // Update cart based on new quantity (optional, consider using useEffect)
    updateCartItemQuantity(itemId, quantities[itemId]); // Update cart using new quantity
  };

  const numberOfProducts = cartItems.length; // Get the number of products

  return (
    <div className="checkout-page">
      <NavigationBar />

      {/* Checkout Content */}
      <div className="container mx-auto mt-4 mb-8">
        <h1 className="text-2xl font-bold mb-4">
          Card <span className="text-custom-blue">{numberOfProducts}</span>
        </h1> {/* Display "Card" and number of products */}

        <div className="flex">
          <div className="flex-grow">
            <div className="grid grid-cols-1 gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center py-4">
                  <img src={item.product.image} alt={item.product.title} className="border border-white rounded-[10px] w-24 h-24 mr-4" />
                  <div className="flex-1">
                    <h2 className="text-lg font-lato text-[14px] font-bold leading-[20px] text-left">{item.product.title}</h2>
                    <p className="text-gray-600">Size: {item.size}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold">Price: ${(item.product.price).toFixed(2)}</p>
                    <div className="py-3 px-3 w-20 h-10 border-2 border-gray-300 rounded-md flex items-center justify-between">
                      <button className="text-2xl text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <span className="text-lg font-4xl">{quantities[item.id] || item.quantity}</span> {/* Display current quantity */}
                      <button className="text-2xl text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                    <p className="text-lg font-semibold ml-4">Total: ${(item.product.price * (quantities[item.id] || item.quantity)).toFixed(2)}</p>
                    <button className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 ml-4" onClick={() => handleRemoveItem(item.id)}>
                      <img src={trash} alt="Remove" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 w-1/5">
            <div className="mt-8 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Price:</p>
                <p className="text-lg font-semibold">Shipping: <span>$0</span></p>
                <p className="text-lg font-semibold">Tex: <span>$0</span></p>
                <p className="text-lg font-semibold">Price:</p>
                <p className="text-lg font-semibold">${calculateTotal(cartItems).toFixed(2)}</p>
                <p className="text-lg font-semibold">Total Price:</p>
                <p className="text-lg font-semibold">${calculateTotal(cartItems).toFixed(2)}</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Checkout</button>
            </div>
          </div>
        </div>

      </div>

      {/* Add CARD ICON section (replace with your implementation) */}
      {/* <div className="card-icon-section">
        {/* Your card icon implementation here 
      </div> */}

      <Footer />
    </div>
  );
}

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

export default CheckoutPage;
// <p className="shipping">Shipping: $0.00</p>
// <p className="tax">Tax: $0.00</p>
// <p className="total-price">Total Price: ${product.price * quantity}</p>
// {/* Add CARD ICON section */}
// <Footer />