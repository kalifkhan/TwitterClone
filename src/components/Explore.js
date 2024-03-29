import React, { Children, useState } from 'react'
import './addNewTwitte.css';
import newTwitterContext from './ContextList/TwitterContext';
import { useNewTwitteContext } from './ContextList/TwitterContext';
import { v4 as uuidv4 } from 'uuid';

const Explore = () => {
  
  const { updateCurTwwites , dispatch } = useNewTwitteContext();
  const [newTw, setNewt] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    updateCurTwwites({
      id: uuidv4(),
      msg: newTw,
      like : false
    });
    const newTW = {
      id: uuidv4(),
      msg: newTw,
      islike : false
    }
    dispatch( { type: "ADDTWITTES" , payload: newTW} )
    setNewt('');
  };
  return (
    <div className='addnewT-container'>
      <div className='newT-container'>
        <form className='newT-content' onSubmit={handleForm}>
          <label >  </label>
          <textarea name='newT' placeholder='Start Entering Here' value={newTw} onChange={(e) => {
            setNewt(e.target.value);
          }} />
          <button className='btn-submit' type='submit' > Submit </button>
        </form>
      </div>
    </div>
  )
}

export default Explore