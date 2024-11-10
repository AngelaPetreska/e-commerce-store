import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (index) => {
    setRating(index + 1); 
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilled = i < rating;
      const icon = isFilled ? faStar : faStarHalfAlt;
      const className = isFilled ? 'text-yellow-500' : 'text-gray-300 cursor-pointer';

      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={icon}
          className={className}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;