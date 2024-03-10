export default function BodyContent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="mt-1">
            {children}
        </div>
    );

}