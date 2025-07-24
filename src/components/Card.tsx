import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg m-4">
      {children}
    </div>
  );
};

export default Card;
