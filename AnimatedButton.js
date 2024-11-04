import React from "react";
import { animated, useSpring } from "react-spring";

const AnimatedButton = ({ children, onClick }) => {
  const animation = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  return (
    <animated.button style={animation} onClick={onClick}>
      {children}
    </animated.button>
  );
};

export default AnimatedButton;