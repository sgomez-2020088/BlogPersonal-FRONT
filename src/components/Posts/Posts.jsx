
import React, { useState, useEffect } from 'react'
import { useContextPosts } from '../../shared/hooks/useContextPosts'
import { CardPosts } from './CardPosts'
import { SyncLoader } from 'react-spinners'
import './Navbar.css'

export const Posts = ({ filter }) => {
  const { posts, isFetchingPosts } = useContextPosts()


  const filteredPosts = Array.isArray(posts) && posts.length > 0
    ? (filter === 'Todos' ? posts : posts.filter(post => post.course === filter))
    : []

  if (isFetchingPosts) {
    return (
      <div className="loading">
        <SyncLoader loading margin={0} size={20} />
      </div>
    );
  }

  return (
    <div className="row g-0 justify-content-center m-5">
      <div className="Title-2">
        <h2>Mis publicaciones</h2>
      </div>

      {Array.isArray(filteredPosts) && filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <CardPosts key={post._id} post={post} />
        ))
      ) : (
        <div className='no-posts'>
            <p>Aún no hay publicaciones 😢</p>
        </div>
        
      )}
    </div>
  )
}