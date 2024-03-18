import { getSinglePokemon } from '@/api'
import ChevronLeft from '@/components/icons/ChevronLeft'
import ChevronRigth from '@/components/icons/ChevronRight'
import PokeBall from '@/components/icons/Pokeball'
import Straighten from '@/components/icons/Straighten'
import Weight from '@/components/icons/Weight'
import KeyPress from '@/components/key-press'
import { RenderIf } from '@/components/renderif'
import Return from '@/components/return'
import { SinglePokemon } from '@/model/SinglePokemon'
import { colorsByType } from '@/utils/getColorByType'
import { getFirstUpperCase } from '@/utils/getFirstUpperCase'
import { getStats } from '@/utils/getStats'
import Image from 'next/image'
import { use } from 'react'

interface Params {
	params: {
		name: string
	}
}
export default function DetailPokemonView({ params }: Params) {
	const data: SinglePokemon = use(getSinglePokemon(params.name))
	return (
		<main
			className='w-full min-h-screen p-1'
			style={{
				backgroundColor: colorsByType[data.types[0].type.name],
			}}
		>
			<nav className='h-[220px] max-w-2xl relative mx-auto'>
				<div className='flex items-center justify-between px-5 h-[76px] text-white z-10 relative'>
					<div className='flex items-center  gap-2'>
						<Return />
						<h1 className='text-header-headline font-bold'>
							{getFirstUpperCase(data.name)}
						</h1>
					</div>
					<p className='font-bold text-header-subtitle-2'>
						#{data.id.toString().padStart(3, '0')}
					</p>
				</div>
				<PokeBall className='absolute top-2 right-2 ml-auto w-[208px] h-[208px] opacity-10 text-white' />
			</nav>
			<section className='min-h-[330px] p-[20px] max-w-2xl mx-auto bg-white rounded-lg relative'>
				<Image
					src={
						data.sprites.other?.dream_world.front_default
							? data.sprites.other?.dream_world.front_default
							: data.sprites.front_default || '/question.png'
					}
					alt={`Picture of ${data.name}`}
					className='w-[200px] h-[200px] absolute right-0 left-0 mx-auto -top-40 hover:scale-110 transition-all duration-200'
					width={200}
					height={200}
					priority={true}
				/>
				<RenderIf condition={data.id > 1}>
					<KeyPress id={data.id}>
						<ChevronLeft className='w-9 h-9 text-white absolute left-5 -top-20' />
					</KeyPress>
				</RenderIf>
				<RenderIf condition={data.id < 1010}>
					<KeyPress id={data.id} next>
						<ChevronRigth className='w-9 h-9 text-white absolute right-5 -top-20' />
					</KeyPress>
				</RenderIf>
				<div className='flex items-center justify-center gap-4 mt-10'>
					{data.types.map((res) => (
						<span
							className='px-2 py-[2px] rounded-[10px] text-white font-bold text-header-subtitle-3'
							key={res.type.name}
							style={{ backgroundColor: colorsByType[res.type.name] }}
						>
							{getFirstUpperCase(res.type.name)}
						</span>
					))}
				</div>
				<h2
					className='text-center font-bold text-header-subtitle-1 mt-4'
					style={{ color: colorsByType[data.types[0].type.name] }}
				>
					About
				</h2>
				<div className='grid grid-cols-3 mt-4 h-12 max-w-[312px] mx-auto gap-[1px] bg-grayscale-light'>
					<div className='bg-white flex flex-col gap-1'>
						<div className='flex items-center justify-center h-8 gap-2'>
							<Weight />{' '}
							<p className='text-grayscale-dark'>{data.weight / 10} kg</p>
						</div>
						<p className='text-center h-3 text-caption text-grayscale-medium'>
							Weight
						</p>
					</div>
					<div className='bg-white flex flex-col gap-1'>
						<div className='flex items-center justify-center h-8 gap-2'>
							<Straighten className='transform rotate-90' />{' '}
							<p className='text-grayscale-dark'>{data.height / 10} m</p>
						</div>
						<p className='text-center h-3 text-caption text-grayscale-medium'>
							Height
						</p>
					</div>
					<div className='bg-white flex flex-col gap-1'>
						<div className='h-8'>
							{data.abilities.slice(0, 2).map((res) => (
								<p
									key={res.ability.name + `${Math.random()}`}
									className='text-center text-grayscale-dark text-body-3'
								>
									{res.ability.name
										.split('-')
										.map((res) => getFirstUpperCase(res))
										.join('-')}
								</p>
							))}
						</div>
						<p className='text-center h-3 text-caption text-grayscale-medium'>
							Base Experience
						</p>
					</div>
				</div>
				<h2
					className='text-center font-bold text-header-subtitle-1 mt-4'
					style={{ color: colorsByType[data.types[0].type.name] }}
				>
					Base Stats
				</h2>
				<div className='max-w-[302px] mx-auto mt-4'>
					{data.stats.map((val) => (
						<div key={val.stat.name} className='h-4 flex items-center gap-2'>
							<div>
								<p
									className='text-header-subtitle-3 w-[27px] text-right pr-1'
									style={{ color: colorsByType[data.types[0].type.name] }}
								>
									{getStats[val.stat.name as string]}
								</p>
							</div>
							<div className='w-[1px] h-4 bg-grayscale-light text-transparent'>
								i
							</div>
							<div className='w-[23px]'>
								<p className='text-body-3 text-right w-[19px]'>
									{val.base_stat.toString().padStart(3, '0')}
								</p>
							</div>
							<div
								className='rounded-[4px] h-1 ml-2 w-full overflow-hidden relative'
								style={{
									backgroundColor: colorsByType[data.types[0].type.name] + '33',
								}}
							>
								<div
									className='h-1 absolute z-10'
									style={{
										backgroundColor: colorsByType[data.types[0].type.name],
										width: val.base_stat,
									}}
								></div>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
