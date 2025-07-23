import './App.css'
import Layout from './components/Layout'
import MindfulnessCard from './components/MindfulnessCard'
import QuoteCard from './components/QuoteCard'

function App() {
  return (
    <Layout>
      <MindfulnessCard
        title="Mindful Breathing"
        description="A simple exercise to focus on your breath."
        xp={10}
      />
      <QuoteCard />
    </Layout>
  )
}

export default App
