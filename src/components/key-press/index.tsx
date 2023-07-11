'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactElement, useEffect } from 'react'

interface KeyProps {
	children: ReactElement
	id: number
	next?: boolean
}

export default function KeyPress({ children, id, next }: KeyProps) {
	const { replace } = useRouter()
	const handleKeyPress = (e: KeyboardEvent) => {
		e.preventDefault()
		if (e.code == 'ArrowRight') {
			if (id < 1010) {
				replace(`/pokemon/${id + 1}`)
			}
		} else if (e.code == 'ArrowLeft') {
			if (id > 1) {
				replace(`/pokemon/${id - 1}`)
			}
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress)

		return () => document.removeEventListener('keydown', handleKeyPress)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Link replace={true} href={`/pokemon/${next ? id + 1 : id - 1}`}>
			{children}
		</Link>
	)
}
