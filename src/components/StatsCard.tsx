import './StatsCard.css'

interface Skill {
  currentXp: number
  levelName: string
  xpForNextLevel: number
}

interface StatsCardProps {
  intellect: Skill
  creativity: Skill
  fitness: Skill
}

const StatsCard: React.FC<StatsCardProps> = ({
  intellect,
  creativity,
  fitness,
}) => {
  return (
    <div className="card">
      <h2>Skills</h2>
      <ul>
        <li>
          <div className="skill-name">
            Intellect <span>({intellect.levelName})</span>
          </div>
          <div className="skill-xp">
            {intellect.currentXp} / {intellect.xpForNextLevel} XP
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(intellect.currentXp / intellect.xpForNextLevel) * 100}%`,
              }}
            ></div>
          </div>
        </li>
        <li>
          <div className="skill-name">
            Creativity <span>({creativity.levelName})</span>
          </div>
          <div className="skill-xp">
            {creativity.currentXp} / {creativity.xpForNextLevel} XP
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(creativity.currentXp / creativity.xpForNextLevel) * 100}%`,
              }}
            ></div>
          </div>
        </li>
        <li>
          <div className="skill-name">
            Fitness <span>({fitness.levelName})</span>
          </div>
          <div className="skill-xp">
            {fitness.currentXp} / {fitness.xpForNextLevel} XP
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(fitness.currentXp / fitness.xpForNextLevel) * 100}%`,
              }}
            ></div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default StatsCard
