import { Species } from '@/model/SinglePokemon'

interface Colors {
	bug: string
	dark: string
	dragon: string
	electric: string
	fairy: string
	fighting: string
	fire: string
	flying: string
	ghost: string
	normal: string
	grass: string
	ground: string
	ice: string
	poison: string
	psychic: string
	rock: string
	steel: string
	water: string
	[type: Species['name']]: string
}

export const colorsByType: Colors = {
	bug: '#A7B723',
	dark: '#75574C',
	dragon: '#7037FF',
	electric: '#F9CF30',
	fairy: '#E69EAC',
	fighting: '#C12239',
	fire: '#F57D31',
	flying: '#A891EC',
	ghost: '#30559B',
	normal: '#AAA67F',
	grass: '#74CB48',
	ground: '#DEC16B',
	ice: '#9AD6DF',
	poison: '#A43E9E',
	psychic: '#FB5584',
	rock: '#B69E31',
	steel: '#B7B9D0',
	water: '#6493EB',
}
