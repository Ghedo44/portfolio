import { Post } from "@/types/blog";
import Link from "next/link";
import { Button } from "./ui/button";

export function PostCard({ post }: { post: Post }) {
    return (
        <div
            className="flex flex-col border rounded-md dark:border-gray-700"
        >
            <video
                src={post.previewVideo}
                autoPlay
                muted
                loop
                className="rounded-t-md" />
            <div className="flex flex-col gap-3 p-4 grow">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.description}
                </p>
                <div className="flex flex-wrap gap-[4px]">
                    {post.technologies.map((technology, index) => (
                        <span
                            key={index}
                            className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
                <div className="flex gap-2 mt-auto">
                    <Link href={post.link}>
                        <Button variant="default">Read Article</Button>
                    </Link>
                    <Link href={post.code}>
                        <Button variant="outline">Code</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}