import axios from "axios"

//Configuración base
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:3626/v1',
        timeout: 3000
    }
)

export const getPostRequest = async()=>{
    try{
        return await apiClient.get('/post/getAllPosts')
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const getCommentsByPostId = async (postId) => {
    try {
        return await apiClient.get(`/post/${postId}/comments`) 
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

// Agregar un nuevo comentario
export const addCommentRequest = async (postId, commentData) => {
    try {
        return await apiClient.post(`/post/${postId}/comments`, commentData) 
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}