import React from 'react'
import QuestItem from './QuestItem'
import './QuestList.css'
import { quests } from '../data/gamedata'

interface QuestListProps {
  addXp: (skill: string, amount: number) => void
}

const QuestList: React.FC<QuestListProps> = ({ addXp }) => {
  return (
    <div className="quest-list">
      <h2>Daily Quests</h2>
      {quests.map((quest) => (
        <QuestItem
          key={quest.id}
          title={quest.title}
          xp={quest.xp}
          skill={quest.skill}
          addXp={addXp}
        />
      ))}
    </div>
  )
}

export default QuestList
