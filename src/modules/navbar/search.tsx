'use client'
import Dropdown from '@/components/dropdown'
import Search from '@/components/icons/Search'
import { useSearchContext } from '@/context/search'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { FormSearchValues, schemaValidationSearch } from '@/model/searchForm'
import { ErrorMessage } from '@hookform/error-message'

export default function SearchPokemon() {
	const { push } = useRouter()
	const { handleChangeFormValues, formValues } = useSearchContext()

	const methods = useForm({
		mode: 'onChange',
		defaultValues: {
			search: formValues.search || '',
			option: formValues.option || 'name',
		},
		resolver: yupResolver(schemaValidationSearch),
	})

	const {
		handleSubmit,
		register,
		watch,
		setValue,
		clearErrors,
		formState: { errors },
	} = methods

	console.log(errors)

	const onSubmit: SubmitHandler<FormSearchValues> = ({ option, search }) => {
		handleChangeFormValues(search, option)
		if (option === 'name') {
			push(`/search/?word=${search}`)
		} else {
			push(`pokemon/${search}`)
		}
	}

	useEffect(() => {
		setValue('search', '')
		clearErrors('search')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [watch('option')])

	useEffect(() => {
		setValue('search', formValues.search)
		setValue('option', formValues.option)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex items-center w-full justify-between relative'
			>
				<div
					className='flex h-8 items-center bg-grayscale-white py-2 pr-4 pl-3 shadow-inner-2-dp rounded-[16px] gap-2'
					style={{ width: '90%' }}
				>
					<Search className='w-4 h-4 text-identity-primary' />
					<input
						className='outline-none w-full h-4 text-body-3'
						type={watch('option') === 'name' ? 'text' : 'number'}
						placeholder='Search'
						id='search'
						{...register('search')}
					/>
				</div>
				<Dropdown />
				<ErrorMessage
					name='search'
					errors={errors}
					as={
						<span className='text-white absolute text-body-3 -bottom-[1.3rem]'></span>
					}
				/>
			</form>
		</FormProvider>
	)
}
