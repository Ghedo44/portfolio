export async function generateStaticParams() {
    return [{ slug: "test" }];
}

export default function BlogPage() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-4">Blog Post</h1>
            <p>Welcome to the blog post page!</p>
        </>
    );
}