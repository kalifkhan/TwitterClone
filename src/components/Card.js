import React, { useState, useEffect } from 'react';
import './card.css';
import { useNewTwitteContext } from './ContextList/TwitterContext';
import { twitterIcon, messageIcon, retweetIcon, likesIcon } from './leftPane/icons';

export const Card = ({ title, content, id , islike}) => {
  const [like, setLike] = useState(true);
  const { updateHitLikes } = useNewTwitteContext();
  //const [bookMarkedList, setBookmarked] = useState([]);
  const { hitLikes, ListOfTwittes , state , dispatch } = useNewTwitteContext();

  const updatingLiked = (id) => {
    // dispatch( {type: "ADDLIKES" , payload: id , red: true , content: content})
    dispatch( { type: "ADDLIKESTOBOOKLIST" , id: id , islikevalue : true} )
  }

  const deletingLiked = (id) => {
    dispatch( { type: "ADDLIKESTOBOOKLIST" , id: id , islikevalue : false} )
  }

  const handleLikes = (id) => {
    setLike(!like);
    if (like) {
      updatingLiked(id);
    } else {    
      deletingLiked(id);
    }
  }

  return (
    <div className='card-container'>
      <div className='card-block'>
        <span className='card-username'> Kalifkhan  {twitterIcon}</span>
        <text className='card-content'> {content} </text>
        <span className='svgicons'>
          <span>{messageIcon}</span>
          <span> {retweetIcon}</span>
          <span className={islike ? "likesicon" : ""} onClick={() => handleLikes(id)}> {likesIcon}  </span>
        </span>
      </div>
    </div>
  )
}
