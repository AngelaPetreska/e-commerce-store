const Badge = ({ count, className }) => {
  if (count <= 0) return null; // Don't render if count is 0 or less

  return (
    <div className={`badge ${className}`}>
      {count}
    </div>
  );
};

export default Badge;