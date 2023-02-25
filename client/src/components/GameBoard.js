import LetterGuess from './LetterGuess';

const GameBoard = () => {
    // letter position is the index of inner array
    // attempt val is index of outer array
  return (
    <div className='board'>
      <div className='board-row'>
        <LetterGuess letterPosition={0} attemptVal={0} />
        <LetterGuess letterPosition={1} attemptVal={0} />
        <LetterGuess letterPosition={2} attemptVal={0} />
        <LetterGuess letterPosition={3} attemptVal={0} />
        <LetterGuess letterPosition={4} attemptVal={0} />
      </div>
      <div className='board-row'>
        <LetterGuess letterPosition={0} attemptVal={1} />
        <LetterGuess letterPosition={1} attemptVal={1} />
        <LetterGuess letterPosition={2} attemptVal={1} />
        <LetterGuess letterPosition={3} attemptVal={1} />
        <LetterGuess letterPosition={4} attemptVal={1} />
      </div>
      <div className='board-row'>
        <LetterGuess letterPosition={0} attemptVal={2} />
        <LetterGuess letterPosition={1} attemptVal={2} />
        <LetterGuess letterPosition={2} attemptVal={2} />
        <LetterGuess letterPosition={3} attemptVal={2} />
        <LetterGuess letterPosition={4} attemptVal={2} />
      </div>
      <div className='board-row'>
        <LetterGuess letterPosition={0} attemptVal={3} />
        <LetterGuess letterPosition={1} attemptVal={3} />
        <LetterGuess letterPosition={2} attemptVal={3} />
        <LetterGuess letterPosition={3} attemptVal={3} />
        <LetterGuess letterPosition={4} attemptVal={3} />
      </div>
      <div className='board-row'>
        <LetterGuess letterPosition={0} attemptVal={4} />
        <LetterGuess letterPosition={1} attemptVal={4} />
        <LetterGuess letterPosition={2} attemptVal={4} />
        <LetterGuess letterPosition={3} attemptVal={4} />
        <LetterGuess letterPosition={4} attemptVal={4} />
      </div>
      <div className='board-row'>
        <LetterGuess letterPosition={0} attemptVal={5} />
        <LetterGuess letterPosition={1} attemptVal={5} />
        <LetterGuess letterPosition={2} attemptVal={5} />
        <LetterGuess letterPosition={3} attemptVal={5} />
        <LetterGuess letterPosition={4} attemptVal={5} />
      </div>
    </div>
  )
}

export default GameBoard;
