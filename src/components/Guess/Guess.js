import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className='guess'>
      {range(5).map((cell) => (
        <span className='cell' key={cell}>
          {value?.charAt(cell)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
