
import React, { useState } from "react"
import { Posts } from "../../components/Posts/Posts"
import { PostProvider } from "../../contexts/PostsContext"
import { Navbar } from "../../components/Posts/NavBar"

export const PostPage = () => {
const [filter, setFilter] = useState("Todos")

    const handleFilterChange = (course) => {
    setFilter(course)
    }

    return (
    <div>
        <Navbar handleFilterChange={handleFilterChange} />
            <PostProvider>
                <Posts filter={filter} />
            </PostProvider>
    </div>
    )
}
