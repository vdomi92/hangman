import React, { useState } from "react";

const Guess = ({ handleGuessButton, guess, setGuess }) => {
  const handleGuessIput = (e) => {
    let newValue = e.target.value.toLowerCase();
    const regex = /^[a-z]$/;
    if (regex.test(newValue.slice(-1))) {
      setGuess(newValue.slice(-1));
    }
  };

  return (
    <div>
      <span>Guess a letter:</span>
      <input
        className="guessInput"
        type="text"
        value={guess}
        onInput={(e) => handleGuessIput(e)}
      />
      <button onClick={handleGuessButton}>Guess</button>
    </div>
  );
};

export default Guess;
