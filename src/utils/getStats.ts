interface Stats {
	hp: string
	attack: string
	defense: string
	'special-attack': string
	'special-defense': string
	speed: string
	[str: string]: string
}

export const getStats: Stats = {
	hp: 'HP',
	attack: 'ATK',
	defense: 'DEF',
	'special-attack': 'SATK',
	'special-defense': 'SDEF',
	speed: 'SPD',
}
