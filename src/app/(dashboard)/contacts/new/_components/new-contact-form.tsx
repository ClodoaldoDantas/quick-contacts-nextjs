'use client'

import { createContact } from '@/app/(dashboard)/actions'
import { Button } from '@/app/components/button'
import { ErrorMessage } from '@/app/components/error-message'
import { Input } from '@/app/components/input'
import { Label } from '@/app/components/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useHookFormMask } from 'use-mask-input'
import { z } from 'zod'

const newContactFormSchema = z.object({
	name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
	email: z.string().email('Informe um e-mail válido'),
	phone: z
		.string()
		.min(1, 'Telefone é obrigatório')
		.regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Informe um telefone válido'),
})

export type NewContactFormData = z.infer<typeof newContactFormSchema>

export function NewContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewContactFormData>({
		resolver: zodResolver(newContactFormSchema),
	})

	const registerWithMask = useHookFormMask(register)
	const router = useRouter()

	async function handleCreateContact(data: NewContactFormData) {
		const response = await createContact(data)

		if (response.success) {
			toast.success('Contato criado com sucesso!')
			router.push('/contacts')
		}
	}

	return (
		<form
			onSubmit={handleSubmit(handleCreateContact)}
			className="space-y-4"
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
				<Label htmlFor="phone">Telefone</Label>

				<Input
					type="text"
					id="phone"
					placeholder="(99) 99999-9999"
					{...registerWithMask('phone', '(99) 99999-9999')}
				/>

				<ErrorMessage error={errors.phone} />
			</div>

			<Button className="w-full" type="submit">
				Adicionar contato
			</Button>
		</form>
	)
}
