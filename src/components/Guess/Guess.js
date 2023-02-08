import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  let chars = [];
  let key;
  if (guess) {
    chars = guess.split("");
    key = checkGuess(guess, answer);
  }
  return (
    <p className="guess">
      {range(5).map((index) => {
        let className = "cell";
        if (key && key[index]) {
          className += ` ${key[index].status}`;
        }
        return (
          <span key={index} className={className}>
            {chars[index]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
