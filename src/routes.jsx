import { Posts } from "./components/Posts/Posts";
import { AuthPage } from "./pages/Auth/AuthPage";
import { FeedPage } from "./pages/Feed/FeedPage";
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