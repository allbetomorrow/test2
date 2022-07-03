/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  if (!request.cookies.get('qid')) {
    return NextResponse.redirect(new URL('/login', request.url), 307)
  }
}

export const config = {
  matcher: '/'
}