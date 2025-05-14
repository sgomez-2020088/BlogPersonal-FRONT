import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCommentsByPostId, addCommentRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import './Comments.css'

export const Comments = () => {
    const { postId } = useParams() 
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({ username: '', content: '' }) 
    const [errors, setErrors] = useState({ username: '', content: '' }) 
    const [isCommenting, setIsCommenting] = useState(false) /

    useEffect(() => {
        const fetchComments = async () => {
            const response = await getCommentsByPostId(postId)
            if (!response.error) {
                setComments(response.data.comments) 
            } else {
                toast.error('Error al cargar los comentarios')
            }
        }
        fetchComments()
    }, [postId])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewComment({ ...newComment, [name]: value }) 

        setErrors({ ...errors, [name]: '' })
    }

    const validateForm = () => {
        const newErrors = {}
        if (!newComment.username) {
            newErrors.username = 'Name is required'
        }
        if (!newComment.content) {
            newErrors.content = 'Comment content is required'
        }
        setErrors(newErrors)

        return Object.keys(newErrors).length === 0 
    }

    const handleCommentSubmit = async (e) => {
        e.preventDefault()

        // Validar formulario antes de enviar
        if (!validateForm()) return

        const response = await addCommentRequest(postId, newComment) 
        if (!response.error) {
           
            
            const updatedCommentsResponse = await getCommentsByPostId(postId)
            if (!updatedCommentsResponse.error) {
                setComments(updatedCommentsResponse.data.comments) 
            } else {
                toast.error('Error al actualizar los comentarios')
            }

            setNewComment({ username: '', content: '' }) 
            toast.success('Comentario agregado con éxito')
        } else {
            toast.error('Error al agregar el comentario')
        }

        setIsCommenting(false) 
    }

    const handleGoBack = () => {
        navigate('/')
    }

    const handleStartCommenting = () => {
        setIsCommenting(true) 
    }

    const handleCancelCommenting = () => {
        setIsCommenting(false) 
    }


    return (
        <div className="comments-container">
        <div className="regresar-btn-container">
            <button onClick={handleGoBack} className="comments-go-back-btn">Regresar</button>
        </div>
    
        <h2 className="comments-title">Comentarios</h2>
    
        {!isCommenting && (
            <div onClick={handleStartCommenting} className="comments-start-area">
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
                />
                <textarea
                    name="content"
                    className="comments-textarea"
                    placeholder="Escribe tu comentario"
                    value={newComment.content}
                    onChange={handleInputChange}
                ></textarea>
                <div className="buttons-container">
                    <button type="button" onClick={handleCancelCommenting} className="comments-cancel-btn">Cancelar</button>
                    <button type="submit" className="comments-submit-btn">Comentar</button>
                </div>
            </form>
        )}
    
        <div className="comments-list">
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment._id} className="comment-item">
                        <div className="comment-header">
                            <p className="comment-username">{comment.username}</p>
                            <p className="comment-content">{comment.content}</p>
                            <p className="comment-date">Publicado: {new Date(comment.date).toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}</p>

                        </div>
                        
                    </div>
                ))
            ) : (
                <p className="no-comments-message">No hay comentarios para este post.</p>
            )}
        </div>
    </div>
    

    )
}
