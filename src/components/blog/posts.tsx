"use client"
import { Post } from "@/types/blog"
import { PostCard } from "../post-card"

export interface PostsProps {
  posts: Post[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
