export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center overflow-x-hidden">
      {children}
    </div>
  );
}
