/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios'
import sessionMiddleware from './utils/sessionMiddleware'


export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/login')) {
    console.log('it`s login')
    return NextResponse.next()
  }

  if (!request.cookies.get('qid')) {
    return NextResponse.redirect(new URL('/welcome', request.url), 307)
  }
}

export const config = {
  matcher: ['/', '/:path']
}