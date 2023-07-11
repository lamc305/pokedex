import Pokemons from '@/modules/pokemons/pokemon'
// import QueryProvider from '@/modules/react-query'
import { render } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
	rest.get(
		'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
		(req, res, ctx) => {
			return res(ctx.json({ greeting: 'hello there' }))
		}
	)
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Test for the render of Home', () => {
	it('Render a Charmander in the list of page 0', async () => {
		const { findByText } = render(<Pokemons page='0' />)

		expect(await findByText(/charmander/i)).toBeInTheDocument()
	})

	it('Render a Charizar in the list of page 0', async () => {
		const { findByText } = render(<Pokemons page='0' />)

		expect(await findByText(/Charizard/i)).toBeInTheDocument()
	})
})
