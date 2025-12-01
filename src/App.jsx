import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import DeepRockGalacticMine from "./assets/DeepRockGalacticMine.webp";
import MinecraftMine from "./assets/MinecraftMine.jpg";
import TerrariaMine from "./assets/TerrariaMine.png";
import GameCards from './components/game-cards/GameCards'

function App() {
  const gameCardsData = [
    {
      image: DeepRockGalacticMine,
      title: "Deep Rock Galactic Mine",
      description: "Grab your beer and your pickaxe! As a dwarven space miner, join your team to explore procedurally generated, destructible cave systems, complete dangerous missions, and harvest precious minerals while fending off hordes of hostile alien insects.",
      tag1: "sandbox",
      tag2: "survival",
      tag3: "multiplayer",
      tag4: "modding"
    },
        {
      image: TerrariaMine,
      title: "Terraria",
      description: "Venture into a 2D side-scrolling world where intense combat, resource gathering, deep crafting, and epic boss fights await as you shape the landscape to your will.",
      tag1: "sandbox",
      tag2: "survival",
      tag3: "multiplayer",
      tag4: "modding"
    },
        {
      image: MinecraftMine,
      title: "Minecraft",
      description: "Dive into an infinite blocky world where you can survive, explore, and build anything you can imagine, from simple homes to colossal structures, only limited by your creativity.",
      tag1: "sandbox",
      tag2: "survival",
      tag3: "multiplayer",
      tag4: "modding"
    }
  ]
  return (
    <>
      <Header></Header>
      <div className="wrapper">
      <GameCards {...gameCardsData[0]}></GameCards>
      <GameCards {...gameCardsData[1]}></GameCards>
      <GameCards {...gameCardsData[2]}></GameCards>
      </div>
    </>
  )
}

export default App
