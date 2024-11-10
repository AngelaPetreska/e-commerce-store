import ValuesCard from './ValuesCard';
import FreeShipping from '../assets/free-shipping.svg';
import MoneyBack from '../assets/money-back.svg';
import SecurePayments from '../assets/secure-payments.svg';
import CustomerSupport from '../assets/cusomer-support.svg';

const Values = () => {
  const features = [
    {
      icon: FreeShipping,
      title: 'Free Shipping',
      description: 'Order above $150'
    },
    {
      icon: MoneyBack,
      title: 'Money-Back',
      description: '30 days guarantee'
    },
    {
      icon: SecurePayments,
      title: 'Secure Payments',
      description: 'Secured by Stripe'
    },
    {
      icon: CustomerSupport,
      title: '24/7 Support',
      description: 'Phone and email support'
    },
  ];

  return (
    <div className="flex justify-center items-center gap-5 py-10">
      {features.map((feature, index) => (
        <ValuesCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default Values;