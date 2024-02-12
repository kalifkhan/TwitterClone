import React, { useState, useEffect } from 'react';
import './card.css';
import { useNewTwitteContext } from './ContextList/TwitterContext';
import { twitterIcon, messageIcon, retweetIcon, likesIcon , bookmark} from './leftPane/icons';

export const Card = ({ title, content, id , islike}) => {
  const [like, setLike] = useState(false);
  const { updateHitLikes } = useNewTwitteContext();
  //const [bookMarkedList, setBookmarked] = useState([]);
  const { hitLikes, ListOfTwittes , state , dispatch } = useNewTwitteContext();

  const updatingLiked = (id) => {
    // dispatch( {type: "ADDLIKES" , payload: id , red: true , content: content})
    dispatch( { type: "ADDLIKESTOBOOKLIST" , id: id , islikevalue : false} )
  }

  const deletingLiked = (id) => {
    dispatch( { type: "ADDLIKESTOBOOKLIST" , id: id , islikevalue : false} )
  }

  const handleLikes = () => {
    setLike(!like);
    console.log("button liked")
  }
  const handleBookmarks=(id)=>{
    dispatch( { type: "ADDLIKESTOBOOKLIST" , id: id , islikevalue : true} )
    console.log("clicked to add into bookmarked")
  }
  return (
    <div className='card-container'>
      <div className='card-block'>
        <span className='card-username'> Kalifkhan  {twitterIcon}</span>
        <p className='card-content'> {content} </p>
      </div>
      <div className='svgiconContainer'>
        <span className='svgicons'>
          <span>{messageIcon}</span>
          <span> {retweetIcon}</span>
         
          <span className={like ? "likesicon" : ""} onClick={handleLikes}> {likesIcon}  </span>
          <span onClick={() => handleBookmarks(id)} > {bookmark}</span>
        </span>
        </div>
    </div>
  )
}
