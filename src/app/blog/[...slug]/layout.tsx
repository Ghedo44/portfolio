export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen flex-col md:gap-12 gap-8 md:py-24 lg:pr-28 xl:pr-8 md:px-8 px-4 py-10 relative overflow-hidden lg:w-9/12 max-w-screen-2xl sm:w-full mx-auto lg:ml-72">
            {children}
        </div>
    );
}