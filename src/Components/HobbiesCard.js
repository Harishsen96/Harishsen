import React from 'react';
import './Hobbies.css';

const HobbyCard = ({ title, description, imageUrl }) => {
  return (
    <div className="hobby-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HobbyCard;
