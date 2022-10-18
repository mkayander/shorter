import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const excludes = ["/_", "/favicon.ico", "/api/get-url/"];

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname, origin } = req.nextUrl;
  if (excludes.some((pattern) => pathname.startsWith(pattern))) {
    console.log("Returning early");
    return;
  }

  const slug = req.nextUrl.pathname.split("/").pop();

  const data = await (await fetch(`${origin}/api/get-url/${slug}`)).json();

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
}
