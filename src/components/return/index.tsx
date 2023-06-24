'use client'
import { useRouter } from 'next/navigation'
import ArrowBlack from '../icons/ArrowBlack'

export default function Return() {
	const router = useRouter()

	return (
		<button onClick={() => router.back()}>
			<ArrowBlack className='w-8 h-8' />
		</button>
	)
}
