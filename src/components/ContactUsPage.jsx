import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; 
import NavigationBar from "../components/NavigationBar";
import Values from "../components/Values";
import Footer from "../components/Footer";
import ContactUsBanner from "../assets/ContactUsBanner.svg?react";
import ContactUsValuesCard from "./ContactUsValuesCard";
import Adress from "../assets/adress.svg";
import Call from "../assets/call.svg";
import Email from "../assets/email.svg";
import ArrowRight from '../assets/arrow-right.svg?react';


function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit   
 = (e) => {
    e.preventDefault(); 

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/home-page'); 
    };

  return (
    <div> 
      <NavigationBar />
      <div className='mx-14 my-5 flex flex-col'>
      <div className='my-5'>
        <div className='my-5 font-poppins text-custom-black text-4xl font-medium leading-tight tracking-tighter'>
        <h1>We believe in sustainable fashion.</h1>
        <h2>We're passionate about style that empowers you.</h2>
        </div>
        <p className='font-inter text-custom-black text-base leading-relaxed w-[824px] h-[78px]'>Our collection features timeless fashion, with natural fabrics, elegant silhouettes, and classic designs that can elevate any wardrobe. Each piece enchants with its sophistication, made to last for generations, blending the essence of past eras with a modern touch.</p>
      </div>

      <div className="my-5 flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full h-full object-cover">
        <ContactUsBanner className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 p-8 bg-[#F3F5F7]">
        <h2 className="mb-4 font-medium font-poppins text-3xl leading-tight tracking-tighter">About Us</h2>
        <div className='text-gray-600 font-poppins font-inter text-base leading-relaxed'>
        <p>UrbanNest is a fashion store based in Struga, Macedonia.</p>
        <p>Established in 2024, by Nikola Ristoski.</p>
        <p>Our dedicated customer service team is always ready to support you 24/7.</p>
        </div>
        <Link to="/">
        <button className="mt-5 px-3 py-3 flex flex-row gap-1 items-center bg-[#F3F5F7] hover:bg-blue-700 rounded-md text-custom-black font-medium font-inter text-base leading-snug tracking-tighter">Shop Now <ArrowRight/></button>
        </Link>
      </div>
      </div>
      <div>
        <h1 className='my-5 font-poppins text-3xl font-medium leading-tight tracking-tighter text-center'>Contact Us</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <ContactUsValuesCard
          icon={Adress}
          title="ADDRESS"
          description="Struga, Macedonia"
        />
        <ContactUsValuesCard
          icon={Call}
          title="CONTACT US"
          description="+38970712526"
        />
        <ContactUsValuesCard
          icon={Email}
          title="EMAIL"
          description="support@urbannest.com"
        />
      </div>
      <div>
          <form onSubmit={handleSubmit} className="bg-white text-[#6C7275] p-6 rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium ">
                FULL NAME
              </label>
              <input
                type="text"
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                placeholder="Your email" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                MESSAGE
              </label>
              <textarea
                id="message"   
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"   
                placeholder="Your message" 
              ></textarea>
            </div>
             <button
      type="submit"
      className="w-full bg-custom-blue hover:bg-blue-700 text-white py-2 px-4 rounded font-inter text-base leading-7 tracking-tighter text-center"
      onClick={handleButtonClick}>Send Message</button>
          </form>
        </div> 
      </div>
      </div>
      <Values />
      <Footer />
  </div>
  );
}

export default ContactUsPage;