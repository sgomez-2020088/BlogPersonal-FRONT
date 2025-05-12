import { Outlet } from 'react-router-dom'
import { useContextPosts } from '../shared/hooks/useContextPosts'
import { SyncLoader } from 'react-spinners'

export const FeedContent = () => {
  const { isFetchingPosts } = useContextPosts()
  if (isFetchingPosts) {
    return (
      <div>
        <SyncLoader
          loading
          margin={0}
          size={20}
        />

      </div>
  
    )
  }
  return (
    <>
      {/* Manejar Rutas Hijas */}
      <Outlet />
    </>
  )
}
