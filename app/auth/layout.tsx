export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="w-full min-h-screen flex justify-center items-center overflow-hidden">
    //   {children}
    // </div>
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
