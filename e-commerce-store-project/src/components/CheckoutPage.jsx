import { useLocation } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import useCartStore from '../store/cartStore'; // Import the store

function CheckoutPage() {
  const { cartItems } = useCartStore(); // Get cart items from the store

  return (
    <div className="checkout-page">
      <NavigationBar />
      {cartItems.map((item) => (
        <div key={item.id} className="product-item">
          <p>{item.product.title}</p>
          <p>Size: {item.size}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${(item.product.price * item.quantity).toFixed(2)}</p>
          <p className="shipping">Shipping: $0.00</p>
          <p className="tax">Tax: $0.00</p>
          <p className="total-price">
            Total Price: ${(item.product.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}
      {/* Add CARD ICON section */}
      <Footer />
    </div>
  );
}

export default CheckoutPage;


// <p className="shipping">Shipping: $0.00</p>
// <p className="tax">Tax: $0.00</p>
// <p className="total-price">Total Price: ${product.price * quantity}</p>
// {/* Add CARD ICON section */}
// <Footer />
