import React from 'react'
import { useNewTwitteContext } from './ContextList/TwitterContext'
const Bookmarks = () => {

  const {hitLikes} = useNewTwitteContext();

  console.log(hitLikes);

  return (
    <div>Bookmarks</div>
  )
}

export default Bookmarks