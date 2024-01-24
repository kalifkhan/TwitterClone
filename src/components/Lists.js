import React, { useContext } from 'react'
import { useNewTwitteContext } from './ContextList/TwitterContext';
import { Card } from './Card';
import './list.css';
import { fontSize } from '@mui/system';
import { Curtains } from '@mui/icons-material';

const Lists = () => {

  const {curTwwites} = useNewTwitteContext();
  const { ListOfTwittes} = useNewTwitteContext();
  console.log(ListOfTwittes);


  return (
    <div className='listcontainer'>
     { curTwwites.id ? <div className='listitemcontainer'>
     { ListOfTwittes.map( (tw)=> <Card content={tw.msg} id={tw.id} > </Card> )} 
     </div> 
     :  <div style={{ color: 'red' ,  fontSize: '30px', fontWeight:'700', marginTop:'40px' }}> List Items is Empty </div> }
    </div>
  )
}


export default Lists