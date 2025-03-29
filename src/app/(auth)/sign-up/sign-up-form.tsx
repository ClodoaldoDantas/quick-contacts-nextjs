'use client'

import { Button } from '@/app/components/button'
import { ErrorMessage } from '@/app/components/error-message'
import { Input } from '@/app/components/input'
import { Label } from '@/app/components/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { signUp } from '../actions'

const signUpFormSchema = z
	.object({
		name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
		email: z.string().email('Informe um e-mail válido'),
		password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
		confirmPassword: z
			.string()
			.min(6, 'A senha deve ter pelo menos 6 caracteres'),
	})
	.refine(data => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'As senhas não conferem',
	})

export type SignUpFormData = z.infer<typeof signUpFormSchema>

export function SignUpForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormData>({
		resolver: zodResolver(signUpFormSchema),
	})

	async function handleSignUp(data: SignUpFormData) {
		const response = await signUp(data)

		if (!response.success) {
			toast.error(response.message)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(handleSignUp)}
			className="space-y-4"
			action="/sign-in"
			method="POST"
		>
			<div className="flex flex-col gap-1">
				<Label htmlFor="name">Nome</Label>

				<Input
					type="text"
					id="name"
					placeholder="Fulano da Silva"
					{...register('name')}
				/>

				<ErrorMessage error={errors.name} />
			</div>

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

			<div className="flex flex-col gap-1">
				<Label htmlFor="confirmPassword">Confirmar Senha</Label>
				<Input
					type="password"
					id="confirmPassword"
					placeholder="********"
					{...register('confirmPassword')}
				/>

				<ErrorMessage error={errors.confirmPassword} />
			</div>

			<Button className="w-full" type="submit">
				Criar conta
			</Button>
		</form>
	)
}
