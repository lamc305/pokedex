import { getPokemons } from '@/api'
import { CardPokemon } from '@/components/card'
import React, { use } from 'react'

export default function Pokemons() {
	const data = use(getPokemons())
	return (
		<div
			className='grid gap-2 justify-center'
			style={{ gridTemplateColumns: 'repeat(auto-fill, 108px)' }}
		>
			{data?.results?.map((res) => (
				<CardPokemon key={res.name} name={res.name} url={res.url} />
			))}
		</div>
	)
}
