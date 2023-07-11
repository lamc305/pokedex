import { ReactNode } from 'react'

export default function List({ children }: { children: ReactNode }) {
	return (
		<div
			className='grid gap-2 justify-center'
			style={{ gridTemplateColumns: 'repeat(auto-fill, 108px)' }}
		>
			{children}
		</div>
	)
}
