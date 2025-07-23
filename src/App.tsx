import './App.css'
import MindfulnessCard from './components/MindfulnessCard'

function App() {
  return (
    <div>
      <MindfulnessCard
        title="Mindful Breathing"
        description="A simple exercise to focus on your breath."
        xp={10}
      />
    </div>
  )
}

export default App
