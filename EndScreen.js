import React from "react";
import { Link } from "react-router-dom";
import ShareButtons from "./ShareButtons";

const EndScreen = () => {
  return (
    <div className="end-screen">
      <h1>Gratulerer! Du har fullført kategorien.</h1>
      <ShareButtons url="https://your-game-url.com" title="Jeg fullførte ASK123!" />
      <Link to="/">Tilbake til hovedmeny</Link>
    </div>
  );
};

export default EndScreen;