import{ useState } from 'react'
import { getPostRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useApi = () => {
    const [posts, setPosts] = useState(null)
    const getPosts = async()=>{
       const response = await getPostRequest()
       if(response.error){
        return toast.error(
            response?.err?.response?.data?.message ||
            'Error al obtener las publicaciones'
        )
       }
       console.log(response)
       setPosts(response.data.posts)

    }
  return {
    posts, //Tiene las publicacioens
    isFetchingPosts: !posts, //Valida si ya respondió el back o no
    getPosts //Consulta las publicaciones al back
  }
}
