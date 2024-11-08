import { useNavigate } from 'react-router-dom';
import NavigationCheckoutBar from './NavigationCheckoutBar';

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

  return (
    <div className=''>
      <div className='flex flex-row gap-8'>
      <NavigationCheckoutBar activeStep={activeStep} steps={steps} />
      {/* CONTENT */}
      </div>
      <div className="mt-8 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutDetailsPage;