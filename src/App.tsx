import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import MindfulnessCard from './components/MindfulnessCard'
import QuoteCard from './components/QuoteCard'
import Header from './components/Header'
import QuestList from './components/QuestList'
import StatsCard from './components/StatsCard'

function App() {
  const [intellectXp, setIntellectXp] = useState(150)
  const [creativityXp, setCreativityXp] = useState(300)
  const [fitnessXp, setFitnessXp] = useState(500)

  const addXp = (skill: string, amount: number) => {
    switch (skill) {
      case 'intellect':
        setIntellectXp(intellectXp + amount)
        break
      case 'creativity':
        setCreativityXp(creativityXp + amount)
        break
      case 'fitness':
        setFitnessXp(fitnessXp + amount)
        break
      default:
        break
    }
  }

  return (
    <div className="App">
      <Header />
      <Layout>
        <MindfulnessCard
          title="Mindful Breathing"
          description="A simple exercise to focus on your breath."
          xp={10}
        />
        <QuestList addXp={addXp} />
        <QuoteCard />
        <StatsCard
          intellectXp={intellectXp}
          creativityXp={creativityXp}
          fitnessXp={fitnessXp}
        />
      </Layout>
    </div>
  )
}

export default App
