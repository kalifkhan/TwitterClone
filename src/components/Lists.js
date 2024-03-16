import React, { useContext } from 'react'
import { useNewTwitteContext } from './ContextList/TwitterContext';
import { Card } from './Card';
import './list.css';
import { fontSize } from '@mui/system';
import { Curtains } from '@mui/icons-material';

const Lists = () => {
  const {curTwwites} = useNewTwitteContext();
  const { state} = useNewTwitteContext();
  const listTw = state.allTwittes;
  return (
    <div className='listcontainer'>
     { curTwwites.id ? <div className='listitemcontainer'>
     { listTw.map( (tw)=> <Card content={tw.msg} id={tw.id} islike={tw.islike}> </Card> )} 
     </div> 
     :  <div className='emptymsg'> List Items is Empty </div> }
    </div>
  )
}


export default Lists