'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Tag from '../icons/Tag'
import { useFormContext } from 'react-hook-form'

export default function Dropdown() {
	const { register, watch } = useFormContext()
	return (
		<div className='text-right'>
			<Menu as='div' className='relative inline-block text-left'>
				<div>
					<Menu.Button className='bg-grayscale-white w-8 h-8 flex rounded-full shadow-inner-2-dp items-center justify-center'>
						<Tag className='text-identity-primary' />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Menu.Items className='absolute right-0 px-1 w-[113px] origin-top-right rounded-xl bg-identity-primary ring-1 ring-black ring-opacity-5 focus:outline-none z-40 shadow-drop-6-dp'>
						<div className='px-5 py-4'>
							<h2 className='text-header-subtitle-2 font-bold text-white'>
								Search By:
							</h2>
						</div>
						<div className='px-5 py-4 w-[105px] flex flex-col gap-4 bg-white mx-auto rounded-lg'>
							<label
								htmlFor='name'
								className='flex items-center gap-2 text-body-3'
							>
								<input
									type='radio'
									id='name'
									value='name'
									checked={watch('option') === 'name'}
									{...register('option')}
								/>
								Name
							</label>
							<label
								htmlFor='number'
								className='flex items-center gap-2 text-body-3'
							>
								<input
									type='radio'
									id='number'
									value='number'
									checked={watch('option') === 'number'}
									{...register('option')}
								/>
								Number
							</label>
						</div>
						<div className='px-1 py-1'></div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
