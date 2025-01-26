import Link from "next/link";

export default function BlogPage() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p>Welcome to the blog page!</p>

            <Link href="/blog/test">Post</Link>
        </>
    );
}