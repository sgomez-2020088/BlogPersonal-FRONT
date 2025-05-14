
import React, { useState, useEffect } from 'react'
import { useContextPosts } from '../../shared/hooks/useContextPosts'
import { CardPosts } from './CardPosts'
import { SyncLoader } from 'react-spinners'

import './Navbar.css'

export const Posts = ({ filter }) => {
  const { posts, isFetchingPosts } = useContextPosts()

  const filteredPosts = filter === 'Todos' ? posts : posts.filter((post) => post.course === filter)

  if (isFetchingPosts) {
    return (
      <div className="loading">
        <SyncLoader loading margin={0} size={20} />
      </div>
    );
  }

  return (
    <div className="row g-0 justify-content-center m-5">
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <h2>Mis publicaciones</h2>
      </div>

      {Array.isArray(filteredPosts) && filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <CardPosts key={post._id} post={post} /> 
        ))
      ) : (
        <p>No hay publicaciones disponibles</p>
      )}
    </div>
  );
};
