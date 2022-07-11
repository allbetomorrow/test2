/* eslint-disable @next/next/no-server-import-in-page */
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  if (!request.cookies.has('qid')) {
    return NextResponse.rewrite(new URL('/welcome', request.url))
  }
  return NextResponse.next()
}


export const config = {
  matcher: '/',
}
