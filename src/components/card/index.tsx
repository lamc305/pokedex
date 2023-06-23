import { InfoPokemon } from '@/model/InfoPokemon'
import { getFirstUpperCase } from '@/utils/getFirstUpperCase'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'
interface Props {
	name: string
	url: string
}

export interface Data {
	data: InfoPokemon
}

export function CardPokemon({ name, url }: Props) {
	const pokemon = use(axios.get(url))

	return (
		<Link href={`/pokemon/${pokemon.data.name}`}>
			<div className='w-[108px] h-[108px] relative py-1 px-2 flex flex-col items-center  rounded-lg shadow-drop-2-dp cursor-pointer'>
				<span className='self-end text-grayscale-medium text-[8px] leading-3'>
					{'#' + pokemon?.data.id?.toString().padStart(3, '0')}
				</span>
				<Image
					src={pokemon?.data.sprites?.other?.dream_world.front_default! || ''}
					alt={name}
					width={72}
					height={72}
					className='relative z-10 object-contain w-[72px] h-[72px]'
				/>
				<span className='text-body-3 realtive z-10'>
					{getFirstUpperCase(pokemon?.data.name)}
				</span>
				<div className='absolute bottom-0 h-11 rounded-[7px] left-0 right-0 bg-grayscale-background'></div>
			</div>
		</Link>
	)
}
