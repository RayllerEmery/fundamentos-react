"use client"

import { use } from "react"
import { PostType } from "@/app/types"

export default function Posts({
    posts,
}: {
    posts: Promise<PostType[]>
}) {
    const allPosts = use(posts)

    return (
        <ul>
            {allPosts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}