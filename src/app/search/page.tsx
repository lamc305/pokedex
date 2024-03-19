import { Pokemon, getSerach } from '@/api'
import { CardPokemon } from '@/components/card'
import List from '@/components/list'
import Return from '@/components/return'
import { ContentPokemon } from '@/modules/pokemons'
import { use } from 'react'

export default function SearchView({
	searchParams,
}: {
	searchParams: { word: string }
}) {
	const data: Pokemon = use(getSerach())
	const dataFiltered = data.results.filter((res) =>
		res.name.toUpperCase().startsWith(searchParams.word.toUpperCase())
	)
	return (
		<main className='bg-identity-primary w-full p-1 pb-[2.3rem] h-max'>
			<div className='mt-10 max-w-2xl mx-auto flex items-center gap-1'>
				<Return className='text-white' />
				<h1 className='text-white text-center justify-self-center text-header-subtitle-1'>
					This is your search for the word &quot;{searchParams.word}&quot;
				</h1>
			</div>
			<ContentPokemon className='mt-10 relative'>
				<List>
					{dataFiltered.map((res) => (
						<CardPokemon key={res.name} name={res.name} url={res.url} />
					))}
					{dataFiltered.length === 0 && (
						<div className='absolute w-full h-96  flex items-center justify-center'>
							<p className='text-center text-header-subtitle-2'>
								There is not found pokemons with the word &quot;
								{searchParams.word}&quot;
							</p>
						</div>
					)}
				</List>
			</ContentPokemon>
		</main>
	)
}
