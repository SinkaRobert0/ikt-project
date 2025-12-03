import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import DeepRockGalacticMine from "./assets/DeepRockGalacticMine.webp";
import MinecraftMine from "./assets/MinecraftMine.jpg";
import TerrariaMine from "./assets/TerrariaMine.png";
import DontStarveTogether from "./assets/DontStarveTogether.webp";
import GameCards from './components/game-cards/GameCards'
import Spacing from './components/spacing/Spacing'
import WhySandbox from './components/why-sandbox/WhySandbox'

function App() {
  const gameCardsData = [
    {
      image: DontStarveTogether,
      title: "Dont Starve ",
      description: "Don't Starve is a challenging wilderness survival game known for its distinctive hand-drawn art style and brutal, unforgiving difficulty.",
      tag1: "sandbox",
      tag2: "survival",
      tag3: "singleplayer",
      tag4: "modding",
      longDesc : "Don't Starve is a brutally difficult wilderness survival game masked by a charming, hand-drawn art style. Survival requires not only managing hunger and health but also carefully maintaining your Sanity to avoid being tormented by shadow creatures. The game features permanent death and intense pressure from hostile seasons and the relentless threat of darkness."
    },
        {
      image: TerrariaMine,
      title: "Terraria",
      description: "Venture to the deep world of Terraria. Literally! Since it's a 2D game, your options of movement is restricted to up-down and left and rigth. Btt don't let it fool you. This games is offering you the same amount of endless gameplay like any  AAA games nowadays.",
      tag1: "sandbox",
      tag2: "survival",
      tag3: "multiplayer",
      tag4: "action",
      longDesc : "It might seem like a cheap Minecraft copy at first, but it has a lot more to show you! It may seem easy a first because of the 2D layout, but be prepared for hours of grind to gear up. It not only has new ores and enemies, but some faces you have never seen before. One instance is the Eye f Cthulu, a terrifying giant eye, which keeps track of  every move you take andwhen it thinks your too powerful to this world, it will appear at night and stop your from further progression, and in reaching your goal. The goal to defeat the Moon Lord, corrupter of worlds!" ,
    },
        {
      image: MinecraftMine,
      title: "Minecraft",
      description: "Dive into an infinite blocky world where you can survive, explore, and build anything you can imagine, from simple homes to colossal structures, only limited by your creativity.",
      tag1: "sandbox",
      tag2: "survival",
      tag3: "multiplayer",
      tag4: "modding",
      longDesc : "Minecraft is a game where you can truly live out your creative! In this games you can break eveeerything to creat the world oof your dreams! Countless type of block are in your desposal that you can use to reshape your world as youor imaginatiion wishes. But be careful, at night evil and mysterious creatures appear, which will invade your home, and your amazing creations. Grab your diamond sword to slay endless waves of zombies!",
    }
  ]
  return (
    <>
      <Header></Header>
      <Spacing></Spacing>
      <div className="wrapper">
      <GameCards {...gameCardsData[0]}></GameCards>
      <GameCards {...gameCardsData[1]}></GameCards>
      <GameCards {...gameCardsData[2]}></GameCards>
      </div>
      <WhySandbox></WhySandbox>
    </>
  )
}

export default App
