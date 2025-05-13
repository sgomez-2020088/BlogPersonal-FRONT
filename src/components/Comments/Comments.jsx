import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCommentsByPostId, addCommentRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import './Comments.css'

export const Comments = () => {
    const { postId } = useParams() // Obtener el postId de la URL
    const [comments, setComments] = useState([]) // Estado para los comentarios
    const [newComment, setNewComment] = useState({ username: '', content: '' })
    const [isCommenting, setIsCommenting] = useState(false) // Estado para mostrar el formulario de comentario
    const navigate = useNavigate()

    useEffect(() => {
        // Obtener los comentarios cuando la página se monta
        const fetchComments = async () => {
            const response = await getCommentsByPostId(postId)
            if (!response.error) {
                setComments(response.data.comments) // Establecer los comentarios en el estado
            } else {
                toast.error('Error al cargar los comentarios')
            }
        }
        fetchComments()
    }, [postId])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewComment({ ...newComment, [name]: value }) // Actualizar el estado del comentario
    }

    const handleCommentSubmit = async (e) => {
        e.preventDefault() // Evitar que el formulario se recargue

        const response = await addCommentRequest(postId, newComment) // Llamar a la API para agregar el comentario
        if (!response.error) {
            // The response.data appears to not have the comment object
            // So, after adding the comment, fetch the updated comments list:
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
                    comments.map((comment, index) => {
                        if (!comment._id) {
                            console.warn('Comment missing _id:', comment)
                        }
                        return (
                            <div key={comment._id || index} className="comment-item">
                                <div className="comment-header">
                                    <p className="comment-username">{comment.username}</p>
                                    <p className="comment-date">Publicado: {new Date(comment.date).toLocaleDateString('es-ES', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}</p>
                                </div>
                                <p className="comment-content">{comment.content}</p>
                            </div>
                        )
                    })
                ) : (
                    <p className="no-comments-message">No hay comentarios para este post.</p>
                )}
            </div>
        </div>
    )
}

