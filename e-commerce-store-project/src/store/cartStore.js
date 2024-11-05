import {create}  from 'zustand'; 

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
  updateCartItemQuantity: (itemId, newQuantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    })),
}));

export default useCartStore;