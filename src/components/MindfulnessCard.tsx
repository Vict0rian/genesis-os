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
      <h2><strong>{title}</strong></h2>
      <p>{description}</p>
      <div style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '4px',
        display: 'inline-block',
        fontSize: '12px'
      }}>
        {xp} XP
      </div>
    </Card>
  );
};

export default MindfulnessCard;
