import React  , { useEffect , useState} from 'react'
import { useNewTwitteContext } from './ContextList/TwitterContext'
import { Book } from './Book';
import './Book.css'
const Bookmarks = () => {
  const [bookMarkedList , setBookmarked] = useState([])
  const {hitLikes , ListOfTwittes , state} = useNewTwitteContext();
  
  const {allTwittes } = state;
  console.log(allTwittes);

    useEffect( ()=>{
          const likesOfTwittes = allTwittes.filter((item) => item.islike == true);
          setBookmarked(likesOfTwittes);
    } ,[])
  return (
    <div className='bookmarkConatiner'>
      <div className='emptymsg'> Bookmarks </div>
      {bookMarkedList.map( (tw) => <Book content ={tw.msg} id={tw.id}>  </Book> )}
    </div>
  )
} 

export default Bookmarks