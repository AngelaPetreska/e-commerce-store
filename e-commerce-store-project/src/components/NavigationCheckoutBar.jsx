import { Link } from 'react-router-dom';
import CheckMark from '../assets/CheckMark.svg?react';

const NavigationCheckoutBar = ({ activeStep }) => {
  // Define steps and their corresponding links
  const steps = [
    { title: 'Shopping Cart', link: '/checkout' },
    { title: 'Checkout Details', link: '/checkout-details' },
    { title: 'Order Complete', link: '/order-complete' },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-100 py-4">
      <ul className="flex space-x-4">
        {steps.map((step, index) => (
          <li key={step.title} className="flex items-center">
            {index < activeStep ? (
              // Completed step (check icon)
              <CheckMark className="w-6 h-6 text-green-500" />
            ) : (
              // Both active and inactive steps render the title
              <span className="text-lg font-semibold">{step.title}</span>
            )}
            {/* Add a conditional class for styling */}
            <span className={index === activeStep ? 'text-custom-blue' : 'text-gray-500'}>
              {step.title} {/* Render title again with conditional styling */}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationCheckoutBar;