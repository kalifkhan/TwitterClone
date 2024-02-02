import React from 'react'
import './Rightpane.css'
export const RightPane = () => {
    return (
        <div className='rightpaneContainer'>
            <div className='whotofollow'>
                <p className='title'>who to follow </p>
                <div className='userDetails'>
                    <img src="https://res.cloudinary.com/twitter-clone-media/image/upload/v1597737557/user_wt3nrc.png" />
                    <div>
                        <p> Daneail  </p>
                        <p> Daneail56 </p>
                    </div>
                    <button type='button' className='followBtn'> Follow </button>
                </div>
                <div className='userDetails'>
                    <img src="https://res.cloudinary.com/twitter-clone-media/image/upload/v1597737557/user_wt3nrc.png" />
                    <div>
                        <p> marsha  </p>
                        <p> Marsha87 </p>
                    </div>
                    <button type='button' className='followBtn'> Follow </button>
                </div>
                <div className='userDetails'>
                    <img src="https://res.cloudinary.com/twitter-clone-media/image/upload/v1597737557/user_wt3nrc.png" />
                    <div>
                        <p> Kiran  </p>
                        <p> kirannaaa </p>
                    </div>
                    <button type='button' className='followBtn'> Follow </button>
                </div>
            </div>

        </div>
    )
}
