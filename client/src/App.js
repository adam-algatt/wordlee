import './App.css';
import Keyboard from './components/Keyboard';
import GameBoard from './components/GameBoard';
import { createContext, useState } from 'react';

function App() {

  return (
    <div className="App">
      <div className='game'>
      <GameBoard/>
      <Keyboard/>
      </div>
      
    </div>
  );
}

export default App;
