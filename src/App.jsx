import "./App.css";
import Guess from "./components/Guess";
import Life from "./components/Life";
import PastGuesses from "./components/PastGuesses";
import Restart from "./components/Restart";
import Word from "./components/Word";
import { useState, useEffect } from "react";
import React from "react";

function App() {
  const [oldGuesses, setOldGuesses] = useState([]);
  const [word, setWord] = useState("");
  const [life, setLife] = useState(6);
  const [guess, setGuess] = useState("");
  const [errorIndex, setErrorIndex] = useState(-1);
  const [gameNr, setGameNr] = useState(0);
  const [found, setFound] = useState(false);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((res) => setWord(res[0]));
  }, [gameNr]);

  useEffect(() => {
    if (
      word !== "" &&
      word.split("").every((letter) => oldGuesses.includes(letter))
    ) {
      setFound(true);
    }
  }, [oldGuesses]);

  const handleGuessButton = () => {
    if (oldGuesses.includes(guess)) {
      setErrorIndex(oldGuesses.findIndex((element) => element === guess));
    } else if (life === 0) {
      //Game over, should not ever be able to get here, just in case
    } else if (guess === "") {
      //Do nothing
    } else {
      setOldGuesses([...oldGuesses, guess]);
      setGuess("");
      if (!word.includes(guess)) {
        setLife(life - 1);
      }
      setErrorIndex(-1);
    }
  };

  const handleRestart = () => {
    setLife(6);
    setOldGuesses([]);
    setGuess("");
    setGameNr(gameNr + 1);
    setFound(false);
  };

  return (
    <>
      <div>
        <Word word={word} oldGuesses={oldGuesses} life={life} />
        {life === 0 || found === true ? (
          <Restart handleRestart={handleRestart} found={found} />
        ) : (
          <>
            <Guess
              handleGuessButton={handleGuessButton}
              guess={guess}
              setGuess={setGuess}
            />
            <Life life={life} />
          </>
        )}
        <PastGuesses oldGuesses={oldGuesses} errorIndex={errorIndex} />
      </div>
    </>
  );
}

export default App;
