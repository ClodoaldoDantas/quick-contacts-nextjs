'use client'

import { logout } from '@/app/(auth)/actions'
import { Button } from '@/app/components/button'
import { LogOutIcon } from 'lucide-react'

export function SignOutButton() {
	return (
		<Button variant="outline" onClick={() => logout()}>
			<LogOutIcon size={20} />
			Sair da Conta
		</Button>
	)
}
