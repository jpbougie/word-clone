import React from "react";

function EndBanner({ state, guessCount, correctAnswer }) {
  if (state === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessCount} guesses</strong>.
        </p>
      </div>
    );
  } else {
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{correctAnswer}</strong>.
      </p>
    </div>;
  }
}

export default EndBanner;
