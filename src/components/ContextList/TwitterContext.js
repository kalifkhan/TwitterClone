import React, { Children, createContext, useContext, useEffect, useReducer, useState } from "react";

const newTwitterContext = createContext();

export const useNewTwitteContext = () => useContext(newTwitterContext);

const reducer = (state, action) => {
  if (action.type == "ADDUSERNAME") {
    return {
      ...state,
      userName: action.payload
    }
  } else if (action.type === 'ADDLIKES') {
    return {
      ...state,
      likesList: [...state.likesList, { id: action.payload, msg: action.content, red: action.red }],
    };
  } else if (action.type == "DELETELIKES") {
    return {
      ...state,
      likesList: state.likesList.filter(like => like !== action.payload),
    };
  } else if (action.type == "ADDTWITTES") {
    return {
      ...state,
      allTwittes: [...state.allTwittes, action.payload]
    }
  }
  else if (action.type == "ADDLIKESTOBOOKLIST") {
    const IndexofItem = state.allTwittes.findIndex((item) => item.id == action.id);
    if (IndexofItem !== -1) {
      const updatingItem = {
        ...state.allTwittes[IndexofItem],
        islike: action.islikevalue
      }

      const updatedTwitties = [...state.allTwittes];
      updatedTwitties[IndexofItem] = updatingItem;

      return { ...state, allTwittes: updatedTwitties }
    } else {
      return state;
    }
  }
  else {
    return state
  }

}
const intiailState = {
  likesList: [],
  allTwittes: [],
  userName: localStorage.getItem('username'),
};
export const MyTProvider = (props) => {
  const [ListOfTwittes, setListofTwittes] = useState([]);
  const [curTwwites, setCurTwwites] = useState({});
  const [hitLikes, setHitLikes] = useState();
  const [state, dispatch] = useReducer(reducer, intiailState);
  const updateHitLikes = (newV) => {
    setHitLikes(newV);
  }
  const updateCurTwwites = (newValues) => {
    setCurTwwites(newValues);
  };
  useEffect(() => {
    if (curTwwites.id) {
      setListofTwittes((prev) => [...prev, curTwwites])
    }
  }, [curTwwites])
  return (
    <newTwitterContext.Provider value={{ curTwwites, ListOfTwittes, updateCurTwwites, updateHitLikes, hitLikes, state, dispatch }}>
      {props.children}
    </newTwitterContext.Provider>
  );
}
export default newTwitterContext;
