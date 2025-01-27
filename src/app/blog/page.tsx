import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="w-full flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-7/12 sm:w-full mx-auto">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p>Welcome to the blog page!</p>

            <Link href="/blog/hi">Post</Link>
        </div>
    );
}