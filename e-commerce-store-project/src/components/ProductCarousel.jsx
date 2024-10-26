import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

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
        <div className="flex flex-wrap m-4">
          {products.filter((product) => product.category === "women's clothing").map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-info">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p className="price">${product.price}</p>
                </div>
                <div className="product-rating">
                  {[...Array(Math.round(product.rating.rate))].map((_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                  {[...Array(5 - Math.round(product.rating.rate))].map((_, i) => (
                    <i key={i} className="fa fa-star-o"></i>
                  ))}
                </div>
                <div className="product-actions">
                  <i
                    className={`fa fa-heart ${favorites.includes(product.id) ? 'fa-heart-o' : ''}`}
                    onClick={() => toggleFavorite(product.id)}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

  // <div className="price-rating">
  // <span className="price">${price.toFixed(2)}</span>
  // <div className="star-rating">
  // {[...Array(filledStars)].map((_, index) => (
 // <span key={index} className="filled-star">★</span>
// ))}
// {[...Array(emptyStars)].map((_, index) => (
// <span key={index} className="empty-star">☆</span>
// ))}
       