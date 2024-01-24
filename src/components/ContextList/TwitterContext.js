import React, { Children, createContext, useContext, useEffect, useState } from "react";

const newTwitterContext = createContext();

export const useNewTwitteContext = () => useContext(newTwitterContext);

export const MyTProvider = (props) => {
  const [ListOfTwittes, setListofTwittes] = useState([]);
  const [curTwwites, setCurTwwites] = useState({});
  const [hitLikes , setHitLikes] = useState([]);


  const updateHitLikes=(newV)=>{
    setHitLikes( (prev) => [...prev , newV]);

  }
  const updateCurTwwites = (newValues) => {
    setCurTwwites(newValues);
  };
  useEffect( ()=>{
    if(curTwwites.id){
      setListofTwittes( (prev) => [...prev , curTwwites] )
    }       
  } , [curTwwites])

  console.log(hitLikes);

  return (
    <newTwitterContext.Provider value={{curTwwites ,ListOfTwittes ,  updateCurTwwites , updateHitLikes , hitLikes }}>
      {props.children}
    </newTwitterContext.Provider>
  );
}

export default newTwitterContext;
