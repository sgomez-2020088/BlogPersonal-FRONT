/*import { CardPosts } from './CardPosts'
import { useContextPosts } from '../../shared/hooks/useContextPosts'

import { SyncLoader } from 'react-spinners'


export const Posts = () => {
  const { posts } = useContextPosts()

  if (!posts) {
    return (
      <div class="loading">
        <SyncLoader
          loading
          margin={0}
          size={20}
        />
      </div>
    )
  }

  return (
    <div class="row g-0 justify-content-center m-5">
      <div class="mb-3 d-flex align-items-center justify-content-center">
        <h2>Mis publicaciones</h2>
      </div>
      <div class="d-flex align-items-center justify-content-center">
      </div>
      

      {}
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <CardPosts
            key={post._id}
            title={post.title}
            course={post.course.name}
            description={post.description}
            link={post.link}
            datePublication={post.datePublication}
          />
        ))
      ) : (
        <p>No hay publicaciones disponibles</p>
      )}
    </div>
  )
}*/

import React, { useState } from 'react'
import { useContextPosts } from '../../shared/hooks/useContextPosts' // Usamos el hook de contexto
import { CardPosts } from './CardPosts'
import { SyncLoader } from 'react-spinners'


export const Posts = () => {
  const { posts, isFetchingPosts } = useContextPosts() // Usamos el hook para obtener posts y isFetching

  if (isFetchingPosts) {
    return (
      <div className="loading">
        <SyncLoader loading margin={0} size={20} />
      </div>
    )
  }

  return (
    <div className="row g-0 justify-content-center m-5">
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <h2>Mis publicaciones</h2>
      </div>

      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (

          <CardPosts
            key={post._id}
            post={post} // Pasamos toda la información de cada post a CardPosts
          />
          
        ))
      ) : (
        <p>No hay publicaciones disponibles</p>
      )}
    </div>
  )
}