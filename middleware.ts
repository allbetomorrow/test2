/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  if (!request.cookies.get('qid')) {
    return NextResponse.rewrite(new URL('login', request.url))
  }
}

export const config = {
  matcher: ['/', '/:slug'],
}