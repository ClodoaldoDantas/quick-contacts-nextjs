import { getInitials } from '@/utils/get-initials'
import { removeMask } from '@/utils/remove-mask'
import { MailIcon, PhoneIcon } from 'lucide-react'
import { DeleteContactButton } from './delete-contact-button'

type ContactCardProps = {
	data: {
		id: string
		name: string
		email: string
		phone: string
	}
}

export function ContactCard({ data }: ContactCardProps) {
	const phoneUnmasked = removeMask(data.phone)
	const nameInitials = getInitials(data.name)

	return (
		<div className="bg-white p-4 rounded shadow flex items-center gap-4 relative">
			<span className="flex items-center justify-center shrink-0 rounded-full h-12 w-12 bg-zinc-100 border border-zinc-200 text-zinc-900 font-semibold">
				{nameInitials}
			</span>

			<div className="flex flex-col gap-1">
				<strong>{data.name}</strong>

				<div className="flex items-center gap-1 text-zinc-600">
					<MailIcon size={16} />

					<a className="text-sm hover:underline" href={`mailto:${data.email}`}>
						{data.email}
					</a>
				</div>

				<div className="flex items-center gap-1 text-zinc-600">
					<PhoneIcon size={16} />

					<a
						className="text-sm hover:underline"
						href={`tel:+55${phoneUnmasked}`}
					>
						{data.phone}
					</a>
				</div>
			</div>

			<DeleteContactButton contactId={data.id} />
		</div>
	)
}
