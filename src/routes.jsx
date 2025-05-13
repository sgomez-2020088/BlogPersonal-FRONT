
import { Comments } from "./components/Comments/Comments";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { PostPage } from "./pages/Post/PostPage";


export const routes = [
    {
        path: '/',
        element: <PostPage />
    },
    {
        path: '/comments/:postId', 
        element: <Comments />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]