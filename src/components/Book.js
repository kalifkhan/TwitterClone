import React from 'react'
import './Book.css';

export const Book = ({ content, id }) => {


    const shortid= id.slice(0,4);

    return (
        <div className='bookContainer'>
            <div className='bookItem'>
            <div className='bookId'>
                {shortid}
            </div>
            <div className='bookContent'>
                {content}
            </div>
            </div>
        </div>
    )
}
