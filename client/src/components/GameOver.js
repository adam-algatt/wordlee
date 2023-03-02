import React from 'react'
import { useBoardContext } from '../hooks/useBoardContext'
import { defaultBoard } from './Words';
const GameOver = () => {

const { resetGame, gameOver, board, setGameOver, correctWord, currentAttempt, setCurrentAttempt, setLetterPos, setBoard, setDisabledLetters} = useBoardContext(); 

  const handleClick = (e) => window.location.reload(true)

    return (
    <div className='game-over'>
      <h3>{gameOver.guessedWord ? `Great job, ${correctWord} was the word!` : `Better luck next time, non of your guesses matched with the correct word: ${correctWord}`} </h3>
        {gameOver.guessedWord && (
            <h3> You guessed in {currentAttempt} attempt(s)</h3>
        )}
        <button onClick={handleClick} className='game-over-btn'>Reset</button>
    </div>
  )
}

export default GameOver
