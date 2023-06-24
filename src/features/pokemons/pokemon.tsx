import { getPokemons } from '@/api'
import { CardPokemon } from '@/components/card'
import Link from 'next/link'
import React, { use } from 'react'

export interface Params {
	params: {
		page: string
	}
}

export default function Pokemons({ params }: Params) {
	let pokemons = use(getPokemons(params.page ? +params.page : 0))
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
						<Link
							href={`/?page=${+params.page - 1}`}
							className='bg-red-700 text-white flex items-center justify-center text-sm w-20 rounded-full h-8'
						>
							Prev
						</Link>
					)}
					{pokemons.next && (
						<Link
							href={`/?page=${params.page ? +params.page + 1 : 1}`}
							className='bg-red-700 text-white flex items-center justify-center text-sm w-20 rounded-full h-8'
						>
							Next
						</Link>
					)}
				</div>
			)}
		</>
	)
}
