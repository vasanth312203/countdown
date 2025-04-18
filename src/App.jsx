import React, { useState } from 'react';
import TypingBox from './components/TypingBox';
import Timer from './components/Timer';
import Result from './components/Result';

const topics = [
  "The future of AI in education",
  "Climate change and its impact",
  "Benefits of learning to code",
  "The power of daily habits",
  "How space exploration helps Earth"
];

const App = () => {
  const [text, setText] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [time, setTime] = useState(60 * 1000); // milliseconds
  const [topic, setTopic] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleStart = () => {
    setIsRunning(true);
    setText('');
    setWpm(0);
    setTime(60 * 1000);
    setTopic(topics[Math.floor(Math.random() * topics.length)]);
  };

  const handleRestart = () => {
    // Reset everything to the initial state
    setIsRunning(false);
    setText('');
    setWpm(0);
    setTime(60 * 1000);
    setTopic('');
  };

  const handleTimeUp = () => {
    setIsRunning(false);
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    setWpm(words);
  };

  return (
    <div className="container py-5 text-center text-light">
      <h1 className="glow-heading mb-4">Typing Speed Test</h1>
      
      <Timer time={time} setTime={setTime} isRunning={isRunning} onTimeUp={handleTimeUp} />
      
      {isRunning ? (
        <>
          <TypingBox
            text={text}
            handleChange={handleChange}
            isRunning={isRunning}
            topic={topic}
          />
          <button className="btn btn-warning mt-3" onClick={handleRestart}>
            Restart Test
          </button>
        </>
      ) : (
        <>
          <TypingBox
            text={text}
            handleChange={handleChange}
            isRunning={isRunning}
            handleStart={handleStart}
            topic={topic}
          />
          {!isRunning && <Result wpm={wpm} />}
        </>
      )}
    </div>
  );
};

export default App;
