import Navbar from '@/features/navbar/navbar'
import { PokemonList } from '@/features/pokemons'

function Home({ searchParams }: any) {
	console.log(searchParams)
	return (
		<main className='bg-identity-primary w-full p-1 pb-[2.3rem] '>
			<Navbar />
			<PokemonList />
		</main>
	)
}
export default Home
