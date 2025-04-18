import React from 'react';

const getWpmCategory = (wpm) => {
  if (wpm <= 30) return 'Bad';
  if (wpm <= 60) return 'Average';
  if (wpm <= 90) return 'Good';
  return 'Excellent';
};

const Result = ({ wpm }) => {
  const wpmCategory = getWpmCategory(wpm);

  return (
    <div className="alert result-box mt-4">
      <h4>Your Typing Speed: <strong>{wpm}</strong> WPM</h4>
      <p className="category">Your performance is: <strong>{wpmCategory}</strong></p>
    </div>
  );
};

export default Result;
