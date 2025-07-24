import React from 'react'
import QuestItem from './QuestItem'
import './QuestList.css'

interface QuestListProps {
  addXp: (skill: string, amount: number) => void
}

const QuestList: React.FC<QuestListProps> = ({ addXp }) => {
  return (
    <div className="quest-list">
      <h2>Daily Quests</h2>
      <QuestItem
        title="Read a chapter of a book"
        xp={20}
        skill="intellect"
        addXp={addXp}
      />
      <QuestItem
        title="30 minutes of exercise"
        xp={30}
        skill="fitness"
        addXp={addXp}
      />
      <QuestItem
        title="Meditate for 10 minutes"
        xp={15}
        skill="creativity"
        addXp={addXp}
      />
    </div>
  )
}

export default QuestList
