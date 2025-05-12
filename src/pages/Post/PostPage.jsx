
import { Posts } from '../../components/Posts/Posts'
import { PostProvider } from '../../contexts/PostsContext'

export const PostPage = () => {    
    return (
    <div>
        <PostProvider>
            <Posts />
        </PostProvider>
    </div>
    )
}
