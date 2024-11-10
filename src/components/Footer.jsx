import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import YoutubeIcon from '../assets/youtube.svg';

function Footer() {
  return (
    <footer className="bg-custom-black py-4">
      <div className="flex flex-col items-center">
        <div className="poppins-font pt-12 flex flex-row">
          <p className="mr-6 pr-4 text-custom-blue border-r-2 border-gray-600 font-bold text-2xl md:text-3xl">UrbanNest</p>
          <p className="pt-2 text-[#E8ECEF] text-sm md:text-base font-inter font-normal leading-6">It's More Affordable Than Ever to Upgrade Your Wardrobe!</p>
        </div>
        <div className="w-10/12 border-t border-gray-600 flex flex-row gap-4 mt-4 pt-5 pb-8">
          <p className="text-[#E8ECEF] text-xs md:text-sm font-normal leading-6">Copyright © 2024 <span className='text-custom-blue font-bold'>UrbanNest</span>. All rights reserved</p>
          <a href="/" className="mr-2 text-[#E8ECEF] text-xs md:text-sm font-bold leading-6 hover:text-blue-600">Privacy Policy</a>
          <a href="/" className="text-[#E8ECEF] text-xs md:text-sm font-bold leading-6 hover:text-blue-600 mr-32">Terms of Use</a>
          <div className="flex flex-end gap-4 ml-32">
            <a href="/" className="text-2xl md:text-3xl">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="/" className="text-2xl md:text-3xl">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="/" className="text-2xl md:text-3xl">
              <img src={YoutubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;