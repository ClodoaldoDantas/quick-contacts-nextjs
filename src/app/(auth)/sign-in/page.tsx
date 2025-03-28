import { Button } from '@/app/components/button'
import { Input } from '@/app/components/input'
import { Label } from '@/app/components/label'
import { ArrowLeftIcon, LogInIcon } from 'lucide-react'
import Link from 'next/link'

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

			<form className="space-y-4" action="/sign-in" method="POST">
				<div className="flex flex-col gap-1">
					<Label htmlFor="email">E-mail</Label>

					<Input
						type="text"
						name="email"
						id="email"
						placeholder="fulano@gmail.com"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<Label htmlFor="password">Senha</Label>

					<Input
						type="password"
						name="password"
						id="password"
						placeholder="********"
					/>
				</div>

				<Button type="submit">Entrar</Button>
			</form>
		</div>
	)
}
