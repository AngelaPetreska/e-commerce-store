const ValuesCard = ({ icon, title, description }) => {
  return (
        <div className="bg-[#F3F5F7] p-6 w-[200px] h-[200px]">
            <img src={icon} alt={title} className="mb-4 w-12 h-12 top-1 left-1" />
         <h3 className="text-lg font-Poppins font-semibold mb-2">{title}</h3>
         <p className="w-full h-auto text-custom-grey font-Poppins font-medium text-sm leading-6 mb-6" > {description}</p>
    </div>
  );
};

export default ValuesCard;