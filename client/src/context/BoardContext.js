import { useState, useContext, createContext, useEffect} from "react";
import { defaultBoard, genWordSet } from '../components/Words';

export const BoardContext = createContext();

const BoardContextProvider = ({ children }) => {
    const [board, setBoard] = useState(defaultBoard);
    const [currentAttempt, setCurrentAttempt] = useState(0);
    const [letterPos, setLetterPos] = useState(0)
    const [correctWord, setCorrectWord] = useState('');
    const [wordSet, setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]); //holds letters after guessed that shouldn't be keyboard options
    const [gameOver, setGameOver] = useState({
      gameOver: false,  //change to false after GameOver component is done
      guessedWord: false, 
    })
  useEffect(() => {
   genWordSet().then((words)=>{
    setWordSet(words.wordSet)
    setCorrectWord(words.todaysWord)  
  })
  }, [])
 
    const handleBackspace = () => {
        if (letterPos === 0) return
        let idx = letterPos - 1;
        const boardState = [...board]
        boardState[currentAttempt][idx] = ""; // remove value from previous square
        setLetterPos(idx) 
        return setBoard(boardState)
    }

    const handleEnter = () => {
      // only on Enter click is the letterPos state idiopathically 
      // iterated up by one that's why letterPos - 1 is in conditional
      if (letterPos - 1 !== 4) return
      let currentWord = ''
      for (let i = 0; i < 5; i++) {
        currentWord += board[currentAttempt][i]
      }

      if (wordSet.has(currentWord.toLowerCase()) === false) return alert('Error must use a five-letter word!')

      if (currentWord === correctWord) {
        setGameOver({gameOver: true, guessedWord: true})//alert('Great job!')
      
      }
      // return setLetterPos(0), setCurrentAttempt(prev => prev + 1)
      if (currentAttempt === 5) {
        setGameOver({gameOver: true, guessedWord: false})
      }
      return setLetterPos(0),setCurrentAttempt(prev => prev + 1)
    }

    const selectLetter = (val) => {
        if (val === 'ENTER') return handleEnter()
        if (val === 'DEL') return handleBackspace()
        if (val === 'Enter') return handleEnter()
        if (val === 'Backspace') return handleBackspace()
        if (letterPos > 4) return // all letters are entered awaiting enter key press

        const currentBoardState = [...board]

        currentBoardState[currentAttempt][letterPos] = val;
        setBoard(currentBoardState);
        setLetterPos(prev => prev + 1)
       
    }
    return (
        <BoardContext.Provider 
        value ={{
        board, 
        setBoard, 
        currentAttempt, 
        setCurrentAttempt, 
        letterPos, 
        setLetterPos,
        handleBackspace,
        handleEnter,
        selectLetter,
        correctWord,
        wordSet,
        disabledLetters,
        setDisabledLetters,
        gameOver, 
        setGameOver,
        }}>
          {children}
        </BoardContext.Provider>
    )
}

export const BoardState = () => {
    return useContext(BoardContext);
}

export default BoardContextProvider;