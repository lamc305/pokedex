import Navbar from '@/modules/navbar/navbar'
import { ContentPokemon } from '@/modules/pokemons'
import Pokemons from '@/modules/pokemons/pokemon'

function Home({
	searchParams,
}: {
	searchParams: {
		page: string
	}
}) {
	const { page } = searchParams
	return (
		<main className='bg-identity-primary w-full p-1 pb-[2.3rem]'>
			<Navbar />
			<ContentPokemon>
				<Pokemons page={page} />
			</ContentPokemon>
		</main>
	)
}
export default Home
