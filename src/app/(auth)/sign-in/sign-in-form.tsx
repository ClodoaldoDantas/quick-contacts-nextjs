'use client'

import { Button } from '@/app/components/button'
import { ErrorMessage } from '@/app/components/error-message'
import { Input } from '@/app/components/input'
import { Label } from '@/app/components/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { login } from '../actions'

const signInFormSchema = z.object({
	email: z.string().email('Informe um e-mail válido'),
	password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignInForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(signInFormSchema),
	})

	async function handleSignIn(data: SignInFormData) {
		const response = await login(data)

		if (!response.success) {
			toast.error(response.message)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(handleSignIn)}
			className="space-y-4"
			action="/sign-in"
			method="POST"
		>
			<div className="flex flex-col gap-1">
				<Label htmlFor="email">E-mail</Label>

				<Input
					type="text"
					id="email"
					placeholder="fulano@gmail.com"
					{...register('email')}
				/>

				<ErrorMessage error={errors.email} />
			</div>

			<div className="flex flex-col gap-1">
				<Label htmlFor="password">Senha</Label>

				<Input
					type="password"
					id="password"
					placeholder="********"
					{...register('password')}
				/>

				<ErrorMessage error={errors.password} />
			</div>

			<Button type="submit">Entrar</Button>
		</form>
	)
}
