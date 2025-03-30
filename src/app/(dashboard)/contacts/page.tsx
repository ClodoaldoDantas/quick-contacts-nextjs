import { Alert } from '@/app/components/alert'
import { Anchor } from '@/app/components/anchor'
import { getSession } from '@/lib/session'
import { ContactRoundIcon } from 'lucide-react'
import { ContactCard } from './contact-card'
import { SignOutButton } from './sign-out-button'

export default async function ContactsPage() {
	const session = await getSession()
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const contacts = [] as any[]

	return (
		<div className="max-w-5xl py-8 md:py-12 px-4 mx-auto font-sans">
			<header className="flex flex-wrap items-center justify-between gap-4 mb-10">
				<div className="flex flex-col">
					<h1 className="text-xl font-bold text-zinc-900">
						Bem vindo, {session?.name}
					</h1>

					<p className="text-zinc-600">Gerencie seus contatos em um só lugar</p>
				</div>

				<div className="flex flex-wrap items-center justify-between gap-2">
					<Anchor href="/contacts/new">
						<ContactRoundIcon size={20} />
						Adicionar Contato
					</Anchor>

					<SignOutButton />
				</div>
			</header>

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
