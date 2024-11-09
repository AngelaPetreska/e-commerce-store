import { createContext, useState, useContext } from 'react';

const CheckoutStoreContext = createContext();

export const CheckoutStoreProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState({
    // Initial state for order details
    orderCode: null,
    date: null,
    products: [], // Array of objects with product details (id, quantity, price)
    paymentMethod: null,
  });

  const updateOrderDetails = (newData) => {
    setOrderDetails({ ...orderDetails, ...newData });
  };

  return (
    <CheckoutStoreContext.Provider value={{ orderDetails, updateOrderDetails }}>
      {children}
    </CheckoutStoreContext.Provider>
  );
};

export const useCheckoutStore = () => useContext(CheckoutStoreContext);