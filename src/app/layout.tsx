import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Pokedex',
	description: 'App created for learn to use the new version of NextJS',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
