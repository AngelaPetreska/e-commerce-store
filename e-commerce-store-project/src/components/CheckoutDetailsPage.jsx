import { useNavigate } from 'react-router-dom';
import NavigationCheckoutBar from './NavigationCheckoutBar';
import ContactForm from '../components/ContactForm';
import ShippingAddressForm from './ShippingAddressForm';
import PaymentMethod from './PaymentMethod';


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
      
      <div className='CONTENT'>

        <div className='CONTENT - LEFT '>

          <div>
          <ContactForm />
          <ShippingAddressForm />
          <PaymentMethod />
          </div>

        </div>

        <div className=' CONTENT - RIGHT'>

        </div>

      </div>


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