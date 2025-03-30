import { ArrowLeftIcon, UserRoundPlusIcon } from 'lucide-react'
import Link from 'next/link'
import { NewContactForm } from './_components/new-contact-form'

export default function SignUpPage() {
	return (
		<div className="max-w-md py-8 md:py-12 px-4 mx-auto font-sans">
			<Link
				href="/contacts"
				className="flex items-center mb-10 gap-2 max-w-max text-zinc-900"
			>
				<ArrowLeftIcon size={20} />
				Voltar aos contatos
			</Link>

			<header className="mb-8">
				<h1 className="flex items-center gap-2 text-xl font-bold">
					<UserRoundPlusIcon size={20} />
					Adicionar novo contato
				</h1>

				<p className="text-zinc-600">
					Preencha os detalhes abaixo para criar um novo contato
				</p>
			</header>

			<NewContactForm />
		</div>
	)
}
