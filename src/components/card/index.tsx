import { InfoPokemon } from '@/model/InfoPokemon'
import axios from 'axios'
import Image from 'next/image'
import { use } from 'react'

interface Props {
	name: string
	url: string
}

export interface Data {
	data: InfoPokemon
}

export function CardPokemon({ name, url }: Props) {
	const { data }: Data = use(axios.get(url))
	return (
		<div
			className='w-[108px] h-[108px] relative py-1 px-2 flex flex-col items-center  rounded-lg shadow-drop-2-dp'
			key={name}
		>
			<span className='self-end text-grayscale-medium text-[8px] leading-3'>
				{'#' + data.order.toString().padStart(3, '0')}
			</span>
			<Image
				src={data.sprites['front_default']}
				alt={name}
				width={72}
				height={72}
				className='relative z-10'
			/>
			<span className='text-body-3 realtive z-10'>{data.name}</span>
			<div className='absolute bottom-0 h-11 rounded-[7px] left-0 right-0 bg-grayscale-background'></div>
		</div>
	)
}
