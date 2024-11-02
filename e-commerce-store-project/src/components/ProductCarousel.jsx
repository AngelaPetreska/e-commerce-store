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
    <section>
      <div className="container px-5 py-24 mx-auto">
        {/* ... other components ... */}

        <div className="flex flex-wrap m-4">
          {products.length > 0 ? (
            products
              .filter((product) => product.category === "women's clothing")
              .slice(2, 6)
              .map((product) => (
                <div key={product.id} className="m-0 lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.image} alt={product.title} className="mx-auto w-30 h-48 " />
                    </Link>
                    <div className="p-4">
                      <Link to={`/products/${product.id}`}>
                        <h4 className="text-lg text-custom-black font-medium font-poppins">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h4>
                        <p className="text-base font-medium text-custom-grey font-poppins">{product.title}</p>
                      </Link>
                      <div className="flex mt-2 mr-8 font-poppins">
                        <p className="text-base font-medium text-custom-grey font-poppins">{product.title}</p>
                        <FontAwesomeIcon
                          icon={favorites.includes(product.id) ? faHeart : faHeartBroken}
                          className="text-custom-blue mr-2"
                          onClick={() => toggleFavorite(product.id)}
                        />
                      </div>
                      <p className="w-70 h-21 text-left text-custom-black text-lg font-normal leading-6 font-poppins">Price: $ {product.price}</p>
                      <div className="flex items-center">
                        <StarRating initialRating={product.rating.rate} />
                        <span className="text-gray-500 ml-2 font-poppins">({product.rating.count})</span>
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
       