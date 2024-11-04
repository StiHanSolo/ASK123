import React from "react";
import { Link } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <h1>Velkommen til ASK123</h1>
      <p>
        ASK (Alternativ og Supplerende Kommunikasjon) er tegn til tale som hjelper barn å kommunisere mer effektivt.
      </p>
      <AnimatedButton>
        <Link to="/player-selection">Start spillet</Link>
      </AnimatedButton>
    </div>
  );
};

export default WelcomeScreen;