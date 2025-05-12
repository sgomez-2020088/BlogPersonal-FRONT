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