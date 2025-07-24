import './App.css'
import Layout from './components/Layout'
import MindfulnessCard from './components/MindfulnessCard'
import QuoteCard from './components/QuoteCard'
import Header from './components/Header'
import QuestList from './components/QuestList'
import StatsCard from './components/StatsCard'

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <MindfulnessCard
          title="Mindful Breathing"
          description="A simple exercise to focus on your breath."
          xp={10}
        />
        <QuestList />
        <QuoteCard />
        <StatsCard />
      </Layout>
    </div>
  )
}

export default App
