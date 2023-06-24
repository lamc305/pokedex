import Navbar from '@/features/navbar/navbar'
import { PokemonList } from '@/features/pokemons'

function Home({ searchParams }: any) {
	return (
		<main className='bg-identity-primary w-full p-1 pb-[2.3rem] '>
			<Navbar />
			<PokemonList params={searchParams} />
		</main>
	)
}
export default Home
