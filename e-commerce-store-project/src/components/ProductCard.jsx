import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <Link to={`/products/${product.id}`}>
        <div className="flex flex-col">
        <div className="aspect-ratio w-full h-[200px]">
          <img src={product.image} alt={product.title} className="object-contain object-center w-full h-full" />
          </div>
          <div className="p-4">
            <h2 className="text-custom-black font-inter text-sm font-medium leading-7 text-center">{product.title.split(' ').slice(0, 2).join(' ')}</h2>
            <div className='flex flex-row justify-center items-center gap-3'>
              <div className="w-24 bg-white text-xs font-medium text-custom-black px-4 py-2 border-2 rounded-full">IN STOCK</div>
              <p className="text-gray-500 text-sm font-medium">$ {product.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;