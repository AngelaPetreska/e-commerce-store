import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import StarRating from './StarRating'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold leading-10 tracking-tighter text-black text-left">New Arrivals</h1>
          <Link to="/products/women's%20clothing" className="flex items-center mt-2">
            <span className="text-gray-500 mr-2">More Women's Clothing</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 01-1-1V3a1 1 0 011-1h7.293z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="flex flex-wrap m-4">
          {products.length > 0 ? (
            products
              .filter((product) => product.category === "women's clothing")
              .slice(0, 4)
              .map((product) => (
                <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-48 " />
                    <div className="p-4">
                      <h4 className="text-xl font-bold">{product.category}</h4>
                      <p className="text-gray-700">{product.title}</p>
                      <p className="w-70 h-21 text-left text-black text-sm font-normal leading-6 font-lato">$ {product.price}</p>
                      <div className="flex items-center">
                        <StarRating initialRating={product.rating.rate} />
                        <span className="text-gray-500 ml-2">({product.rating.count})</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <FontAwesomeIcon
                          icon={favorites.includes(product.id) ? faHeart : faHeartBroken}
                          className="text-red-500 mr-2"
                          onClick={() => toggleFavorite(product.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
       