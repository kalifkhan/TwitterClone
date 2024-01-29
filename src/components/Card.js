import React, { useState, useEffect } from 'react';
import './card.css';
import { useNewTwitteContext } from './ContextList/TwitterContext';
import { twitterIcon, messageIcon, retweetIcon, likesIcon } from './leftPane/icons';

export const Card = ({ title, content, id }) => {
  const [like, setLike] = useState(true);
  const { updateHitLikes } = useNewTwitteContext();
  //const [bookMarkedList, setBookmarked] = useState([]);
  const { hitLikes, ListOfTwittes } = useNewTwitteContext();

  const updatingLiked = (id) => {
    //dispatch
  }

  const deletingLiked = (id) => {
    //dispatch
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
          <span className={!like ? "likesicon" : ""} onClick={() => handleLikes(id)}> {likesIcon}  </span>
        </span>
      </div>
    </div>
  )
}
