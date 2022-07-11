/* eslint-disable @next/next/no-server-import-in-page */
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  if (!request.cookies.get('qid')) {
    return NextResponse.redirect(new URL('/welcome', request.url), 307)
  }
  return NextResponse.next()
}


export const config = {
  matcher: '/',
}
