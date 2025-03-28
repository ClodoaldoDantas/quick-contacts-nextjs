import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Quick Contacts',
	description: 'Gerencie seus contatos de forma fácil e organizada',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`antialiased ${poppins.variable}`}>{children}</body>
		</html>
	)
}
