import React from 'react'

import { CardPosts } from './CardPosts'
import { useContextPosts } from '../../shared/hooks/useContextPosts'
import { Modal } from './Modal'
import { SyncLoader } from 'react-spinners'


export const Posts = () => {
  const { posts } = useContextPosts()

  if (!posts) {
    return (
      <div className="loading">
        <SyncLoader color="#36d7b7" />
        {/* O cualquier mensaje de carga */}
      </div>
    )
  }

  return (
    <div className="row g-0 justify-content-center m-5">
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <h2>Mis publicaciones</h2>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          className="mb-3 btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#createPostModal"
        >
          Agregar post
        </button>
      </div>
      <Modal />

      {/* Condición para asegurarse de que posts sea un arreglo */}
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <CardPosts
            key={post._id}
            title={post.title}
            course={post.course.name}
            description={post.description}
            link={post.link}
            date={post.datePublication}
          />
        ))
      ) : (
        <p>No hay publicaciones disponibles</p>
      )}
    </div>
  )
}
