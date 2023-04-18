import React from "react";
import { useEffect, useState } from "react";

const Word = ({ word, oldGuesses, life }) => {
  const chars = word.split("");

  //todo letter not found class when life is 0
  return (
    <div>
      {chars.map((letter, index) => (
        <div key={index} className={`letter`}>
          {oldGuesses.includes(letter) ? letter : "_"}
        </div>
      ))}
    </div>
  );
};

export default Word;
