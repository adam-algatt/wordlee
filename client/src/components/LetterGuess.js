import React from 'react'
import { useBoardContext } from '../hooks/useBoardContext';

const LetterGuess = ({ letterPosition, attemptVal }) => {
  const { board, correctWord, currentAttempt, resultArr } = useBoardContext();

    const letter = board[attemptVal][letterPosition].toLowerCase() //letter guess to uppercase for easy comparison

    const correct = correctWord[letterPosition] === letter;
    const almost = !correct && letter !== '' && correctWord.includes(letter); //not correct but in correct word

    const letterState = //only shows if letter status after enter is pressed and all blocks are filled in 
    currentAttempt > attemptVal && 
    (correct ? 'correct' : almost ? 'almost' : 'err')
    return (
    <div className='letter' id={letterState.toString()}>

      {letter}
    </div>
  )
}

export default LetterGuess
