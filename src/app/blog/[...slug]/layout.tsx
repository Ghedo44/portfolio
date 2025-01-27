export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen p-8 lg:pl-72 min-[2050px]:pl-0 w-full max-w-screen-xl mx-auto">
            {children}
        </div>
    );
}