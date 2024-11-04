import React, { useEffect } from "react";
import { Howl } from "howler";

const SoundEffects = () => {
  useEffect(() => {
    const backgroundMusic = new Howl({
      src: ["/path/to/background-music.mp3"],
      loop: true,
      volume: 0.5,
    });

    const correctSound = new Howl({
      src: ["/path/to/correct-sound.mp3"],
    });

    const incorrectSound = new Howl({
      src: ["/path/to/incorrect-sound.mp3"],
    });

    backgroundMusic.play();

    return () => {
      backgroundMusic.stop();
    };
  }, []);

  return null;
};

export default SoundEffects;