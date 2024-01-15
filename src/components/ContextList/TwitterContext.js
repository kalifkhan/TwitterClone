import React, { Children, createContext, useContext, useEffect, useState } from "react";

const newTwitterContext = createContext();

export const useNewTwitteContext = () => useContext(newTwitterContext);

export const MyTProvider = (props) => {
  const [ListOfTwittes, setListofTwittes] = useState([]);
  const [curTwwites, setCurTwwites] = useState({});

  const updateCurTwwites = (newValues) => {
    setCurTwwites(newValues);
  };
  useEffect( ()=>{
    if(curTwwites.id){
      setListofTwittes( (prev) => [...prev , curTwwites] )
    }
         
  } , [curTwwites])

  //console.log(ListOfTwittes)

  return (
    <newTwitterContext.Provider value={{curTwwites ,ListOfTwittes ,  updateCurTwwites }}>
      {props.children}
    </newTwitterContext.Provider>
  );
}

export default newTwitterContext;
