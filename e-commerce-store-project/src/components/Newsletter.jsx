import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    setEmail('');
  };

  return (
    <div className="bg-[#F3F5F7] p-16 text-custom-black flex justify-between">
      <div className="text-left">
        <h2 className="text-2xl mb-4 font-bold pt-5">Join Our Newsletter</h2>
        <p className="mb-4 text-custom-grey font-normal text-sm ">We love to surprise our subscribers with occasional gifts.</p>
      </div>
      <form className="flex text-right items-center" onSubmit={handleSubmit}>
        <input
          type="email"
          className="bg-[#F3F5F7] h-12 w-72 text-custom-black border text-sm font-medium mr-4 px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="p-0 h-12 w-40 bg-custom-blue hover:bg-blue-700 text-white font-medium text-sm rounded-lg border border-gray-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterSignup;