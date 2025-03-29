import { getSession } from '@/lib/session'
import { SignOutButton } from './sign-out-button'

export default async function ContactsPage() {
	const session = await getSession()

	return (
		<div className="p-4 flex flex-col items-start gap-2">
			<p>Bem vindo, {session?.name}</p>
			<SignOutButton />
		</div>
	)
}
