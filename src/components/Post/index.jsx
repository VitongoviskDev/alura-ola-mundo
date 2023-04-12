import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom';

import './Post.css';

import posts from 'json/posts.json'

import PostModelo from 'components/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrao';
import OutrosPosts from 'components/OutrosPost';

export default function Post() {

    const parametros = useParams();
    const post = posts.find(post => post.id === Number(parametros.id));
    
    if(!post){
        return(
            <NaoEncontrada/>
        )
    }

    

    return (
        <>
            <Routes>
                <Route path='*' element={<PaginaPadrao/>}>
                    <Route index element={
                        <PostModelo 
                            fotoCapa={`/assets/posts/${post.id}/capa.png`}
                            titulo={post.titulo}>
                                
                            <div className='post-markdown-container'>
                                <ReactMarkdown>
                                    {post.texto}
                                </ReactMarkdown>
                            </div>
                        </PostModelo>
                    }/>
                </Route>
            </Routes>
            <OutrosPosts post={post}/>
        </>
    )
}
