import React from 'react';

function GuessInput({ onNewGuess }) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewGuess(input);
    setInput('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        required
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
      />
    </form>
  );
}

export default GuessInput;
