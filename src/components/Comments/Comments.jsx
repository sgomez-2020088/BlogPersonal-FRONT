import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCommentsByPostId, addCommentRequest } from '../../services/api'
import toast from 'react-hot-toast'
import './Comments.css'

export const Comments = () => {
    const { postId } = useParams() // Obtener el postId de la URL
    const [comments, setComments] = useState([]) // Estado para los comentarios
    const [newComment, setNewComment] = useState({ username: '', content: '' }) // Estado para el nuevo comentario

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
            setComments([...comments, response.data]) // Agregar el comentario a la lista
            setNewComment({ username: '', content: '' }) // Limpiar el formulario
            toast.success('Comentario agregado con éxito')
        } else {
            toast.error('Error al agregar el comentario')
        }
    }

    return (
        <div className="comments-container">
            <h2 className="comments-title">Comentarios</h2>
            {/* Formulario para agregar comentario */}
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
                <button type="submit" className="comments-submit-btn">Agregar comentario</button>
            </form>

            {/* Lista de comentarios */}
            <div>
                {comments.length > 0 ? (
                    <ul className="comments-list">
                        {comments.map((comment) => (
                            <li key={comment._id} className="comments-list-item">
                                <p><strong>{comment.username}:</strong> {comment.content}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-comments-message">No hay comentarios para este post.</p>
                )}
            </div>
        </div>
    )
}
