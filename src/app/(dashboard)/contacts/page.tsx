import { logout } from '@/app/(auth)/actions'
import { Button } from '@/app/components/button'
import { getSession } from '@/lib/session'

export default async function ContactsPage() {
	const session = await getSession()

	return (
		<div className="flex flex-col items-start gap-2">
			<p>Bem vindo, {session?.name}</p>

			<form action={logout}>
				<Button type="submit">Sair da Conta</Button>
			</form>
		</div>
	)
}
