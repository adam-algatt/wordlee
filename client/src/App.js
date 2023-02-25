import './App.css';
import Keyboard from './components/Keyboard';
import GameBoard from './components/GameBoard';
import { useBoardContext } from './hooks/useBoardContext';
import GameOver from './components/GameOver';
function App() {
  const { gameOver } = useBoardContext(); 
// add game over comp when game completes
  return (
    <div className="App">
      <div className='game'>
      <GameBoard/>
     {gameOver.gameOver ? (<GameOver/>) : (<Keyboard/>)}
      </div>
      
    </div>
  );
}

export default App;
