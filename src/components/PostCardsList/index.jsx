import React from 'react'

import PostCard from 'components/PostCard';

import styles from './PostCardsList.module.css';

export default function PostCardsList({posts}) {
  return (
    <ul className={styles.posts}>
        {
        posts.map(post => {
            return (
            <li key={post.id}>
                <PostCard post={post}/>
            </li>
            )
        })
        }
    </ul>
  )
}
