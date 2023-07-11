import Navbar from '@/modules/navbar/navbar'
import { render } from '@testing-library/react'

describe('Home', () => {
	it('Render a text with Pokedex', () => {
		const { getByText } = render(<Navbar />)

		expect(getByText(/pokédex/i, { exact: false })).toBeInTheDocument()
	})

	it('Render an input with placeholder "Search"', () => {
		const { getByPlaceholderText } = render(<Navbar />)

		expect(getByPlaceholderText(/search/i))
	})
})
