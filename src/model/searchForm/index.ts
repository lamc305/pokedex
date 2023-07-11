import * as yup from 'yup'

export interface FormSearchValues {
	option: string
	search: string | number | null
}

let option: string
export const schemaValidationSearch = yup
	.object()
	.shape({
		option: yup.lazy((val) => {
			option = val
			return yup.string().required()
		}),
		search: yup.lazy(() => {
			return yup.lazy(() => {
				if (option === 'name') {
					return yup.string().required('This field is required')
				}
				return yup
					.number()
					.transform((val) => (Number.isNaN(val) ? null : val))
					.required('This field is required')
					.nullable()
					.max(1010, 'The number must be less than or equal to 1010')
					.positive('The number must be a positive number')
			})
		}),
	})
	.required()
