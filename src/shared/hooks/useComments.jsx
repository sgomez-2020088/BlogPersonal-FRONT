import { useState, useEffect } from 'react'
import { getCommentsByPostId, addCommentRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useComments = (postId) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({ username: '', content: '' })
  const [errors, setErrors] = useState({ username: '', content: '' })
  const [isCommenting, setIsCommenting] = useState(false)

  useEffect(() => {
    if (!postId) return
    const fetchComments = async () => {
      const response = await getCommentsByPostId(postId)
      if (!response.error) {
        setComments(response.data.comments)
      } else {
        toast.error('No hay comentarios')
      }
    }
    fetchComments()
  }, [postId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewComment(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!newComment.username.trim()) {
      newErrors.username = 'Por favor, ingresa un nombre de usuario'
    } else if (newComment.username.length > 50) {
      newErrors.username = 'El nombre de usuario no puede superar los 50 caracteres'
    }

    if (!newComment.content.trim()) {
      newErrors.content = 'El contenido del comentario es obligatorio'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
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
      toast.success('Comentario agregado :D')
    } else {
      toast.error('Error al agregar el comentario')
    }
    setIsCommenting(false)
  }

  const startCommenting = () => setIsCommenting(true)
  const cancelCommenting = () => {
  
  setNewComment({ username: '', content: '' })
  setIsCommenting(false) 
}


  return {
    comments,
    newComment,
    errors,
    isCommenting,
    handleInputChange,
    handleCommentSubmit,
    startCommenting,
    cancelCommenting
  }
}