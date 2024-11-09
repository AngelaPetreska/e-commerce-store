import { useLocation } from 'react-router-dom';
import CheckMark from '../assets/CheckMark.svg?react';
import stepTwo from '../assets/stepTwo.svg';
import stepThree from '../assets/stepThree.svg';
import stepThreeDone from '../assets/stepThreeDone.svg';

const NavigationCheckoutBar = ({ activeStep, steps }) => {
  const location = useLocation();
  const isOrderCompletePage = location.pathname === '/order-complete';

  return (
    <div className="flex justify-center items-center bg-white py-4 gap-4">
      <ul className="flex space-x-4"> 
        {steps.map((step, index) => (
          <li key={step.title} className="flex items-center">
            {index < activeStep ? (
              <CheckMark className="mr-2 w-6 h-6 text-green-500" /> 
            ) : (
              <div>
                {index === 1 && (
                  <img src={stepTwo} alt="Step 2 Icon" className="mr-2 w-6 h-6" /> 
                )}
                {index === 2 && (
                  <img
                    src={isOrderCompletePage ? stepThreeDone : stepThree}
                    alt="Step 3 Icon"
                    className="mr-2 w-6 h-6" 
                  />
                )}
              </div>
            )}
            <span className="text-lg font-semibold">{step.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationCheckoutBar;