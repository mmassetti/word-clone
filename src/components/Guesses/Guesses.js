import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function Guesses({ guesses, answer }) {
  console.log({ guesses });
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        <Guess value={guesses[row]} key={row} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;
