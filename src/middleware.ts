/**
 * The middleware function checks if the request has an "admin-token" cookie and redirects to the
 * sign-in page if not authenticated.
 * @param {NextRequest} request - The `request` parameter in the `middleware` function represents the
 * incoming request object in Next.js. It contains information about the HTTP request made to the
 * server, such as headers, cookies, query parameters, and more. In the provided code snippet, the
 * middleware function checks if the request contains an "
 * @returns In the provided code snippet, the `middleware` function is being defined. Inside the
 * `middleware` function, it checks if the request contains a cookie named "admin-token" to determine
 * if the user is authenticated. If the user is not authenticated (i.e., if `isAuth` is false), the
 * function returns a `NextResponse` object that redirects the user to the "/auth/admin/sign
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuth = request.cookies.has("admin-token");
  if (!isAuth) {
    return NextResponse.redirect(new URL("/auth/admin/sign-in", request.url));
  }
}

export const config = {
  matcher: "/dashboard",
};
