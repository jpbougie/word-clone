import React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import EndBanner from "../EndBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  let [gameState, setGameState] = React.useState("guessing");
  let [guesses, setGuesses] = React.useState([]);
  function handleNewGuess(guess) {
    setGuesses([...guesses, guess]);
    if (checkGuess(guess, answer).every((ch) => ch.status == "correct")) {
      setGameState("won");
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput
        onNewGuess={handleNewGuess}
        canGuess={gameState === "guessing"}
      />
      {gameState !== "guessing" && (
        <EndBanner
          state={gameState}
          correctAnswer={answer}
          guessCount={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
