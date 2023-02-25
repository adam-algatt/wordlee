import { useState, useContext, createContext, useEffect} from "react";
import { defaultBoard, genWordSet } from '../components/Words';

export const BoardContext = createContext();

const BoardContextProvider = ({ children }) => {
    const [board, setBoard] = useState(defaultBoard);
    const [currentAttempt, setCurrentAttempt] = useState(0);
    const [letterPos, setLetterPos] = useState(0)
    const [correctWord, setCorrectWord] = useState('');
    const [resultArr, setResultArr] = useState([]);
    const [wordSet, setWordSet] = useState(new Set());
  useEffect(() => {
   genWordSet().then((words)=>{
    setWordSet(words.wordSet)   
    
  })
  }, [])
 

    const checkLetterGuess = (currentAttempt) => {
      const correctWordArr = correctWord.toUpperCase().split('')
      const containsLetter = (idx) => {
        return correctWordArr.includes(board[currentAttempt][idx].toUpperCase())
      }
      let colorCodeArr = [];
      correctWordArr.map((letter, idx) => {
        if (letter.toUpperCase() === board[currentAttempt][idx].toUpperCase()) colorCodeArr[idx] = 'correct';
        if (letter.toUpperCase() !== board[currentAttempt][idx].toUpperCase()) {
          const letterInWord = containsLetter(idx);
          if (letterInWord === true) colorCodeArr[idx] = 'included';
          if (letterInWord === false) colorCodeArr[idx] = 'not-included';
        }
      })
      setResultArr(colorCodeArr)
    }

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

      // return setLetterPos(0), setCurrentAttempt(prev => prev + 1)
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
        // console.log({
        //     currentAttempt,
        //     letterPos, val
        // })
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
        checkLetterGuess,
        correctWord,
        resultArr,
        wordSet
        }}>
          {children}
        </BoardContext.Provider>
    )
}

export const BoardState = () => {
    return useContext(BoardContext);
}

export default BoardContextProvider;