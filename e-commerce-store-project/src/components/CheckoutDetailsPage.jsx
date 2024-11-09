import { useNavigate } from 'react-router-dom';
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

  return (
    <div> 
    <div className="flex flex-col mx-16">
      <NavigationBar />
      <p className='font-poppins text-4xl font-medium leading-tight tracking-tighter text-center'> Check Out</p>
      <NavigationCheckoutBar activeStep={activeStep} steps={steps} />

      <div className="flex mt-8">
        <div className="flex-1 mr-8">
          <ContactForm />
          
          <div className="mt-8">  
            <PaymentMethod />
            <div className="mt-8">  
            <ShippingAddressForm />
            <button
          className="items-center bg-custom-blue hover:bg-blue-700 text-white w-full h-12 rounded-md mt-4 mb-20"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
          </div>
          </div>
        </div>
        <div >
        <OrderSummary/>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default CheckoutDetailsPage;