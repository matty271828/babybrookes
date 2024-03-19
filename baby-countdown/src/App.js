import React from 'react';
import './App.css';
import CountdownOrStopwatch from './CountdownOrStopwatch'; // Assuming the component is saved in this file

function App() {
  // Initially, set this to the due date.
  // Once the baby is born, update this value with the exact birth date and time.
  const targetDateTime = '2024-05-05T12:00:00';

  return (
    <div className="App">
      <CountdownOrStopwatch targetDateTime={targetDateTime} />
    </div>
  );
}

export default App;
