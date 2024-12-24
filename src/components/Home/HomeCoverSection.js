import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import React from 'react'

const HomeCoverSection = ({blogs}) => {

    const sortedBlogs = sortBlogs(blogs);

    // get the latest blog
    const blog = sortedBlogs[0];

  return (
    <article className=' w-full flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
        <Image src={blog.image.filePath.replace("../public", "")}
        placeholder='blur'
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        fill
        className='w-full h-full object-center object-cover rounded-3xl'
        />
    </article>
  )
}

export default HomeCoverSection