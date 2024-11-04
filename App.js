import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import PlayerSelection from "./components/PlayerSelection";
import CategorySelection from "./components/CategorySelection";
import QuizInterface from "./components/QuizInterface";
import EndScreen from "./components/EndScreen";
import MultiplayerMode from "./components/MultiplayerMode";
import SoundEffects from "./components/SoundEffects";

const App = () => {
  return (
    <Router>
      <SoundEffects />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/player-selection" element={<PlayerSelection />} />
        <Route path="/category-selection/:playerId" element={<CategorySelection />} />
        <Route path="/quiz/:playerId/:categoryId" element={<QuizInterface />} />
        <Route path="/end-screen" element={<EndScreen />} />
        <Route path="/multiplayer-mode" element={<MultiplayerMode />} />
      </Routes>
    </Router>
  );
};

export default App;