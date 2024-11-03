import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="rounded-t-lg w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-medium">{product.title}</h2>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-gray-900 font-bold">$ {product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;