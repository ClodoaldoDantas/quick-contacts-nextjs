'use server'

import prisma from '@/lib/db'
import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function getContacts() {
	const session = await getSession()

	if (!session) {
		redirect('/sign-in')
	}

	const contacts = await prisma.contact.findMany({
		where: {
			userId: session.userId,
		},
		orderBy: {
			name: 'asc',
		},
	})

	return contacts
}

export async function createContact(payload: {
	name: string
	email: string
	phone: string
}) {
	const session = await getSession()

	if (!session) {
		redirect('/sign-in')
	}

	await prisma.contact.create({
		data: {
			name: payload.name,
			email: payload.email,
			phone: payload.phone,
			userId: session.userId,
		},
	})

	return {
		success: true,
		message: 'Contato criado com sucesso!',
	}
}
