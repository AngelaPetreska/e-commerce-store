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
    <section >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-between text-center mb-8">
          <h3 className="text-4xl font-semibold leading-10 text-black text-left w-40 mr-64">New Arrivals</h3>
          <Link to="/products/women's%20clothing" className="flex mt-2">
          <span className="text-base font-medium text-black ml-96 mr-0 w-[150px] align-text-bottom">More Products </span>
          </Link>
          <span className='pt-1 text-center'><svg  width="60px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z" fill="#0F0F0F"/>
</svg></span>
        </div>

        <div className="flex flex-wrap m-4">
          {products.length > 0 ? (
            products
              .filter((product) => product.category === "women's clothing")
              .slice(2, 6)
              .map((product) => (
                <div key={product.id} className="m-0 lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={product.image} alt={product.title} className="mx-auto w-30 h-48 " />
                    <div className="p-4">
                    <h4 className="text-lg text-custom-black font-medium font-poppins">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h4>
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
       