import React from 'react';
import NavigationCheckoutBar from './NavigationCheckoutBar'; // Import the component

function OrderCompletePage() {
  const activeStep = 2; // Set activeStep to 2 for OrderCompletePage

  return (
    <div>
      <NavigationCheckoutBar activeStep={activeStep} /> {/* Pass activeStep prop */}
      {/* ... rest of your OrderCompletePage content */}
    </div>
  );
}

export default OrderCompletePage;