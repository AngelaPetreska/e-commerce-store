import { Link } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react';
import SearchIcon from '../components/icons/SearchIcon';
import UserIcon from '../components/icons/UserIcon';
import CartIcon from '../components/icons/CartIcon';

async function getCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  return data;
}

function NavigationBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white">
      <div className="w-32 h-6 text-custom-blue bg-white font-poppins text-2xl font-semibold leading-6 text-center pl-3;">UrbanNest</div>
      <ul className="gap-x-10 text-transform: capitalize flex items-center justify-between text-custom-grey bg-white font-space-grotesk text-sm font-medium leading-6 text-left">
      <li key="home" className="hover:text-custom-blue">
    <Link to="/">Home</Link>
    </li>
        {categories.map((category) => (
          <li key={category.id} className="hover:text-custom-blue">
            <Link to={`/products/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-row items-center gap-x-4">
      <SearchIcon />
      <UserIcon />
      <CartIcon />
      </div>
    </nav>
  );
}

export default NavigationBar;