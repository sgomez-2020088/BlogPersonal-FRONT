import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { PostProvider } from './contexts/PostsContext'


function App() {
  const elementRoutes = useRoutes(routes)

  return (
    <PostProvider>
    {elementRoutes}
    <Toaster position="bottom-center" reverseOrder={false} />
  </PostProvider>
  )
}

export default App
