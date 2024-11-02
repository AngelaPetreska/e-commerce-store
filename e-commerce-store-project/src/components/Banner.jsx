import { Link, useParams } from 'react-router-dom';
import React from 'react';
import BannerSvg from '../assets/banner.svg?react';
import ArrowRight from '../assets/arrow-right.svg?react';

const BannerSection = () => {
  const { category } = useParams();

  return (
    <section className="bg-[#F3F5F7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <BannerSvg className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="w-[452px] h-[16px] text-custom-blue font-Poppins font-inter font-bold text-sm leading-[16px] text-left">SALE UP TO 35% OFF</h1>
            <h2 className="w-[452px] h-[132px] text-custom-black font-Poppins font-medium text-4xl leading-[44px] tracking-tighter text-left">Hundreds of Deals, Unbeatable New Prices!</h2>
            <p className="text-custom-black mb-6 w-[452px] h-[64px] font-Poppins  font-inter font-medium text-xl leading-8">Fashion Forward: Make a Statement Without <span className="text-custom-blue">Breaking</span> the <span className="text-custom-blue">Bank</span>!</p>
            <Link to={`/products/category/${category}`}>
              <button className="flex flex-row w-auto h-10 border-b border-black text-l font-Poppins ">
                Shop Now <span className="w-10 h-10 p-2 text-3xl"><ArrowRight/></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;