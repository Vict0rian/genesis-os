import './StatsCard.css';

const StatsCard = () => {
  return (
    <div className="card">
      <h2>Skills</h2>
      <ul>
        <li>
          <div className="skill-name">Intellect</div>
          <div className="skill-xp">150 / 1000 XP</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '15%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-name">Creativity</div>
          <div className="skill-xp">300 / 1000 XP</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '30%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-name">Fitness</div>
          <div className="skill-xp">500 / 1000 XP</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StatsCard;
