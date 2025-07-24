import './StatsCard.css'

interface StatsCardProps {
  intellectXp: number
  creativityXp: number
  fitnessXp: number
}

const StatsCard: React.FC<StatsCardProps> = ({
  intellectXp,
  creativityXp,
  fitnessXp,
}) => {
  return (
    <div className="card">
      <h2>Skills</h2>
      <ul>
        <li>
          <div className="skill-name">Intellect</div>
          <div className="skill-xp">{intellectXp} / 1000 XP</div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(intellectXp / 1000) * 100}%` }}
            ></div>
          </div>
        </li>
        <li>
          <div className="skill-name">Creativity</div>
          <div className="skill-xp">{creativityXp} / 1000 XP</div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(creativityXp / 1000) * 100}%` }}
            ></div>
          </div>
        </li>
        <li>
          <div className="skill-name">Fitness</div>
          <div className="skill-xp">{fitnessXp} / 1000 XP</div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(fitnessXp / 1000) * 100}%` }}
            ></div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default StatsCard
