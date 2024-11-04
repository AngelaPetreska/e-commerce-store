import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Newsletter from './Newsletter';
import Footer from './Footer';
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
    <div>
    <NavigationBar />
    <div className="container mx-auto px-4 py-8">
    <h3 className="my-5 flex flex-row justify-center text-custom-grey font-poppins font-medium text-3xl"> {category.split(' ').map((word, index) => 
    index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' ')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
    <Newsletter />
    <Footer />
    </div>
  );
}

export default ProductListingPage;