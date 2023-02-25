import React from 'react'
import { useBoardContext } from '../hooks/useBoardContext';

const Key = ({ val }) => {
  const { selectLetter } = useBoardContext();

  return (
    <div className='key' 
    id={val === 'ENTER' || val === 'DEL' ? 'big-key' : ''}
    onClick={() => selectLetter(val)}>
      {val}
    </div>
  )
}

export default Key
