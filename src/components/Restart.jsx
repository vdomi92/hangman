import React from "react";

const Restart = ({ handleRestart, word }) => {
  return (
    <>
      <div>
        Game Over{" "}
        <button className="restartButton" onClick={handleRestart}>
          Restart game
        </button>
      </div>
      <div>Word was: {word}</div>
    </>
  );
};

export default Restart;
