const Restart = ({ handleRestart, found }) => {
  const className = found ? "win" : "";
  return (
    <>
      <div>
        {found ? "Good job!" : "Game over!"}
        <button
          className={`restartButton ${className}`}
          onClick={handleRestart}
        >
          Restart game
        </button>
      </div>
    </>
  );
};

export default Restart;
