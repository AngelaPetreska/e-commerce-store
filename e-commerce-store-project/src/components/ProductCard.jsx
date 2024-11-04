import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} className="text-custom-black w-[248px] h-[312px] p-0 pl-6 gap-10 rounded-tl-md" />
        <div className="p-4">
          <h2 className="my-3 text-custom-black font-inter text-sm font-medium leading-7 text-center">{product.title.split(' ').slice(0, 6).join(' ')}</h2>
          <div className='flex flex-row justify-center items-center gap-3'>
          <div className="w-24 bg-white text-xs font-medium text-custom-black px-4 py-2 border-2 rounded-full">IN STOCK</div>
          <p className="text-gray-500 text-sm font-medium">$ {product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;