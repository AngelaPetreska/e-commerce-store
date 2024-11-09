const Badge = ({ count, className }) => {
  return (
    <div className={`badge absolute top-2 right-1 ${className} ml-8 bg-custom-blue text-white font-bold rounded-full px-2 py-1 text-xs w-4 h-4 flex items-center justify-center`}>
      {count}
    </div>
  );
};

export default Badge;