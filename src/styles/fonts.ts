import { Poppins } from 'next/font/google'

export const PoppinsFont = Poppins({
	weight: ['300', '400', '500', '600'],
	adjustFontFallback: true,
	fallback: ['cursive'],
	preload: true,
	style: 'normal',
	display: 'swap',
	subsets: ['latin'],
})
