import React from 'react'

import styles from './OutrosPost.module.css'
import posts from 'json/posts.json';

import PostCardsList from 'components/PostCardsList';

export default function OutrosPosts({post}) {
    const postRecomendados = posts
        .filter(curPost => curPost.id !== Number(post.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <section className={styles.outrosPosts}>
            <h2 className={styles.outrosPosts__titulo}>Outros posts que você pode gostar:</h2>
            <PostCardsList posts={postRecomendados}/>
        </section>
    )
}
