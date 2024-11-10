import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SearchIcon from '../components/icons/SearchIcon';
import UserIcon from '../components/icons/UserIcon';
import CartIcon from '../components/icons/CartIcon';
import useCartStore from '../store/cartStore';
import Badge from '../components/Badge';
import SearchMenu from '../components/SearchMenu';

async function getCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  return data;
}

function NavigationBar() {
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCartStore();
 
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const HOME_LINK_KEY = 'home';

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white">
      <div className="w-32 h-6 text-custom-blue bg-white font-poppins text-2xl font-semibold leading-6 text-center pl-3;">UrbanNest</div>
      <ul className="gap-x-10 text-transform: capitalize flex items-center justify-between text-custom-grey bg-white font-space-grotesk text-sm font-medium leading-6 text-left">
        <li key={HOME_LINK_KEY} className="hover:text-custom-blue">
          <Link to="/">Home</Link>
        </li>
        {categories.map((category) => (
          <li key={category} className="hover:text-custom-blue">
            <Link to={`/products/category/${category}`}>{category}</Link>
          </li>
        ))}
        <li key="contact-us" className="hover:text-custom-blue">
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <div className="flex flex-row items-center gap-x-4">
        <button><SearchIcon /></button>
        <Link to="/account"><button className='mt-2'><UserIcon /></button></Link>
        <Link to="/checkout"><button className='mt-2'><CartIcon />
          {cartItems.length > 0 && (
            <Badge count={cartItems.length} className="bg-custom-blue text-white px-1 rounded-full" />
          )}
        </button></Link>
      </div>
    </nav>
  );
}

export default NavigationBar;