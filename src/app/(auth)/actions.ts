'use server'

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

	redirect('/contacts')
}
