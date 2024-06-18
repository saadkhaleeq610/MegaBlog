import React from 'react'
import appwriteservice from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featureImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full'></div>
    </Link>
  )
}

export default PostCard
