/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Questions from './Questions';
import Result from './Result';

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setStep(step + 1);
  };

  return (
    <div className='h-screen w-screen bg-slate-200'>
      {step <= 10 ? (
        <Questions step={step} handleAnswer={handleAnswer} />
      ) : (
        <Result score={score} />
      )}
    </div>
  );
};

export default Quiz;