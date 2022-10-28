import { NextResponse, NextRequest } from "next/server";
import Movies from "./pages/leagues";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/leauges')) {
      return NextResponse.rewrite(new URL('/leagues', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/ligas')) {
        return NextResponse.rewrite(new URL('/leagues', request.url))
      }
  
   
}
