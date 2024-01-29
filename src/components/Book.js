import React from 'react'
import './Book.css';

export const Book = ({ content, id }) => {
    return (
        <div className='bookContainer'>Book
            <div className='bookItem'>
            <div className='bookId'>
                {id}
            </div>
            <div className='bookContent'>
                {content}
            </div>
            </div>
        </div>
    )
}
