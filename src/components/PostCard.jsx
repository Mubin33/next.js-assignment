import Link from 'next/link'
import React from 'react'

const PostCard = ({data}) => {
    const {body, id, title}  = data
  return (
    <Link href={`/details/${id}`}>
    <div className='p-2 border-[1px] h-full hover:shadow-xl cursor-pointer'>
        <h1 className='text-xl text-center mb-2  '>{title}</h1>
        <p className='text-sm text-gray-500'>{body}</p>
    </div>
    </Link>
  )
}

export default PostCard