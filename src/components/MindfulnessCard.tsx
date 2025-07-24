import React from 'react';
import Card from './Card';

interface MindfulnessCardProps {
  title: string;
  description: string;
  xp: number;
}

const MindfulnessCard: React.FC<MindfulnessCardProps> = ({ title, description, xp }) => {
  return (
    <Card>
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{description}</p>
      <div className="bg-blue-500 text-white py-1 px-2 rounded inline-block text-xs">
        {xp} XP
      </div>
    </Card>
  );
};

export default MindfulnessCard;
