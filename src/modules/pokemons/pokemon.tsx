import { getPokemons } from '@/api'
import { CardPokemon } from '@/components/card'
import CardSkeleton from '@/components/card/skeleton'
import List from '@/components/list'
import Link from 'next/link'
import React, { Suspense, use } from 'react'

export interface Params {
	page: string
}

export default function Pokemons({ page }: Params) {
	const pokemons = use(getPokemons(page ? Number(page) : 0))

	return (
		<>
			<List>
				{pokemons?.results.map((res) => (
					<Suspense key={res.name} fallback={<CardSkeleton />}>
						<CardPokemon key={res.name} name={res.name} url={res.url} />
					</Suspense>
				))}
			</List>
			{pokemons && (
				<div className='flex items-center justify-center gap-3 mt-10'>
					{pokemons.previous && (
						<Link
							href={`/?page=${+page - 1}`}
							className='bg-red-700 text-white flex items-center justify-center text-sm w-20 rounded-full h-8'
						>
							Prev
						</Link>
					)}
					{pokemons.next && (
						<Link
							href={`/?page=${page ? +page + 1 : 1}`}
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
