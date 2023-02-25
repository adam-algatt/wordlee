import React, { useEffect, useCallback } from 'react'
import Key from './Key';
import { keyboardRows } from './Words'; 
import { useBoardContext } from '../hooks/useBoardContext';

const Keyboard = () => {
 const { selectLetter } = useBoardContext();
  // callback prevents unecessary re renders
  const handleKeyStroke = useCallback((e) => { //alphabetic, enter, backspace keycode triggers selectLetter function in BoardContext
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 8 || e.keyCode === 13) return selectLetter(e.key)
  })

  useEffect(() => {
    document.addEventListener('keydown', handleKeyStroke); 

    return () => {
      document.removeEventListener('keydown', handleKeyStroke); 
    }
  }, [handleKeyStroke])

  return (
    <div className='keyboard' onKeyDown={handleKeyStroke}>
      <div className='row'>
        {keyboardRows.row1.map(key => (
          <Key val={key} key={`${key}-${Date.now()}`} />
        ))}
      </div>
      <div className='row'>
      {keyboardRows.row2.map(key => (
        <Key val={key} key={`${key}-${Date.now()}`} />
        ))}
      </div>
      <div className='row'>
      <Key val='ENTER'/>
      {keyboardRows.row3.map(key => (
        <Key val={key} key={`${key}-${Date.now()}`} />
        ))}
        <Key val='DEL'/>
      </div>
    </div>
  )
}

export default Keyboard
