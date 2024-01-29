import React  , { useEffect , useState} from 'react'
import { useNewTwitteContext } from './ContextList/TwitterContext'
import { Book } from './Book';
const Bookmarks = () => {
  //const [bookMarkedList , setBookmarked] = useState([])
  const {hitLikes , ListOfTwittes , state} = useNewTwitteContext();
  console.log(state);
  // useEffect( ()=>{
  //     const listLikes = ListOfTwittes.filter(item => item.id == hitLikes)
  //     console.log(listLikes + " likes object or just id ")
  //     setBookmarked((prev) => [...prev , listLikes]);
  // }, [hitLikes])

  return (
    <div>Bookmarks

      { state.likesList.map( (tw) => <Book content ="good afternoon" id="jhfreiurf">  </Book> )}

    </div>
  )
}

export default Bookmarks