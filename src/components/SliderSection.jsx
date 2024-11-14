import React, { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Slider1 from '../assets/Slider1.jpg';
import Slider2 from '../assets/Slider2.jpg';
import Slider3 from '../assets/Slider3.jpg';

function SliderSection() {
  const slides = [
    { id: 1, url: Slider1 }, 
    { id: 2, url: Slider2 },
    { id: 3, url: Slider3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='margin-10 max-w-[1120px] m-auto px-20 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[500px] rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <button className='absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer focus:outline-none'>
        <BsFillArrowLeftCircleFill onClick={prevSlide} size={30} />
      </button>
      {/* Right Arrow */}
      <button className='absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer focus:outline-none'>
        <BsFillArrowRightCircleFill onClick={nextSlide} size={30} />
      </button>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide) => (
          <div
            key={slide.id} // Key based on unique slide ID
            onClick={() => goToSlide(slide.index)} // Use slide index for goToSlide
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between gap-x-24 h-fit w-fit max-w-full">
        <p className="font-poppins font-medium text-6xl text-left leading-74 text-custom-black">Purely Distinct <span className='text-custom-blue'>/</span> Purely Superior<span className='text-custom-blue'>.</span></p>
        <p className="font-popins font-semibold text-xl text-right leading-6 text-custom-black"><span className='text-custom-blue'>Purely Distinct</span> is a gift and decorations store based in <span className='text-custom-blue'>Struga, Macedonia.</span> Established in 2024.</p>
      </div>
    </div>
  );
}

export default SliderSection;