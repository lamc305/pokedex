import { SinglePokemon } from '@/model/SinglePokemon'
import { http } from './axios.config'

// Get List of Pokemons

export interface Pokemon {
	count: number
	next: string
	previous: null
	results: Result[]
}

export interface Result {
	name: string
	url: string
}

export async function getPokemons(number: number): Promise<Pokemon> {
	const { data } = await http.get(`/pokemon?offset=${number}&limit=20`)
	return data
}

// Get Single pokemon

// Generated by https://quicktype.io

export async function getSinglePokemon(name: string): Promise<SinglePokemon> {
	const { data } = await http.get(`/pokemon/${name}`)
	return data
}