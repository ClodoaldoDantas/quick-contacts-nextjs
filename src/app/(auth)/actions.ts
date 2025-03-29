'use server'

import prisma from '@/lib/db'
import { createSession, deleteSession } from '@/lib/session'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'

const user = {
	id: crypto.randomUUID(),
	email: 'john@doe.com',
	password: '123456',
	name: 'John Doe',
}

type AuthRequest = {
	name: string
	email: string
	password: string
}

export async function signUp({ name, email, password }: AuthRequest) {
	const userAlreadyExists = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	if (userAlreadyExists) {
		return {
			success: false,
			message: 'Usuário já cadastrado',
		}
	}

	const hashedPassword = await bcrypt.hash(password, 10)

	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	})

	await createSession({
		userId: user.id,
		email: user.email,
		name: user.name,
	})

	redirect('/contacts')
}

export async function signIn({ email, password }: Omit<AuthRequest, 'name'>) {
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	if (!user) {
		return {
			success: false,
			message: 'Credenciais inválidas',
		}
	}

	const passwordMatch = await bcrypt.compare(password, user.password)

	if (!passwordMatch) {
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

export async function signOut() {
	await deleteSession()
	redirect('/sign-in')
}
