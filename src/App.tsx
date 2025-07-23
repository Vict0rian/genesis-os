import './App.css'
import Layout from './components/Layout'
import MindfulnessCard from './components/MindfulnessCard'

function App() {
  return (
    <Layout>
      <MindfulnessCard
        title="Mindful Breathing"
        description="A simple exercise to focus on your breath."
        xp={10}
      />
    </Layout>
  )
}

export default App
