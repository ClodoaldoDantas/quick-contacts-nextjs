'use client'

import { TrashIcon } from 'lucide-react'
import { toast } from 'sonner'
import { deleteContact } from '../../actions'

type DeleteContactButtonProps = {
	contactId: string
}

export function DeleteContactButton({ contactId }: DeleteContactButtonProps) {
	async function handleDeleteContact() {
		const confirm = window.confirm(
			'Tem certeza que deseja excluir este contato?',
		)

		if (!confirm) return

		const response = await deleteContact(contactId)

		if (response.success) {
			toast.success(response.message)
		} else {
			toast.error(response.message)
		}
	}

	return (
		<button
			onClick={handleDeleteContact}
			aria-label="Remover contato"
			className="size-10 flex items-center justify-center cursor-pointer hover:text-red-500 absolute top-1 right-1"
			type="submit"
		>
			<TrashIcon size={20} />
		</button>
	)
}
