import React from 'react';
import './App.scss';
import Display from './components/Display/Display';
import DrumPad from './components/DrumPad/DrumPad';

function App() {

  return (
    <div id="drum-machine" className="drum-machine">
      <DrumPad  />
      <Display />
    </div>
  );
}

export default App;
