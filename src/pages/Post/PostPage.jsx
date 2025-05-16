
import React, { useState } from "react"
import { Posts } from "../../components/Posts/Posts"
import { PostProvider } from "../../contexts/PostsContext"
import { Navbar } from "../../components/Posts/NavBar"

export const PostPage = () => {
  const [filter, setFilter] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div>
      <Navbar setFilter={setFilter} setSearchQuery={setSearchQuery}/>
      <PostProvider>
        <Posts filter={filter} searchQuery={searchQuery} /> 
      </PostProvider>
    </div>
  )
}