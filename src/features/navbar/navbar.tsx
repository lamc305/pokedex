import PokeBall from '@/components/icons/Pokeball'
import Search from '@/components/icons/Search'
import Tag from '@/components/icons/Tag'

function Navbar() {
	return (
		<nav className='pt-3 px-3 pb-6 flex flex-col gap-2'>
			<div className='flex gap-3 items-center text-grayscale-white'>
				<PokeBall className='w-6 h-6 text-grayscale-white' />
				<span className='text-header-headline font-bold'>Pokédex</span>
			</div>
			<div className='flex gap-4 justify-between'>
				<div
					className='flex h-8 items-center bg-grayscale-white py-2 pr-4 pl-3 shadow-inner-2-dp rounded-[16px] gap-2'
					style={{ width: '90%' }}
				>
					<Search className='w-4 h-4 text-identity-primary' />
					<input
						className='outline-none w-full h-4 text-body-3'
						type='text'
						placeholder='Search'
					/>
				</div>
				<div className='bg-grayscale-white w-8 flex rounded-full shadow-inner-2-dp items-center justify-center'>
					<Tag className='text-identity-primary' />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
