import { getSession } from '@/lib/session'
import { ContactRoundIcon, LogInIcon, UserRoundPlusIcon } from 'lucide-react'
import { Anchor } from '../components/anchor'

export default async function Home() {
	const session = await getSession()

	return (
		<main className="min-h-dvh w-full flex items-center justify-center font-sans">
			<div className="max-w-5xl px-4 text-center space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
					Mantenha seus contatos{' '}
					<span className="text-blue-600">organizados</span>
				</h1>

				<p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
					Uma maneira simples e intuitiva de gerenciar seus contatos com
					ferramentas de organização poderosas e armazenamento seguro.
				</p>

				{session ? (
					<div className="flex items-center justify-center">
						<Anchor href="/contacts" variant="outline" className="text-lg">
							<ContactRoundIcon size={20} />
							Minha Agenda
						</Anchor>
					</div>
				) : (
					<div className="flex flex-wrap items-center justify-center gap-4">
						<Anchor href="/sign-up" className="text-lg">
							<UserRoundPlusIcon size={20} />
							Inicie agora
						</Anchor>

						<Anchor href="/sign-in" variant="outline" className="text-lg">
							<LogInIcon size={20} />
							Fazer login
						</Anchor>
					</div>
				)}
			</div>
		</main>
	)
}
