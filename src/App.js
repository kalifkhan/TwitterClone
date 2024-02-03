import logo from './logo.svg';
import './App.css'
import { lazy  , Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Home, LeftPane, Explore, Notifications, Messages, Bookmarks, Lists, Profile } from './components';
import { useEffect, useState } from 'react';
import SignInSide from './Auth/SignInSide';
import { Loading } from './components/ErrorPages/Loading.js';
import { SettingsCellOutlined } from '@mui/icons-material';
import { MyTProvider, useNewTwitteContext } from './components/ContextList/TwitterContext.js';
import { RightPane } from './components/RightPane/RightPane.js';
const HomeC = lazy( ()=>import('./components/Home.js'));
const LeftPaneC = lazy( ()=> (import('./components/leftPane/LeftPane.js')));
const ExploreC = lazy( ()=>(import('./components/Explore.js')));

// export const Username = localStorage.getItem('username');
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const {state , dispatch } = useNewTwitteContext
  // const { dispatch } = useNewTwitteContext();

  useEffect(() => {
    const storedLoginStatus = JSON.parse(localStorage.getItem('loginSuccess'));
    const username = JSON.parse(localStorage.getItem('loginSuccess'));
    setIsAuthenticated(!!storedLoginStatus);
    // if(storedLoginStatus){ 
    //   // dispatch( {type: "ADDUSERNAME" , payload: username})
    //   dispatch( { type: "ADDUSERNAME" , payload: username} )
    // }
  }, [])
  

  return (
    <Suspense fallback={ <Loading />} >
    <BrowserRouter>
      <MyTProvider>
        { isAuthenticated ? 
      (<div className="app">
      <LeftPaneC setIsAuthenticated={setIsAuthenticated}> </LeftPaneC>
          <Routes>
            <Route exact path='/' element={ <Suspense fallback={<Loading /> } > <HomeC /> </Suspense> } />

            <Route path='/explore' element={<ExploreC />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/bookmarks' element={<Bookmarks />} />
            <Route path='/lists' element={  <Lists /> } />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={ <SignInSide />} />
        </Routes>  
        <RightPane> </RightPane>
      </div>) : <SignInSide setIsAuthenticated={setIsAuthenticated} />}
      </MyTProvider>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
