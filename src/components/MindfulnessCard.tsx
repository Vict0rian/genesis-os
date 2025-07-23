import React from 'react';

interface MindfulnessCardProps {
  title: string;
  description: string;
  xp: number;
}

const MindfulnessCard: React.FC<MindfulnessCardProps> = ({ title, description, xp }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '16px 0' }}>
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
    </div>
  );
};

export default MindfulnessCard;
