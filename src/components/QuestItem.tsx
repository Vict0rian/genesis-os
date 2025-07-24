import React from 'react'

interface QuestItemProps {
  title: string
  xp: number
  skill: string
  addXp: (skill: string, amount: number) => void
}

const QuestItem: React.FC<QuestItemProps> = ({ title, xp, skill, addXp }) => {
  const [completed, setCompleted] = React.useState(false)

  const handleComplete = () => {
    if (!completed) {
      addXp(skill, xp)
      setCompleted(true)
    }
  }

  return (
    <div className={`quest-item ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} onChange={handleComplete} />
      <span>{title}</span>
      <span className="xp-reward">+{xp} XP</span>
    </div>
  )
}

export default QuestItem
