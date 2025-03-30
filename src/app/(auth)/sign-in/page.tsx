import { ArrowLeftIcon, LogInIcon } from 'lucide-react'
import Link from 'next/link'
import { SignInForm } from './_components/sign-in-form'

export default function SignInPage() {
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
					<LogInIcon size={20} />
					Entre na sua conta
				</h1>

				<p className="text-zinc-600">
					Preencha os dados abaixo para acessar sua conta
				</p>
			</header>

			<SignInForm />
		</div>
	)
}
