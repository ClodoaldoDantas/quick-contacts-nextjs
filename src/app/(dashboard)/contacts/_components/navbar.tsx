import { Anchor } from '@/app/components/anchor'
import { getSession } from '@/lib/session'
import { ContactRoundIcon } from 'lucide-react'
import { SignOutButton } from './sign-out-button'

export async function Navbar() {
	const session = await getSession()

	return (
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
	)
}
