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
