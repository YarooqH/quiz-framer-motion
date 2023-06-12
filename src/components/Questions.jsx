/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { qs } from '../utils';

const Questions = ({ step, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const question = qs[step - 1];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isCorrect = selectedOption === question.correct;
    handleAnswer(isCorrect);
    setSelectedOption('');
  };

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <h2>Question {step}</h2>
      <h3>{question.question}</h3>
      <form onSubmit={handleSubmit}>
        {question.options.map((option, index) => (
          <div className='bg-red-400' key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Questions;
