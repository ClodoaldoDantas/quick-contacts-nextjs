import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

type SessionPayload = {
	userId: string
	email: string
	name: string
	expiresAt: Date
}

export async function encrypt(payload: SessionPayload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('7d')
		.sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
	try {
		const { payload } = await jwtVerify(session, encodedKey, {
			algorithms: ['HS256'],
		})

		return payload
	} catch (err) {
		console.log('Failed to verify session')
	}
}

export async function createSession(data: Omit<SessionPayload, 'expiresAt'>) {
	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

	const session = await encrypt({
		...data,
		expiresAt,
	})

	const cookieStore = await cookies()

	cookieStore.set('session', session, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: 'lax',
		path: '/',
	})
}

export async function getSession() {
	const cookie = (await cookies()).get('session')?.value
	const session = await decrypt(cookie)

	if (!session) {
		return null
	}

	return session as SessionPayload
}

export async function deleteSession() {
	const cookieStore = await cookies()
	cookieStore.delete('session')
}
