
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { PostPage } from "./pages/Post/PostPage";

export const routes = [
    {
        path: '/',
        element: <PostPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]