import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  let chars = [];
  if (guess) {
    chars = guess.split("");
  }
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className="cell">
          {chars[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
