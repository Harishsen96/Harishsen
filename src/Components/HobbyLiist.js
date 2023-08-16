import React from 'react';
import HobbyCard from './HobbiesCard';
import mycanva from '../Image/mycanva.jpg';
import yashvi from '../Image/yashvi.jpg';
const hobbies = [
    {
        id: 1,
        title: 'Painting',
        description: 'Expressing my creativity through colors and brush strokes.',
        imageUrl:yashvi,
      },
      {
        id: 2,
        title: 'Canvas Designing',
        description: 'Creating digital art on a virtual canvas.',
        imageUrl:mycanva,
      },
  ];
  
const HobbyList = () => {
  return (
    <div className="hobby-list">
      {hobbies.map((hobby) => (
        <HobbyCard
          key={hobby.id}
          title={hobby.title}
          description={hobby.description}
          imageUrl={hobby.imageUrl}
        />
      ))}
    </div>
  );
};

export default HobbyList;