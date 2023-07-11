'use client'
import { useRouter } from 'next/navigation'
import ArrowBlack from '../icons/ArrowBlack'
import { useEffect } from 'react'

export default function Return({ className }: { className?: string }) {
	const { back } = useRouter()
	const handleReturnKey = (e: KeyboardEvent) => {
		if (e.code === 'Escape') {
			back()
		}
	}
	useEffect(() => {
		document.addEventListener('keydown', handleReturnKey)

		return () => document.removeEventListener('keydown', handleReturnKey)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<button onClick={() => back()}>
			<ArrowBlack className={`w-8 h-8 ${className}`} />
		</button>
	)
}
