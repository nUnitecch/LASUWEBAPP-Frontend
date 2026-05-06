import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");

  if (isDashboardPage && !token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
