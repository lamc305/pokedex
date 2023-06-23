import { getPokemons } from '@/api'
import { CardPokemon } from '@/components/card'
import React, { use } from 'react'

export default function Pokemons() {
	const pokemons = use(getPokemons(0))

	return (
		<>
			<div
				className='grid gap-2 justify-center'
				style={{ gridTemplateColumns: 'repeat(auto-fill, 108px)' }}
			>
				{pokemons.results.map((res) => (
					<CardPokemon key={res.name} name={res.name} url={res.url} />
				))}
			</div>
			{pokemons && (
				<div className='flex items-center justify-center gap-3 mt-10'>
					{pokemons.previous && (
						<span className='bg-red-700 text-white flex items-center justify-center text-sm w-20 rounded-full h-8'>
							Prev
						</span>
					)}
					{pokemons.next && (
						<span className='bg-red-700 text-white flex items-center justify-center text-sm w-20 rounded-full h-8'>
							Next
						</span>
					)}
				</div>
			)}
		</>
	)
}
