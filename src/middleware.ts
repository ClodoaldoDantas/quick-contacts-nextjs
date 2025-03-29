import { type NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/session'

const protectedRoutes = ['/contacts']
const publicRoutes = ['/sign-in', '/sign-up']

export default async function middleware(req: NextRequest) {
	// 2. Check if the current route is protected or public
	const path = req.nextUrl.pathname
	const isProtectedRoute = protectedRoutes.includes(path)
	const isPublicRoute = publicRoutes.includes(path)

	// 3. Decrypt the session from the cookie
	const session = await getSession()

	// 4. Redirect to /sign-in if the user is not authenticated
	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/sign-in', req.nextUrl))
	}

	// 5. Redirect to /dashboard if the user is authenticated
	if (isPublicRoute && session?.userId) {
		return NextResponse.redirect(new URL('/contacts', req.nextUrl))
	}

	return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
