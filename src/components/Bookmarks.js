import React  , { useEffect , useState} from 'react'
import { useNewTwitteContext } from './ContextList/TwitterContext'
import { Card } from './Card';

const Bookmarks = () => {
  //const [bookMarkedList , setBookmarked] = useState([])
  const {hitLikes , ListOfTwittes } = useNewTwitteContext();

  // useEffect( ()=>{
  //     const listLikes = ListOfTwittes.filter(item => item.id == hitLikes)
  //     console.log(listLikes + " likes object or just id ")
  //     setBookmarked((prev) => [...prev , listLikes]);
  // }, [hitLikes])

  return (
    <div>Bookmarks

      {/* { bookMarkedList.map( (tw) => <Card content ={tw.msg} id={tw.id}>  </Card> )} */}

    </div>
  )
}

export default Bookmarks