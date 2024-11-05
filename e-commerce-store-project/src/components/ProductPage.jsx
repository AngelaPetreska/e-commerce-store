import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S'); // Default selected size
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleSizeChange = size => {
    setSelectedSize(size);
  };

  const handleQuantityChange = change => {
    setQuantity(Math.max(1, quantity + change));
  };

  const toggleFavorite = productId => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="product-page px-20 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Product Image */}
        <div className="product-image-container mx-20 my-40 md:col-span-6 overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>

        {/* Product Details */}
        <div className="mt-20 product-info flex flex-col md:col-span-6 p-8 bg-white">
          <div className="text-center md:text-left p-0">
            <h2 className="mt-5 text-[#262626] text-2xl font-extrabold uppercase tracking-tight leading-6">{product.title}</h2>
            <h2 className="mt-5 text-xl font-medium leading-7 text-gray-[#262626] mb-0">Price: ${product.price}</h2>
            <div className="flex flex-row gap-3">
              <p className="mt-5 text-xl font-medium leading-7 text-gray-[#262626] mb-0">
                Description: <span className="text-base">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</span>
              </p>
              <FontAwesomeIcon
                icon={favorites.includes(product.id) ? faHeart : faHeartBroken}
                className="text-xl text-gray-400"
                onClick={() => toggleFavorite(product.id)}
              />
            </div>

            {/* Size section */}
            <div className="flex flex-col space-y-2 mt-10">
              <div className="flex space-x-4 text-base font-normal leading-5">
                <p className="w-20 h-10 py-2">Size</p>
                <button className="px-4 py-2 border-2 border-gray-400 rounded disabled cursor-default">XS</button>
                <button className={`px-4 py-2 border-2 border-gray-600 rounded text-grey-800 ${selectedSize === 'S' ? 'bg-blue-500 text-white' : 'hover:bg-gray-300 hover:text-gray-900'} ${selectedSize === 'S' ? 'active' : ''}`} onClick={() => handleSizeChange('S')}>S</button>
                <button className={`px-4 py-2 border-2 border-gray-600 rounded text-grey-800 ${selectedSize === 'M' ? 'bg-blue-500 text-white' : 'hover:bg-gray-300 hover:text-gray-900'} ${selectedSize === 'M' ? 'active' : ''}`} onClick={() => handleSizeChange('M')}>M</button>
                <button className={`px-4 py-2 border-2 border-gray-600 rounded text-grey-800 ${selectedSize === 'L' ? 'bg-blue-500 text-white' : 'hover:bg-gray-300 hover:text-gray-900'} ${selectedSize === 'L' ? 'active' : ''}`} onClick={() => handleSizeChange('L')}>L</button>
                <button className="px-4 py-2 border-2 border-gray-400 rounded text-gray-700 disabled cursor-default">XL</button>
              </div>

              {/* Shipping section */}
              <div className="mt-5 flex flex-row gap-2">
                <p className="">Shipping</p>
                <p className="text-gray-400">Delivery Time: 3–5 days</p>
              </div>

              {/* Quantity section and buttons */}
              <div className="mt-5 flex flex-col items-start">
                <div className="flex items-center space-x-2 mb-2">
                  <p>Quantity</p>
                  <div className="py-3 px-3 w-20 h-10 border-2 border-gray-300 rounded-md flex items-center justify-between">
                    <button className="text-2xl text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200" onClick={() => handleQuantityChange(-1)}>-</button>
                    <span className="text-lg font-4xl">{quantity}</span>
                    <button className="text-2xl text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200" onClick={() => handleQuantityChange(1)}>+</button>
                  </div>
                </div>
                <div className="mt-5 flex space-x-4">
                  <button
                    className="w-48 h-15 px-4 py-2 bg-custom-blue text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    onClick={() =>
                      navigate('/checkout', {
                        state: { product: product, size: selectedSize, quantity: quantity },
                      })
                    }
                  >
                    Buy Now
                  </button>
                  <button className="w-48 h-15 px-4 py-2 bg-white text-gray-700 border-2 border-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;