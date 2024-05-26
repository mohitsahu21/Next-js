import { NextResponse } from "next/server"

export function middleware (request){

    // if(request.nextUrl.pathname != "/study"){
        return NextResponse.redirect(new URL("/study",request.url))

    // }
}

export const config = {
    matcher : ["/about/:path*","/student/:path*"]
}