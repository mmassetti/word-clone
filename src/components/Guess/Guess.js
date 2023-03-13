import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  let lettersStatus = [];
  checkGuess(value, answer)?.forEach((letter) =>
    lettersStatus.push(letter.status)
  );

  return (
    <p className='guess'>
      {range(5).map((cell) => (
        <span className={`cell ${lettersStatus[cell]}`} key={cell}>
          {value?.charAt(cell)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
