import Navbar from '@/features/navbar/navbar'
import { PokemonList } from '@/features/pokemons'

function Home() {
	return (
		<main className='bg-identity-primary w-full p-1 '>
			<Navbar />
			<PokemonList />
		</main>
	)
}
export default Home
