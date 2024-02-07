// Profile.js

import React from 'react';
import './Profile.css'; // Make sure to create this CSS file
import { useNewTwitteContext } from './ContextList/TwitterContext';

const Profile = () => {

  const {state} = useNewTwitteContext();
  const username = state.userName;

 
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img
          src="https://placekitten.com/200/200" // Replace with the actual image URL
          alt="Profile"
        />
      </div>
      <div className="profile-details">
        <h2>{username}</h2>
        <p className='p-Id'>ID: {"@"}{username}{"121"}</p>
        <div className='profileData' >
        <p className='followers'>Followers: 1000</p>
        <p className='following'>Following: 500</p>
        <p className='rating'>Rating: 8.5</p>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
