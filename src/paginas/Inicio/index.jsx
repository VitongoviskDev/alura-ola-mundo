import React from 'react'

import posts from 'json/posts.json'
import PostCardsList from 'components/PostCardsList';

export default function Inicio() {
  return (
    <PostCardsList posts={posts}/>
  )
}
