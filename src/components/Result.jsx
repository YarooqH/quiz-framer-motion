import React from 'react';

const Result = ({ score }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your score: {score}</p>
    </div>
  );
};

export default Result;