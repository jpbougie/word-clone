import React from "react";

function GuessInput({ onNewGuess, canGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length === 5) {
          onNewGuess(guess);
          setGuess("");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>

      <input
        disabled={!canGuess}
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
