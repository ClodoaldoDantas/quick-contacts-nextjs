import { ArrowLeftIcon, UserRoundPlusIcon } from 'lucide-react'
import Link from 'next/link'
import { SignUpForm } from './_components/sign-up-form'

export default function SignUpPage() {
	return (
		<div className="max-w-md py-8 md:py-12 px-4 mx-auto font-sans">
			<Link
				href="/"
				className="flex items-center mb-10 gap-2 max-w-max text-zinc-900"
			>
				<ArrowLeftIcon size={20} />
				Voltar a página inicial
			</Link>

			<header className="mb-8">
				<h1 className="flex items-center gap-2 text-xl font-bold">
					<UserRoundPlusIcon size={20} />
					Cadastrar uma nova conta
				</h1>

				<p className="text-zinc-600">
					Preencha os dados abaixo para criar uma nova conta
				</p>
			</header>

			<SignUpForm />
		</div>
	)
}
