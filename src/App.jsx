import { useState } from "react"
import './index.css'
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { BoxingQuiz } from "./components/pages/BoxingQuiz";
import { FootballQuiz } from "./components/pages/FootballQuiz";
import { MmaQuiz } from "./components/pages/MmaQuiz";
import { Home } from "./components/pages/Home";
function App() {
  return (
    <div className="font-Aboreto flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='boxing' element={<BoxingQuiz />} />
        <Route path='football' element={<FootballQuiz />} />
        <Route path='mma' element={<MmaQuiz />} />
      </Routes>
    </div>
  )
}

export default App
