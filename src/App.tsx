import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import MindfulnessCard from './components/MindfulnessCard'
import QuoteCard from './components/QuoteCard'
import Header from './components/Header'
import QuestList from './components/QuestList'
import StatsCard from './components/StatsCard'
import { levels } from './levels'

interface Skill {
  currentXp: number
  levelName: string
  xpForNextLevel: number
}

const getLevelInfo = (xp: number) => {
  const currentLevel = levels
    .slice()
    .reverse()
    .find((level) => xp >= level.threshold)
  const nextLevel = levels.find((level) => xp < level.threshold)
  return {
    levelName: currentLevel ? currentLevel.name : 'Oblivious',
    xpForNextLevel: nextLevel ? nextLevel.threshold : currentLevel!.threshold,
  }
}

function App() {
  const [intellect, setIntellect] = useState<Skill>({
    currentXp: 150,
    ...getLevelInfo(150),
  })
  const [creativity, setCreativity] = useState<Skill>({
    currentXp: 300,
    ...getLevelInfo(300),
  })
  const [fitness, setFitness] = useState<Skill>({
    currentXp: 500,
    ...getLevelInfo(500),
  })

  const addXp = (skill: string, amount: number) => {
    const updater = (prev: Skill) => {
      const newXp = prev.currentXp + amount
      return {
        currentXp: newXp,
        ...getLevelInfo(newXp),
      }
    }
    switch (skill) {
      case 'intellect':
        setIntellect(updater)
        break
      case 'creativity':
        setCreativity(updater)
        break
      case 'fitness':
        setFitness(updater)
        break
      default:
        break
    }
  }

  const resetProgress = () => {
    setIntellect({
      currentXp: 0,
      ...getLevelInfo(0),
    })
    setCreativity({
      currentXp: 0,
      ...getLevelInfo(0),
    })
    setFitness({
      currentXp: 0,
      ...getLevelInfo(0),
    })
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
        <StatsCard intellect={intellect} creativity={creativity} fitness={fitness} />
        <button onClick={resetProgress}>Reset Progress</button>
      </Layout>
    </div>
  )
}

export default App
