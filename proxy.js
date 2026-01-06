import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import arcjet from "@arcjet/next";

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/saved-cars(.*)",
  "/reservations(.*)",
]);

// Minimal Arcjet setup (safe for Vercel)
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    {
      mode: "LIVE",
      rateLimit: { interval: "1m", limit: 100 },
    }
  ],
});

export default async function proxy(req) {
  // Arcjet minimal protection
  await aj.protect(req);

  // Clerk protection
  return clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();

    if (!userId && isProtectedRoute(req)) {
      return redirectToSignIn();
    }

    return NextResponse.next();
  })(req);
}
