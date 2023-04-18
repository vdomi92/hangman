const Word = ({ word, oldGuesses, life }) => {
  const chars = word.split("");

  return (
    <div>
      {chars.map((letter, index) =>
        life !== 0 ? (
          <div key={index} className={`letter`}>
            {oldGuesses.includes(letter) ? letter : "___"}
          </div>
        ) : (
          <div
            key={index}
            className={
              oldGuesses.includes(letter) ? "letter found" : "letter notfound"
            }
          >
            {letter}
          </div>
        )
      )}
    </div>
  );
};

export default Word;
