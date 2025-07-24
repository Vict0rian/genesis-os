import React from 'react';

interface QuestItemProps {
  title: string;
  xp: number;
}

const QuestItem: React.FC<QuestItemProps> = ({ title, xp }) => {
  return (
    <div className="quest-item">
      <input type="checkbox" />
      <span>{title}</span>
      <span className="xp-reward">+{xp} XP</span>
    </div>
  );
};

export default QuestItem;
