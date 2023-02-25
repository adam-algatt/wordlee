import React from 'react'
import { useBoardContext } from '../hooks/useBoardContext'
const GameOver = () => {
  
    const { gameOver, setGameOver, correctWord, currentAttempt } = useBoardContext(); 
    console.log(gameOver)
    return (
    <div className='gameOver'>
      <h3>{gameOver.guessedWord ? `Great job, ${correctWord} was the word!` : `Better luck next time, non of your guessed matched with the correct word: ${correctWord}`} </h3>
        {gameOver.guessedWord && (
            <h3> You guessed in {currentAttempt} attempt(s)</h3>
        )}
    </div>
  )
}

export default GameOver
