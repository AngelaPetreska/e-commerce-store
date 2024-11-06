import NavigationBar from './NavigationBar';
import Footer from './Footer';
import useCartStore from '../store/cartStore';
import trash from '../assets/trash.svg';

function CheckoutPage() {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCartStore();

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId, quantityChange) => {
    updateCartItemQuantity(itemId, quantityChange);
  };

  const numberOfProducts = cartItems.length; // Get the number of products

  return (
    <div className="checkout-page">
      <NavigationBar />

      {/* Checkout Content */}
      <div className="container mx-auto mt-4 mb-8">
        <h1 className="text-2xl font-bold mb-4">
          Card ({numberOfProducts})
        </h1> {/* Display "Card" and number of products */}

        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
              <img src={item.product.image} alt={item.product.title} className="w-24 h-24 mr-4" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.product.title}</h2>
                <p className="text-gray-600">Size: {item.size}</p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold">Price: ${(item.product.price).toFixed(2)}</p>
                <div className="py-3 px-3 w-20 h-10 border-2 border-gray-300 rounded-md flex items-center justify-between">
                  <button className="text-2xl text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span className="text-lg font-4xl">{item.quantity}</span>
                  <button className="text-2xl text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <p className="text-lg font-semibold ml-4">Total: ${(item.product.price * item.quantity).toFixed(2)}</p>
                <button className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 ml-4" onClick={() => handleRemoveItem(item.id)}>
                  <img src={trash} alt="Remove" className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Total Price:</p>
            <p className="text-lg font-semibold">${calculateTotal(cartItems).toFixed(2)}</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Checkout</button>
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

