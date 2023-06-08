import React from 'react'
import './index.css'
import style from './single_post.module.css'

export default function PostsList({posts}) {
    console.log(posts);
  return (
    // index.css မှာပေးထားတဲ့ container ကို လာထဲ့တာပါ
    //list တွေကို loop ပတ်နည်း
      <div className='postsList container'>
      {posts.map(post =>(<div className={`single-post ${style.card}`} key={post.id}>{post.title}</div>
      ))} 
      </div>
   
  )
}
