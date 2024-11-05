import { useLocation } from 'react-router-dom';

function CheckoutPage() {
  const { state } = useLocation();
  const { product, size, quantity } = state || {};

  if (!product) {
    return <div>Error: No product data provided</div>;
  }

  const orderSummary = (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="product-item">
        <p>{product.title}</p>
        <p>Size: {size}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: ${product.price * quantity}</p>
      </div>
      <p className="shipping">Shipping: $0.00</p>
      <p className="tax">Tax: $0.00</p>
      <p className="total-price">Total Price: ${product.price * quantity}</p>
    </div>
  );

  return (
    <div className="checkout-page">
      <NavigationBar />
      {orderSummary}
      {/* Add CARD ICON section */}
      <Footer />
    </div>
  );
}

export default CheckoutPage;