import React from 'react';
import QuestItem from './QuestItem';
import './QuestList.css';

const QuestList: React.FC = () => {
  return (
    <div className="quest-list">
      <h2>Daily Quests</h2>
      <QuestItem title="Read a chapter of a book" xp={20} />
      <QuestItem title="30 minutes of exercise" xp={30} />
      <QuestItem title="Meditate for 10 minutes" xp={15} />
    </div>
  );
};

export default QuestList;
