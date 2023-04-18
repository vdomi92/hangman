const PastGuesses = ({ oldGuesses, errorIndex }) => {
  return (
    <div className="pastGuesses">
      <span>Guessed letters:</span>
      {oldGuesses.map((letter, index) => {
        return (
          <div key={index} className={errorIndex == index ? "error" : null}>
            {index + 1}: {letter}
          </div>
        );
      })}
    </div>
  );
};

export default PastGuesses;
