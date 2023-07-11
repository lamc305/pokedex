'use client'
import { FormSearchValues } from '@/model/searchForm'
import { ReactNode, createContext, useContext, useState } from 'react'

interface PropsContext {
	formValues: FormSearchValues
	handleChangeFormValues: (
		search: FormSearchValues['search'],
		option: FormSearchValues['option']
	) => void
}

const SearchContext = createContext<PropsContext>({
	formValues: {
		search: '',
		option: 'name',
	},
	handleChangeFormValues: (search, option) => {},
})

export const SearchProvider = ({ children }: { children: ReactNode }) => {
	const [formValues, setFormValues] = useState<FormSearchValues>({
		search: '',
		option: 'name',
	})

	const handleChangeFormValues = (
		search: FormSearchValues['search'],
		option: FormSearchValues['option']
	) => {
		setFormValues((prev) => ({ ...prev, option, search }))
	}

	const data = { formValues, handleChangeFormValues }
	return (
		<SearchContext.Provider value={data}>{children}</SearchContext.Provider>
	)
}

export const useSearchContext = () => useContext(SearchContext)
