import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Avatar from '../assets/Avatar.svg?react';

function AccountDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      firstName,
      lastName,
      displayName,
      email,
      oldPassword,
      newPassword,
      repeatPassword,
    });
  };

  return (
    <div>
        <NavigationBar />
        <h1 className='my-10 text-black font-poppins text-4xl font-medium leading-tight tracking-tighter text-center'>My Account</h1>
        
    <div className="bg-gray-100 p-8 rounded shadow-md flex flex-col md:flex-row md:space-x-4">
      
      <div className="md:w-1/2">
        {/* Add the left-side content here, including the image and navigation links */}
        <div className="flex flex-col items-center">
          <Avatar className="mt-5 w-24 h-24 rounded-full mb-4"/>
          <h2 className="mb-10 font-inter text-xl font-bold leading-8 text-left">Sophia Collins</h2>
          <ul className='font-inter text-base font-semibold leading-7 text-left mb-2'>
            <li className="w-52 border-b-2 border-black">Account</li>
            <li className="my-5 text-gray-600">Address</li>
            <li className="my-5 text-gray-600">Wishlist</li>
            <li className="my-5 text-gray-600">Log Out</li>
          </ul>
        </div>
      </div>
      <div className="flex-grow md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Account Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              FIRST NAME *
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              LAST NAME *
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
              DISPLAY NAME *
            </label>
            <input
              type="text"
              id="displayName"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your display name"
            />
            <p className='mt-3 block text-xs font-medium text-gray-700'>This will be how your name will be displayed in the account section and in reviews</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              EMAIL *
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Password</h2>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
              OLD PASSWORD
            </label>
            <input
              type="password"
              id="oldPassword"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter your old password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              NEW PASSWORD
            </label>
            <input
              type="password"
              id="newPassword"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-700">
              REPEAT NEW PASSWORD
            </label>
            <input
              type="password"
              id="repeatPassword"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat your new password"
            />
          </div>
          <button
            type="submit"
            className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default AccountDetails;