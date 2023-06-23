import { Metadata } from 'next'
import './globals.css'
import { PoppinsFont } from '@/styles/fonts'

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
			<body className={PoppinsFont.className}>{children}</body>
		</html>
	)
}
