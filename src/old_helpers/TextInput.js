import React from 'react';

const TextInput = ({ userInput, setUserInput }) => {
  return (
    <input
      type="text"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    />
  );
};

export default TextInput;
