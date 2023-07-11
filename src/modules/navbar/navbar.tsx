import PokeBall from '@/components/icons/Pokeball'
import SearchPokemon from './search'

function Navbar() {
	return (
		<nav className='pt-3 px-3 pb-6 flex flex-col gap-2 max-w-2xl mx-auto'>
			<div className='flex gap-3 items-center text-grayscale-white'>
				<PokeBall className='w-6 h-6 text-grayscale-white' />
				<span className='text-header-headline font-bold'>Pokédex</span>
			</div>
			<div className='flex gap-4 justify-between'>
				<SearchPokemon />
			</div>
		</nav>
	)
}

export default Navbar
