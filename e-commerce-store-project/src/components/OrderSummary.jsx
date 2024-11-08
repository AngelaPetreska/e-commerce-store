import useCartStore from '../store/cartStore';

function OrderSummary() {
  const { cartItems } = useCartStore();

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const total = calculateTotal(cartItems);

  return (
    <div className="rounded-2xl flex-shrink-0 min-w-[309px] min-h-[293px] bg-[#F3F5F7] px-8">
      <div className="mt-8 pt-4 mb-4"> {/* Added spacing */}
        <div className="flex flex-col justify-between gap-4">
          <p className="text-lg font-bold leading-7 font-lato">Order Summary</p>
          <div className="text-sm font-normal leading-5 font-lato flex flex-col gap-4 ">
            <div className="flex justify-between">
              <p className="text-[#555555]">Price:</p>
              <p className="text-[#262626]">${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#555555]">Shipping:</p>
              <p className="text-[#262626]">$0</p>
            </div>
            <div className="flex justify-between">
              <p className="mb-16 text-sm font-normal leading-5 font-lato text-[#555555]">Tax:</p>
              <p className="text-sm font-normal leading-5 font-lato text-[#262626]">$0</p>
            </div>
            <div className="border-t border-gray-300 pt-4 flex justify-between">
              <p className="text-sm font-bold leading-5 font-lato text-[#262626]">Total Price:</p>
              <p className="text-sm font-bold leading-5 font-lato text-[#262626]">${total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;