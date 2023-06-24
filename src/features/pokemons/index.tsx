import Pokemons, { Params } from './pokemon'

export function PokemonList({ params }: Params) {
	return (
		<div className='bg-grayscale-white min-h-[575px] max-w-2xl mx-auto shadow-inner-2-dp rounded-lg pt-6 px-3 pb-6'>
			<Pokemons params={params} />
		</div>
	)
}
