import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useComments } from '../../shared/hooks/useComments'
import './Comments.css'

export const Comments = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  const {
    comments,
    newComment,
    errors,
    isCommenting,
    handleInputChange,
    handleCommentSubmit,
    startCommenting,
    cancelCommenting
  } = useComments(postId)

  const handleGoBack = () => navigate('/')

  return (
    <div className="comments-container2">
      <div className="regresar-btn-container">
        <button onClick={handleGoBack} className="comments-go-back-btn">Regresar</button>
      </div>

      <h2 className="comments-title">Comentarios</h2>

      {!isCommenting && (
        <div onClick={startCommenting} className="comments-start-area">
          <span>Escribe un comentario...</span>
        </div>
      )}

      {isCommenting && (
        <form className="comments-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            name="username"
            className="comments-input"
            placeholder="Nombre de usuario"
            value={newComment.username}
            onChange={handleInputChange}
            maxLength={50}
          />
          {errors.username && <p className="error-message">{errors.username}</p>}

          <textarea
            name="content"
            className="comments-textarea"
            placeholder="Agrega un comentario..."
            value={newComment.content}
            onChange={handleInputChange}
            maxLength={500}
          />
          {errors.content && <p className="error-message">{errors.content}</p>}

          <div className="buttons-container">
            <button type="button" onClick={cancelCommenting} className="comments-cancel-btn">Cancelar</button>
            <button type="submit" className="comments-submit-btn">Publicar</button>
          </div>
        </form>
      )}

      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map(comment => (
            <div key={comment._id} className="comment-item">
              <div className="comment-header">
                <p className="comment-username">@{comment.username}</p>
                <p className="comment-content">{comment.content}</p>
                <p className="comment-date">
                  Publicado: {new Date(comment.date).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay comentarios para este post.</p>
        )}
      </div>
    </div>
  )
}
