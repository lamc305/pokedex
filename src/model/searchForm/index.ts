import { lazy, number, object, string } from 'yup'

export interface FormSearchValues {
	option: string
	search: string | number | null
}

export const schemaValidationSearch = () => {
	let option: string
	return object({
		option: lazy((val) => {
			option = val
			return string().required()
		}),
		search: lazy(() => {
			return lazy(() => {
				if (option === 'name') {
					return string().required('This field is required')
				}
				return number()
					.transform((val) => (Number.isNaN(val) ? null : val))
					.required('This field is required')
					.nullable()
					.max(1010, 'The number must be less than or equal to 1010')
					.positive('The number must be a positive number')
			})
		}),
	}).required()
}
