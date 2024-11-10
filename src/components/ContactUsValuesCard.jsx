const ContactUsValuesCard = ({ icon, title, description }) => {
    return (
          <div className="bg-[#F3F5F7] p-6 w-[300px] h-[150px] flex flex-col items-center justify-center">
              <img src={icon} alt={title} className="mb-4 w-12 h-12 top-1 left-1" />
           <h3 className="text-[#6C7275] font-Poppins font-inter text-base font-bold leading-none mb-2">{title}</h3>
           <p className="text-custom-black font-inter text-base font-semibold leading-relaxed text-center-6 mb-6" > {description}</p>
      </div>
    );
  };
  
  export default ContactUsValuesCard;