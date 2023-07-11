import { ReactNode } from 'react'

interface ContentPokemonsProps {
	children: ReactNode
	className?: string
}

export function ContentPokemon({ children, className }: ContentPokemonsProps) {
	return (
		<div
			className={`${className} bg-grayscale-white min-h-[575px] max-w-2xl mx-auto shadow-inner-2-dp rounded-lg pt-6 px-3 pb-6`}
		>
			{children}
		</div>
	)
}
