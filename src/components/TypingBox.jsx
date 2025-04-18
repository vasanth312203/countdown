import React from 'react';

const TypingBox = ({ text, handleChange, isRunning, handleStart, topic }) => {
  return (
    <div className="my-4">
      {!isRunning && (
        <button className="btn btn-primary mb-3" onClick={handleStart}>
          Start Test
        </button>
      )}

      {isRunning && topic && (
        <div className="topic-line mb-3 fs-5">📝 Topic: {topic}</div>
      )}

      <textarea
        className="form-control shadow-sm dark-textarea"
        rows="6"
        placeholder="Start typing here..."
        value={text}
        onChange={handleChange}
        disabled={!isRunning}
        autoFocus
      ></textarea>
    </div>
  );
};

export default TypingBox;
