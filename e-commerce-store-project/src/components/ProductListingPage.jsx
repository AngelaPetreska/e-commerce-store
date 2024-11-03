import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard'; 

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      if (!response.ok) {
        console.error('Error fetching products');
        return;
      }
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products in Category: {category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;