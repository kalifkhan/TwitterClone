import React, { useState } from 'react'
// import './Home.css'
import './card.css'

import { twitterIcon, messageIcon, retweetIcon, likesIcon } from './leftPane/icons';

export const Card = ({ title, content, id }) => {
    const [like, setLike] = useState(false);

    //const truncatedContent= content.slice( 0 , 73);
    const handleLikes = () => {
        setLike(!like)    
    }

    return (
        <div className='card-container'>
            <div className='card-block'>
                <span className='card-username'> Kalifkhan  {twitterIcon}</span>
                {/* <span className='card-title'> {id}  </span> */}
                {/* <span className='card-title'> title </span> */}
                <text className='card-content'> {content} </text>
                <span className='svgicons'>
                    <span>{messageIcon}</span>
                    <span> {retweetIcon}</span>
                    <span className={like ? "likesicon" : ""} onClick={handleLikes}> {likesIcon}  </span>
                </span>
            </div>
        </div>

    )
}
