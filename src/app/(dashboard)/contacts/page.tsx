import { Alert } from '@/app/components/alert'
import { getContacts } from '../actions'
import { ContactCard } from './_components/contact-card'
import { Navbar } from './_components/navbar'

export default async function ContactsPage() {
	const contacts = await getContacts()

	return (
		<div className="max-w-5xl py-8 md:py-12 px-4 mx-auto font-sans">
			<Navbar />

			{contacts.length === 0 && (
				<Alert message="Você não possui nenhum contato cadastrado." />
			)}

			<div className="grid sm:grid-cols-2 gap-4">
				{contacts.map(contact => (
					<ContactCard key={contact.id} data={contact} />
				))}
			</div>
		</div>
	)
}
