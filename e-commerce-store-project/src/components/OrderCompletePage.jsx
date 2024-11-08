import NavigationCheckoutBar from './NavigationCheckoutBar';
import stepThreeDone from '../assets/stepThreeDone.svg';

function OrderCompletePage() {
  const activeStep = 2;

  const steps = [
    { title: 'Shopping Cart', link: '/checkout' },
    { title: 'Checkout Details', link: '/checkout-details' },
    { title: 'Order Complete', link: '/order-complete' },
  ];

  return (
    <div>
    <NavigationCheckoutBar
      activeStep={activeStep}
      steps={steps}
      stepThreeIcon={stepThreeDone}
    />
      {/*  CONTENT  */}
    </div>
  );
}

export default OrderCompletePage;