/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request.cookies.get('qid'))
  if (!request.cookies.get('qid')) {
    return NextResponse.redirect(new URL('/welcome', request.url), 307)
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/'
}