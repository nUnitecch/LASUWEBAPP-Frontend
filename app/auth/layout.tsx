export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="w-full min-h-screen flex justify-center items-center overflow-x-hidden">
    //   {children}
    // </div>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md px-6">{children}</div>
    </div>
  );
}
