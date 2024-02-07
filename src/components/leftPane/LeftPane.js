import React, { useEffect, useState } from 'react'
import './leftPane.css';
import { NavLink } from 'react-router-dom';
import { SettingIcon, twitterIcon, twitterOldIcon } from './icons'
import SignInSide from '../../Auth/SignInSide';
import { LogOut } from '../../Auth/AuthLogout';
import { Navigate } from 'react-router-dom';
import { Padding } from '@mui/icons-material';
import { useNewTwitteContext } from '../ContextList/TwitterContext';

const btnMew = {
    background: '#15202b',
    padding: '3px',  // Use camelCase for 'padding'
    width: '100px',
    height: '40px',
    border: '3px solid white',
    margin: '3px',
    borderRadius: '4px',
    color: 'white',
    fontSize: '15px',    
  };

const LeftPane = ({setIsAuthenticated}) => {
    const { state} = useNewTwitteContext();
    const username = state.userName;

    const handleLogout=()=>{
        const logoutValue = LogOut();
        setIsAuthenticated(logoutValue)
        console.log("logout button clicke")
    }

    return (
        <div className='left-pane'>
            <div className='container'>
                <header className='header-container'>

                    <span> {twitterOldIcon} </span>
                    {/* //https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png */}
                </header>
                <nav className='nav-list-item'>
                    <NavLink className='navlink-item' to='/' exact activeClassName="selected"> <span> {twitterIcon} Home </span>   </NavLink>
                    <NavLink className='navlink-item' to='/explore' activeClassName="selected"> <span> {SettingIcon} <button style={btnMew}>New Twitte</button> </span>   </NavLink>
                    <NavLink className='navlink-item' to='/notifications' activeClassName="selected" ><span> Notifications </span>   </NavLink>
                    <NavLink className='navlink-item' to='/messages'><span> Messages</span>   </NavLink>
                    <NavLink className='navlink-item' to='/Bookmarks'><span>  Bookmarks</span>   </NavLink>
                    <NavLink className='navlink-item' to='/lists'> <span>  Lists</span>  </NavLink>
                    <NavLink className='navlink-item' to='/profile'><span> Profile </span>   </NavLink>

                </nav>
                {/* {!isLoginSuccess ? <div className='btn-singup'> <button className='tweet' > <NavLink to='/signup'><span>  Singup</span>   </NavLink> </button>
                </div>  : <div> <button> Logout </button></div>} */}
                <div className='container-logout'> 
                    <button className='btn-logout' onClick={handleLogout}> Logout  </button>
                </div>
                <footer>
                    <button className='account'>
                        <div className='photo'>
                            <img className='user-img' alt="user" src="https://w0.peakpx.com/wallpaper/67/297/HD-wallpaper-shah-rukh-khan-tie-srk-thumbnail.jpg" />
                        </div>
                        <div>
                            <div className='name'> {username} </div>
                            <div className='id'> {"@"}{username}{"121"} </div>
                        </div>
                    </button>
                </footer>


            </div>

        </div>
    )
}

export default LeftPane;