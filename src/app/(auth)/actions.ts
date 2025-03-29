'use server'

import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'

const user = {
	id: crypto.randomUUID(),
	email: 'john@doe.com',
	password: '123456',
	name: 'John Doe',
}

export async function login({
	email,
	password,
}: { email: string; password: string }) {
	if (email !== user.email || password !== user.password) {
		return {
			success: false,
			message: 'Credenciais inválidas',
		}
	}

	await createSession({
		userId: user.id,
		email: user.email,
		name: user.name,
	})

	redirect('/contacts')
}

export async function logout() {
	await deleteSession()
	redirect('/sign-in')
}
